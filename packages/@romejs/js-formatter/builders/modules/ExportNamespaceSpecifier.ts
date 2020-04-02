/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Tokens, operator, space, word} from '../../tokens';
import {
  ExportNamespaceSpecifier,
  exportNamespaceSpecifier,
  AnyNode,
} from '@romejs/js-ast';

export default function ExportNamespaceSpecifier(
  builder: Builder,
  node: AnyNode,
): Tokens {
  node = exportNamespaceSpecifier.assert(node);

  return [
    operator('*'),
    space,
    word('as'),
    space,
    ...builder.tokenize(node.exported, node),
  ];
}