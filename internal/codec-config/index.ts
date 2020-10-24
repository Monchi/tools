import {
	ConfigCommentMap,
	ConfigParserOptions,
	ConfigHandler,
	ConsumeConfigResult,
	PartialConfigHandler
} from "@internal/codec-config/types";
import {RequiredProps} from "@internal/typescript-helpers";
import {createUnknownPath} from "@internal/path";
import {rjson as _rjson, json as _json, yaml as _yaml, json5 as _json5} from "./json/index";
import {toml as _toml} from "./toml/index";
import {consume, Consumer, consumeUnknown} from "@internal/consume";
import {ParserOptions} from "@internal/parser-core";
import {JSONValue} from "@internal/codec-config/json/types";

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

export const CONFIG_HANDLERS: Array<ConfigHandler> = [];
export const CONFIG_EXTENSIONS: Array<string> = [];

export const rjson = partialToFull(_rjson);
export const json = partialToFull(_json);
export const yaml = partialToFull(_yaml);
export const toml = partialToFull(_toml);
export const json5 = partialToFull(_json5)

function partialToFull(partial: PartialConfigHandler): ConfigHandler {
	const full: ConfigHandler = {
		...partial,

		consumeValue(opts: ConfigParserOptions): Consumer {
			return full.consume(opts).consumer;
		},

		consume(opts: ConfigParserOptions): ConsumeConfigResult {
			const {type, value, context, comments} = partial.parseExtra(opts);

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
				consumer: consumeUnknown(value, partial.consumeCategory),
				comments,
			});
		},
	};

	CONFIG_HANDLERS.push(full);

	for (const ext of partial.extensions) {
		CONFIG_EXTENSIONS.push(ext);
	}

	return full;
}

export function consumeConfig(opts: RequiredProps<ConfigParserOptions, "path">): ConsumeConfigResult {
	const path = createUnknownPath(opts.path);

	for (const handler of CONFIG_HANDLERS) {
		for (const ext of handler.extensions) {
			if (path.hasEndExtension(ext)) {
				return handler.consume(opts);
			}
		}
	}

	throw new Error(`No config parser found for path ${path.join()}`);
}

export function stringifyConfig(res: ConsumeConfigResult): string {
	for (const handler of CONFIG_HANDLERS) {
		if (handler.type === res.type) {
			return handler.stringifyFromConsumer(res) + "\n";
		}
	}

	throw new Error(`No config parser found for type ${res.type}`);
}
