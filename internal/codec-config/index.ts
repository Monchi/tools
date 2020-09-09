import {
	ConfigCommentMap,
	ConfigParserOptions, ConfigType,
	ConfigTypeMethods,
	ConsumeConfigResult,
	PartialConfigTypeMethods
} from "@internal/codec-config/types";
import {RequiredProps} from "@internal/typescript-helpers";
import {createUnknownPath} from "@internal/path";
import {rjson as _rjson, json as _json, yaml as _yaml} from "./json/index";
import {toml as _toml} from "./toml/index";
import {consume, Consumer, consumeUnknown} from "@internal/consume";
import {ParserOptions} from "@internal/parser-core";
import {JSONValue} from "@internal/codec-config/json/types";
import {parseJSONExtra} from "@internal/codec-config/json/parse";
import {DiagnosticCategory} from "@internal/diagnostics";

export {
	JSONArray,
	JSONObject,
	JSONPropertyValue,
	JSONValue,
} from "./json/types";

export {
	ConsumeConfigResult,
	ConfigCommentMap,
} from "./types";


export const rjson = partialToFull("rjson", "parse/json", _rjson);
export const json = partialToFull("json", "parse/json", _json);
export const yaml = partialToFull("yaml", "parse/yaml", _yaml);
export const toml = partialToFull("toml", "parse/toml", _toml);

function partialToFull(configType: ConfigType, category: DiagnosticCategory, partial: PartialConfigTypeMethods): ConfigTypeMethods {
	const full: ConfigTypeMethods = {
		...partial,

		consumeValue(opts: ConfigParserOptions): Consumer {
			return full.consume(opts).consumer;
		},

		consume(opts: ConfigParserOptions): ConsumeConfigResult {
			const {type, value, context, comments} = parseJSONExtra(opts, configType, category);

			return {
				type,
				consumer: consume({
					filePath: opts.path === undefined ? undefined : createUnknownPath(opts.path),
					context,
					objectPath: [],
					value,
					parent: undefined,
				}),
				comments,
			};
		},

		parse(opts: ParserOptions): JSONValue {
			return partial.parseExtra(opts).value;
		},

		stringify(
			value: unknown,
			comments: ConfigCommentMap = new Map(),
		): string {
			return partial.stringifyFromConsumer({
				type: configType,
				consumer: consumeUnknown(value, category),
				comments,
			});
		},
	};

	return full;
}

export function consumeConfig(opts: RequiredProps<ConfigParserOptions, "path">): ConsumeConfigResult {
	const path = createUnknownPath(opts.path);

	if (json.isPath(path)) {
		return json.consume(opts);
	}

	if (yaml.isPath(path)) {
		return yaml.consume(opts);
	}

	if (toml.isPath(path)) {
		return toml.consume(opts);
	}

	throw new Error(`No config parser found for ${path.join()}`);
}

export function stringifyConfig(res: ConsumeConfigResult) {
	switch (res.type) {
		case "rjson":
			return rjson.stringifyFromConsumer(res) + "\n";

		case "json":
			return json.stringifyFromConsumer(res) + "\n";

		case "yaml":
			return yaml.stringifyFromConsumer(res) + "\n";

		case "toml":
			return toml.stringifyFromConsumer(res) + "\n";
	}
}
