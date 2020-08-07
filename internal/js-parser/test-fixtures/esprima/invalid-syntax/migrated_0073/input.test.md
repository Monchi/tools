# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0073`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0073/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0073/input.js"
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
				filename: "esprima/invalid-syntax/migrated_0073/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 10
					line: 1
				}
				start: Object {
					column: 10
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0073/input.js"
				end: Object {
					column: 13
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSObjectExpression {
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0073/input.js"
					end: Object {
						column: 13
						line: 1
					}
					start: Object {
						column: 1
						line: 1
					}
				}
				properties: Array [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "set"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0073/input.js"
									identifierName: "set"
									end: Object {
										column: 6
										line: 1
									}
									start: Object {
										column: 3
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0073/input.js"
								end: Object {
									column: 6
									line: 1
								}
								start: Object {
									column: 3
									line: 1
								}
							}
						}
						value: JSCallExpression {
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0073/input.js"
								end: Object {
									column: 13
									line: 1
								}
								start: Object {
									column: 8
									line: 1
								}
							}
							callee: JSReferenceIdentifier {
								name: "s"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0073/input.js"
									identifierName: "s"
									end: Object {
										column: 9
										line: 1
									}
									start: Object {
										column: 8
										line: 1
									}
								}
							}
							arguments: Array [
								JSReferenceIdentifier {
									name: "INVALID_PLACEHOLDER"
									loc: Object {
										filename: "esprima/invalid-syntax/migrated_0073/input.js"
										end: Object {
											column: 12
											line: 1
										}
										start: Object {
											column: 10
											line: 1
										}
									}
								}
							]
						}
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0073/input.js"
							end: Object {
								column: 13
								line: 1
							}
							start: Object {
								column: 3
								line: 1
							}
						}
					}
				]
			}
		}
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0073/input.js"
				end: Object {
					column: 17
					line: 1
				}
				start: Object {
					column: 14
					line: 1
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0073/input.js"
				end: Object {
					column: 19
					line: 1
				}
				start: Object {
					column: 18
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0073/input.js"
					end: Object {
						column: 19
						line: 1
					}
					start: Object {
						column: 18
						line: 1
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0073/input.js"
				end: Object {
					column: 20
					line: 1
				}
				start: Object {
					column: 19
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0073/input.js"
					end: Object {
						column: 20
						line: 1
					}
					start: Object {
						column: 19
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0073/input.js:1:10 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an call expression argument

    ({ set: s(if) { } })
              ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```