/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ConsumeContext, Consumer} from "@internal/consume";
import {ParserOptions, TokenBase} from "@internal/parser-core";
import {DiagnosticCategory} from "@internal/diagnostics";
import {JSONValue} from "@internal/codec-config/json/types";
import {AnyFilePath} from "@internal/path";

export type ConfigParserOptions = Omit<ParserOptions, "retainCarriageReturn"> & {
	consumeDiagnosticCategory?: DiagnosticCategory;
};

export type ConfigType = "rjson" | "json" | "yaml" | "toml";

export type ConsumeConfigResult = {
	type: ConfigType;
	consumer: Consumer;
	comments: ConfigCommentMap;
};

export type PathComments = {
	inner: Comments;
	outer: Comments;
};

export type ConfigCommentMap = Map<string, PathComments>;

export type LineComment = {
	type: "LineComment";
	value: string;
};

export type BlockComment = {
	type: "BlockComment";
	value: string;
};

export type Comments = Array<BlockComment | LineComment>;

export type ConfigParserResult = {
	type: ConfigType;
	value: JSONValue;
	context: Required<ConsumeContext>;
	comments: ConfigCommentMap;
};

export type ConfigTypeMethods = PartialConfigTypeMethods & {
	consumeValue: (opts: ConfigParserOptions) => Consumer,
	consume: (opts: ConfigParserOptions) => ConsumeConfigResult,
	parse: (opts: ParserOptions) => unknown,
	stringify: (
		value: unknown,
		comments?: ConfigCommentMap,
	) => string,
};

export type PartialConfigTypeMethods = {
	isPath: (path: AnyFilePath) => boolean,
	parseExtra: (opts: ParserOptions) => ConfigParserResult,
	tokenize: (opts: ConfigParserOptions) => Array<TokenBase & {value?: unknown}>,
	stringifyFromConsumer: (opts: ConsumeConfigResult) => string,
};
