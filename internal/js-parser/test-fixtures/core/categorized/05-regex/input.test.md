# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > categorized > 05-regex`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/categorized/05-regex/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/categorized/05-regex/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "core/categorized/05-regex/input.js"
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
				arguments: Array []
				loc: Object {
					filename: "core/categorized/05-regex/input.js"
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
					name: "test"
					loc: Object {
						filename: "core/categorized/05-regex/input.js"
						identifierName: "test"
						end: Object {
							column: 4
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
			}
		}
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "foo"
				loc: Object {
					filename: "core/categorized/05-regex/input.js"
					identifierName: "foo"
					end: Object {
						column: 20
						line: 1
					}
					start: Object {
						column: 17
						line: 1
					}
				}
			}
			loc: Object {
				filename: "core/categorized/05-regex/input.js"
				end: Object {
					column: 25
					line: 1
				}
				start: Object {
					column: 8
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "core/categorized/05-regex/input.js"
					end: Object {
						column: 25
						line: 1
					}
					start: Object {
						column: 23
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "core/categorized/05-regex/input.js"
					end: Object {
						column: 22
						line: 1
					}
					start: Object {
						column: 20
						line: 1
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "core/categorized/05-regex/input.js"
				end: Object {
					column: 31
					line: 1
				}
				start: Object {
					column: 26
					line: 1
				}
			}
			expression: JSRegExpLiteral {
				global: false
				insensitive: true
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: false
				loc: Object {
					filename: "core/categorized/05-regex/input.js"
					end: Object {
						column: 31
						line: 1
					}
					start: Object {
						column: 26
						line: 1
					}
				}
				expression: JSRegExpSubExpression {
					loc: Object {
						filename: "core/categorized/05-regex/input.js"
						end: Object {
							column: 29
							line: 1
						}
						start: Object {
							column: 27
							line: 1
						}
					}
					body: Array [
						JSRegExpCharacter {
							value: "4"
							loc: Object {
								filename: "core/categorized/05-regex/input.js"
								end: Object {
									column: 28
									line: 1
								}
								start: Object {
									column: 27
									line: 1
								}
							}
						}
						JSRegExpCharacter {
							value: "2"
							loc: Object {
								filename: "core/categorized/05-regex/input.js"
								end: Object {
									column: 29
									line: 1
								}
								start: Object {
									column: 28
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
