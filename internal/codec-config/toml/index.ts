import {ConsumeConfigResult} from "@internal/codec-config";
import {
	ConfigParserOptions,
	ConfigParserResult,
	PartialConfigTypeMethods
} from "@internal/codec-config/types";
import {ParserOptions, TokenBase} from "@internal/parser-core";
import {AnyFilePath} from "@internal/path";

export const toml: PartialConfigTypeMethods = {
	isPath(path: AnyFilePath): boolean {
		return path.hasExtension("toml") || path.hasExtension("ini");
	},

	parseExtra(opts: ParserOptions): ConfigParserResult {
		throw new Error("todo");
	},

	tokenize(opts: ConfigParserOptions): Array<TokenBase> {
		throw new Error("todo");
	},

	stringifyFromConsumer(opts: ConsumeConfigResult): string {
		throw new Error("todo");
	},
};
