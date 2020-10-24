import {
	ConfigParserOptions,
	ConfigParserResult,
	PartialConfigHandler, PartialConsumeConfigResult
} from "@internal/codec-config/types";
import {ParserOptions, TokenBase} from "@internal/parser-core";

export const toml: PartialConfigHandler = {
	type: "toml",
	language: "toml",
	extensions: ["toml", "ini"],
	consumeCategory: "parse/toml",
	jsonSuperset: false,

	parseExtra(opts: ParserOptions): ConfigParserResult {
		throw new Error("todo");
	},

	tokenize(opts: ConfigParserOptions): Array<TokenBase> {
		throw new Error("todo");
	},

	stringifyFromConsumer(opts: PartialConsumeConfigResult): string {
		throw new Error("todo");
	},
};
