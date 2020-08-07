# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > function > getter-setter`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/function/getter-setter/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/function/getter-setter/input.ts"
		end: Object {
			column: 2
			line: 6
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "typescript/function/getter-setter/input.ts"
				end: Object {
					column: 2
					line: 3
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "typescript/function/getter-setter/input.ts"
					end: Object {
						column: 2
						line: 3
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "g"
							loc: Object {
								filename: "typescript/function/getter-setter/input.ts"
								identifierName: "g"
								end: Object {
									column: 7
									line: 1
								}
								start: Object {
									column: 6
									line: 1
								}
							}
						}
						loc: Object {
							filename: "typescript/function/getter-setter/input.ts"
							end: Object {
								column: 1
								line: 3
							}
							start: Object {
								column: 6
								line: 1
							}
						}
						init: JSObjectExpression {
							loc: Object {
								filename: "typescript/function/getter-setter/input.ts"
								end: Object {
									column: 1
									line: 3
								}
								start: Object {
									column: 10
									line: 1
								}
							}
							properties: Array [
								JSObjectMethod {
									kind: "get"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "m"
											loc: Object {
												filename: "typescript/function/getter-setter/input.ts"
												identifierName: "m"
												end: Object {
													column: 7
													line: 2
												}
												start: Object {
													column: 6
													line: 2
												}
											}
										}
										loc: Object {
											filename: "typescript/function/getter-setter/input.ts"
											end: Object {
												column: 7
												line: 2
											}
											start: Object {
												column: 6
												line: 2
											}
										}
									}
									loc: Object {
										filename: "typescript/function/getter-setter/input.ts"
										end: Object {
											column: 20
											line: 2
										}
										start: Object {
											column: 2
											line: 2
										}
									}
									body: JSBlockStatement {
										body: Array []
										directives: Array []
										loc: Object {
											filename: "typescript/function/getter-setter/input.ts"
											end: Object {
												column: 20
												line: 2
											}
											start: Object {
												column: 18
												line: 2
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
										typeParameters: undefined
										loc: Object {
											filename: "typescript/function/getter-setter/input.ts"
											end: Object {
												column: 17
												line: 2
											}
											start: Object {
												column: 7
												line: 2
											}
										}
										thisType: JSBindingIdentifier {
											name: "this"
											loc: Object {
												filename: "typescript/function/getter-setter/input.ts"
												identifierName: "this"
												end: Object {
													column: 12
													line: 2
												}
												start: Object {
													column: 8
													line: 2
												}
											}
											meta: JSPatternMeta {
												optional: undefined
												loc: Object {
													filename: "typescript/function/getter-setter/input.ts"
													end: Object {
														column: 16
														line: 2
													}
													start: Object {
														column: 8
														line: 2
													}
												}
												typeAnnotation: TSObjectTypeAnnotation {
													members: Array []
													loc: Object {
														filename: "typescript/function/getter-setter/input.ts"
														end: Object {
															column: 16
															line: 2
														}
														start: Object {
															column: 14
															line: 2
														}
													}
												}
											}
										}
									}
								}
							]
						}
					}
				]
			}
		}
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "typescript/function/getter-setter/input.ts"
				end: Object {
					column: 2
					line: 6
				}
				start: Object {
					column: 0
					line: 4
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "typescript/function/getter-setter/input.ts"
					end: Object {
						column: 2
						line: 6
					}
					start: Object {
						column: 0
						line: 4
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "s"
							loc: Object {
								filename: "typescript/function/getter-setter/input.ts"
								identifierName: "s"
								end: Object {
									column: 7
									line: 4
								}
								start: Object {
									column: 6
									line: 4
								}
							}
						}
						loc: Object {
							filename: "typescript/function/getter-setter/input.ts"
							end: Object {
								column: 1
								line: 6
							}
							start: Object {
								column: 6
								line: 4
							}
						}
						init: JSObjectExpression {
							loc: Object {
								filename: "typescript/function/getter-setter/input.ts"
								end: Object {
									column: 1
									line: 6
								}
								start: Object {
									column: 10
									line: 4
								}
							}
							properties: Array [
								JSObjectMethod {
									kind: "set"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "m"
											loc: Object {
												filename: "typescript/function/getter-setter/input.ts"
												identifierName: "m"
												end: Object {
													column: 7
													line: 5
												}
												start: Object {
													column: 6
													line: 5
												}
											}
										}
										loc: Object {
											filename: "typescript/function/getter-setter/input.ts"
											end: Object {
												column: 7
												line: 5
											}
											start: Object {
												column: 6
												line: 5
											}
										}
									}
									loc: Object {
										filename: "typescript/function/getter-setter/input.ts"
										end: Object {
											column: 27
											line: 5
										}
										start: Object {
											column: 2
											line: 5
										}
									}
									body: JSBlockStatement {
										body: Array []
										directives: Array []
										loc: Object {
											filename: "typescript/function/getter-setter/input.ts"
											end: Object {
												column: 27
												line: 5
											}
											start: Object {
												column: 25
												line: 5
											}
										}
									}
									head: JSFunctionHead {
										async: false
										generator: false
										hasHoistedVars: false
										rest: undefined
										returnType: undefined
										typeParameters: undefined
										loc: Object {
											filename: "typescript/function/getter-setter/input.ts"
											end: Object {
												column: 24
												line: 5
											}
											start: Object {
												column: 7
												line: 5
											}
										}
										params: Array [
											JSBindingIdentifier {
												name: "value"
												loc: Object {
													filename: "typescript/function/getter-setter/input.ts"
													identifierName: "value"
													end: Object {
														column: 23
														line: 5
													}
													start: Object {
														column: 18
														line: 5
													}
												}
												meta: JSPatternMeta {
													optional: undefined
													typeAnnotation: undefined
													loc: Object {
														filename: "typescript/function/getter-setter/input.ts"
														end: Object {
															column: 23
															line: 5
														}
														start: Object {
															column: 18
															line: 5
														}
													}
												}
											}
										]
										thisType: JSBindingIdentifier {
											name: "this"
											loc: Object {
												filename: "typescript/function/getter-setter/input.ts"
												identifierName: "this"
												end: Object {
													column: 12
													line: 5
												}
												start: Object {
													column: 8
													line: 5
												}
											}
											meta: JSPatternMeta {
												optional: undefined
												loc: Object {
													filename: "typescript/function/getter-setter/input.ts"
													end: Object {
														column: 16
														line: 5
													}
													start: Object {
														column: 8
														line: 5
													}
												}
												typeAnnotation: TSObjectTypeAnnotation {
													members: Array []
													loc: Object {
														filename: "typescript/function/getter-setter/input.ts"
														end: Object {
															column: 16
															line: 5
														}
														start: Object {
															column: 14
															line: 5
														}
													}
												}
											}
										}
									}
								}
							]
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
✔ No known problems!

```