import {ConsumeConfigResult} from "@internal/codec-config";
import {createJSONParser, parseJSONExtra} from "@internal/codec-config/json/parse";
import {TokenValues} from "@internal/parser-core";
import {Tokens} from "./types";
import {stringifyRootConsumer} from "./stringify";
import {ConfigParserOptions, ConfigType, PartialConfigTypeMethods} from "@internal/codec-config/types";
import {AnyFilePath} from "@internal/path";
import {DiagnosticCategory} from "@internal/diagnostics";

function createJSONParserMethods(type: ConfigType, parseCategory: DiagnosticCategory): Omit<PartialConfigTypeMethods, "isPath"> {
	return {
		parseExtra(opts) {
			return parseJSONExtra(opts, type, parseCategory);
		},

		tokenize(
			opts: ConfigParserOptions,
		): Array<TokenValues<Tokens>> {
			return createJSONParser(opts, {type}, parseCategory).tokenizeAll();
		},

		stringifyFromConsumer(
			opts: ConsumeConfigResult,
		): string {
			const val = opts.consumer.asUnknown();
			const serial = JSON.stringify(val, null, "\t");
			if (serial === undefined) {
				return "undefined";
			} else {
				return serial;
			}
		},
	};
}

export const json: PartialConfigTypeMethods = {
	isPath(path: AnyFilePath): boolean {
		return path.hasExtension("json") || path.hasExtension("json5");
	},

	...createJSONParserMethods("json", "parse/json"),
};

export const rjson: PartialConfigTypeMethods = {
	...createJSONParserMethods("rjson", "parse/json"),

	isPath(path: AnyFilePath): boolean {
		return path.hasExtension("rjson");
	},

	stringifyFromConsumer(
		opts: ConsumeConfigResult,
	): string {
		return stringifyRootConsumer(opts.consumer, opts.comments);
	},
};

export const yaml: PartialConfigTypeMethods = {
	...createJSONParserMethods("yaml", "parse/yaml"),

	isPath(path: AnyFilePath): boolean {
		return path.hasExtension("yaml") || path.hasExtension("yml");
	},

	stringifyFromConsumer(
		opts: ConsumeConfigResult,
	): string {
		throw new Error("todo");
	},
};
