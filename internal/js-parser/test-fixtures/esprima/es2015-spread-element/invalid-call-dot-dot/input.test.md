# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-spread-element > invalid-call-dot-dot`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unknown start to an "}
						"call expression argument"
					]
				}
			}
			location: Object {
				filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 2
					line: 1
				}
				start: Object {
					column: 2
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
				end: Object {
					column: 7
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSCallExpression {
				loc: Object {
					filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
					end: Object {
						column: 6
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "f"
					loc: Object {
						filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
						identifierName: "f"
						end: Object {
							column: 1
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				arguments: Array [
					JSMemberExpression {
						loc: Object {
							filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
							end: Object {
								column: 5
								line: 1
							}
							start: Object {
								column: 2
								line: 1
							}
						}
						object: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: Object {
								filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
								end: Object {
									column: 3
									line: 1
								}
								start: Object {
									column: 2
									line: 1
								}
							}
						}
						property: JSStaticMemberProperty {
							value: JSIdentifier {
								name: "g"
								loc: Object {
									filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
									identifierName: "g"
									end: Object {
										column: 5
										line: 1
									}
									start: Object {
										column: 4
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-spread-element/invalid-call-dot-dot/input.js"
								identifierName: "g"
								end: Object {
									column: 5
									line: 1
								}
								start: Object {
									column: 4
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-spread-element/invalid-call-dot-dot/input.js:1:2 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an call expression argument

    f(..g);
      ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```