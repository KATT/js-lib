(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(t,e,s){"use strict";s.r(e);var a=s(6),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-lib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-lib"}},[t._v("#")]),t._v(" js-lib")]),t._v(" "),s("blockquote",[s("p",[t._v("Standard library for universal (browser + Node.js) javascript")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.shields.io/npm/v/@naturalcycles/js-lib/latest.svg",alt:"npm"}}),t._v(" "),s("img",{attrs:{src:"https://badgen.net/bundlephobia/minzip/@naturalcycles/js-lib",alt:"min.gz size"}}),t._v(" "),s("img",{attrs:{src:"https://github.com/NaturalCycles/js-lib/workflows/default/badge.svg",alt:"Actions"}}),t._v(" "),s("img",{attrs:{src:"https://badgen.net/codeclimate/loc/NaturalCycles/js-lib",alt:"loc"}}),t._v(" "),s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/c2dc8d53bd79f79b1d8b/maintainability",alt:"Maintainability"}}),t._v(" "),s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/c2dc8d53bd79f79b1d8b/test_coverage",alt:"Test Coverage"}}),t._v(" "),s("img",{attrs:{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"}})]),t._v(" "),s("h2",{attrs:{id:"design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[t._v("#")]),t._v(" Design")]),t._v(" "),s("p",[t._v("Inspired by "),s("a",{attrs:{href:"https://lodash.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash"),s("OutboundLink")],1),t._v(",\n"),s("a",{attrs:{href:"https://github.com/petkaantonov/bluebird",target:"_blank",rel:"noopener noreferrer"}},[t._v("bluebird"),s("OutboundLink")],1),t._v(",\n"),s("a",{attrs:{href:"https://github.com/sindresorhus/promise-fun",target:"_blank",rel:"noopener noreferrer"}},[t._v("promise-fun"),s("OutboundLink")],1),t._v(" and other useful small packages.")]),t._v(" "),s("p",[t._v('Designed to play well with the rest of opinionated "Natural Cycles JS Platform" (link pending). This\npackage is the lowest-level production dependency (not '),s("code",[t._v("devDependency")]),t._v(") of the Platform. Almost\neverything else depends on it.")]),t._v(" "),s("p",[t._v("All functions in this package are exported in "),s("code",[t._v("index.ts")]),t._v(' (flat), no namespacing is used. So, to\navoid conflicts and "global import namespace" pollution , all functions are prefixed with an\nunderscore (e.g '),s("code",[t._v("_.pick")]),t._v(" becomes "),s("code",[t._v("_pick")]),t._v("), with some exceptions (later). Promise functions are\nprefixed with "),s("code",[t._v("p")]),t._v(", e.g "),s("code",[t._v("pMap")]),t._v(".")]),t._v(" "),s("p",[t._v("Decorators are _prefixed and PascalCased (e.g "),s("code",[t._v("@_Debounce")]),t._v(").\n"),s("code",[t._v("_")]),t._v("is to be consistent with other naming in this package. PascalCase is to distinguish decorators from similar functions that are not decorators. Example:"),s("code",[t._v("\\_debounce")]),t._v("is a function (lodash-based),"),s("code",[t._v("\\_Debounce")]),t._v("is a decorator (used as"),s("code",[t._v("@\\_Debounce")]),t._v(").\nPascalCase convention follows Angular/Ionic convention (but doesn't follow TypeScript documentation\nconvention; we had to pick one).")]),t._v(" "),s("p",[t._v("Interfaces and Classes are named as usual (no prefix, PascalCase, e.g "),s("code",[t._v("AppError")]),t._v(").")]),t._v(" "),s("p",[t._v("Q: Why not just use lodash?")]),t._v(" "),s("p",[t._v("A:")]),t._v(" "),s("ul",[s("li",[t._v("We believe Lodash is outdated (many functions are pre-ES6 / obsolete by ES6).")]),t._v(" "),s("li",[t._v("Because it has so many outdated functions - its size is bigger, and solutions to tree-shake exist,\nbut complicated.")]),t._v(" "),s("li",[t._v("First-class TypeScript support (all code in this repo is TypeScript).")])]),t._v(" "),s("p",[t._v("This package is intended to be 0-dependency (exception: "),s("a",{attrs:{href:"https://github.com/Microsoft/tslib",target:"_blank",rel:"noopener noreferrer"}},[t._v("tslib"),s("OutboundLink")],1),t._v('\nfrom TypeScript), "not bloated", tree-shakeable. Supported by reasonably modern Browsers and Node.js\nlatest LTS.')]),t._v(" "),s("p",[t._v("To fulfil that requirement it exports ESM version (for Browsers) as es2017.")]),t._v(" "),s("p",[t._v("Exports default CJS version for Node as es2019 (with native async/await, for better performance,\nasync stack-traces, etc).")]),t._v(" "),s("h2",{attrs:{id:"mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),s("p",[t._v("All function does "),s("strong",[t._v("NOT")]),t._v(" mutate the arguments by default.")]),t._v(" "),s("p",[t._v('Many functions support "mutation flag", which can be set to '),s("code",[t._v("true")]),t._v(" to perform a mutation.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Non-mutating (default)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_pick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 'a' }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mutating (opt-in)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_pick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj was mutated")]),t._v("\n")])])]),s("h2",{attrs:{id:"highlights"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#highlights"}},[t._v("#")]),t._v(" Highlights")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pMap")]),t._v(" (based on https://github.com/sindresorhus/p-map)")]),t._v(" "),s("li",[s("code",[t._v("StringMap")])]),t._v(" "),s("li",[s("code",[t._v("@_Memo")])]),t._v(" "),s("li",[s("code",[t._v("_merge")]),t._v(" (based on https://gist.github.com/Salakar/1d7137de9cb8b704e48a)")]),t._v(" "),s("li",[s("code",[t._v("_deepEquals")]),t._v(" (based on https://github.com/epoberezkin/fast-deep-equal/)")]),t._v(" "),s("li",[s("code",[t._v("_sortObjectDeep")]),t._v(" (based on https://github.com/IndigoUnited/js-deep-sort-object)")]),t._v(" "),s("li",[s("code",[t._v("_set")]),t._v(" (based on https://stackoverflow.com/a/54733755/4919972)")]),t._v(" "),s("li",[s("code",[t._v("_unset")]),t._v(" (based on https://github.com/jonschlinkert/unset-value)")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("h1",{attrs:{id:"packaging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packaging"}},[t._v("#")]),t._v(" Packaging")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("engines.node >= Node.js LTS")])]),t._v(" "),s("li",[s("code",[t._v("main: dist/index.js")]),t._v(": commonjs, es2020 - targeting Node.js")]),t._v(" "),s("li",[s("code",[t._v("module: dist-esm/index.js")]),t._v(": esm, es2017 - targeting Browsers")]),t._v(" "),s("li",[s("code",[t._v("types: dist/index.d.ts")]),t._v(": typescript types")]),t._v(" "),s("li",[s("code",[t._v("/src")]),t._v(" folder with source "),s("code",[t._v("*.ts")]),t._v(" files included")])])])}),[],!1,null,null,null);e.default=n.exports}}]);