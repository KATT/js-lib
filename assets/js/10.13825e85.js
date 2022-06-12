(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{211:function(t,r,s){"use strict";s.r(r);var a=s(6),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" Error")]),t._v(" "),s("h2",{attrs:{id:"trycatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trycatch"}},[t._v("#")]),t._v(" _tryCatch")]),t._v(" "),s("p",[t._v('Wraps/decorates a passed function with "try/catch", so it never throws, but logs the error (if\noccured).')]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("someDangerousFunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_tryCatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someDangerousFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will log on error, but never throw")]),t._v("\n")])])]),s("p",[t._v("Allows to pass "),s("code",[t._v("onError()")]),t._v(" function hook, that will be called on error.")]),t._v(" "),s("h2",{attrs:{id:"errorobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errorobject"}},[t._v("#")]),t._v(" ErrorObject")]),t._v(" "),s("p",[t._v('Standartized "Error object" that contains arbitrary '),s("code",[t._v("data")]),t._v(" object that can hold additional data.")]),t._v(" "),s("p",[t._v("This "),s("code",[t._v("data")]),t._v(" object is defined as a Generic type to "),s("code",[t._v("ErrorObject")]),t._v(", so, e.g. "),s("code",[t._v("HttpError")]),t._v(" has\n"),s("code",[t._v("HttpErrorData")]),t._v(", which has a mandatory "),s("code",[t._v("httpStatusCode: number")]),t._v(" property.")]),t._v(" "),s("p",[t._v("Usage example of that:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpErrorObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("httpStatusCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"apperror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apperror"}},[t._v("#")]),t._v(" AppError")]),t._v(" "),s("p",[t._v("The most basic implementation of an "),s("code",[t._v("Error")]),t._v(" that complies with "),s("code",[t._v("ErrorObject")]),t._v(" specification.\nDifference is that "),s("code",[t._v("ErrorObject")]),t._v(" is purely a TypeScript interface (around any JS "),s("code",[t._v("object")]),t._v("), but\n"),s("code",[t._v("AppError")]),t._v(" is a sub-class of "),s("code",[t._v("Error")]),t._v(". So, with "),s("code",[t._v("AppError")]),t._v(" you can do\n"),s("code",[t._v("if (err instanceof AppError) ...")]),t._v(".")]),t._v(" "),s("p",[t._v("Because "),s("code",[t._v("AppError")]),t._v(" implements "),s("code",[t._v("ErrorObject")]),t._v(", it guarantees an "),s("code",[t._v("err.data")]),t._v(" object.")]),t._v(" "),s("p",[t._v("This basic contract allows to establish a standartized interface between the Frontend (in\n"),s("code",[t._v("frontend-lib")]),t._v(") and Backend (in "),s("code",[t._v("backend-lib")]),t._v(") and implement error-handling more efficiently.")]),t._v(" "),s("h2",{attrs:{id:"httperror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httperror"}},[t._v("#")]),t._v(" HttpError")]),t._v(" "),s("p",[t._v("Subclass of "),s("code",[t._v("AppError")]),t._v(" that has some additional properties inside "),s("code",[t._v("data")]),t._v(", namely:\n"),s("code",[t._v("httpStatusCode: number")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"httperrorresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httperrorresponse"}},[t._v("#")]),t._v(" HttpErrorResponse")]),t._v(" "),s("p",[t._v('This is a standartized "Error response from the Backend" (as implemented in '),s("code",[t._v("backend-lib")]),t._v("). You can\ncheck/assert it with "),s("a",{attrs:{href:"#ishttperrorresponse"}},[t._v("_isHttpErrorResponse")]),t._v(", and then have all the guarantees\nand types about the containing "),s("code",[t._v("error")]),t._v(" object.")]),t._v(" "),s("p",[t._v('Handling these type of errors is done "automatically" in '),s("code",[t._v("getKy")]),t._v(" of the "),s("code",[t._v("frontend-lib")]),t._v(", and in\n"),s("code",[t._v("getGot")]),t._v(" of the "),s("code",[t._v("backend-lib")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"anytoerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anytoerror"}},[t._v("#")]),t._v(" _anyToError")]),t._v(" "),s("p",[t._v("Cast "),s("code",[t._v("any")]),t._v(" to "),s("code",[t._v("Error")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"errortoerrorobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errortoerrorobject"}},[t._v("#")]),t._v(" _errorToErrorObject")]),t._v(" "),s("p",[t._v("Cast "),s("code",[t._v("Error")]),t._v(" to "),s("code",[t._v("ErrorObject")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"errorobjecttoapperror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errorobjecttoapperror"}},[t._v("#")]),t._v(" _errorObjectToAppError")]),t._v(" "),s("p",[t._v("Cast "),s("code",[t._v("ErrorObject")]),t._v(" to "),s("code",[t._v("AppError")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"apperrortoerrorobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apperrortoerrorobject"}},[t._v("#")]),t._v(" _appErrorToErrorObject")]),t._v(" "),s("p",[t._v("Cast "),s("code",[t._v("AppError")]),t._v(" to "),s("code",[t._v("ErrorObject")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"apperrortohttperror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apperrortohttperror"}},[t._v("#")]),t._v(" _appErrorToHttpError")]),t._v(" "),s("p",[t._v("Cast "),s("code",[t._v("AppError")]),t._v(" to "),s("code",[t._v("HttpError")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"ishttperrorresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ishttperrorresponse"}},[t._v("#")]),t._v(" _isHttpErrorResponse")]),t._v(" "),s("p",[t._v("Assert if provided "),s("code",[t._v("value: any")]),t._v(" is a "),s("a",{attrs:{href:"#httperrorresponse"}},[t._v("HttpErrorResponse")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"ishttperrorobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ishttperrorobject"}},[t._v("#")]),t._v(" _isHttpErrorObject")]),t._v(" "),s("p",[t._v("Assert if provided "),s("code",[t._v("value: any")]),t._v(" is a "),s("code",[t._v("HttpErrorObject")]),t._v(" (an "),s("code",[t._v("HttpError")]),t._v(", same as\n"),s("code",[t._v("AppError<HttpErrorData>")]),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"iserrorobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iserrorobject"}},[t._v("#")]),t._v(" _isErrorObject")]),t._v(" "),s("p",[t._v("Assert if provided "),s("code",[t._v("value: any")]),t._v(" is an "),s("a",{attrs:{href:"#errorobject"}},[t._v("ErrorObject")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"assert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assert"}},[t._v("#")]),t._v(" _assert")]),t._v(" "),s("p",[t._v("Asserts that a boolean condition is "),s("code",[t._v("truthy")]),t._v(", otherwise throws an Error.")]),t._v(" "),s("p",[t._v("Evaluates the "),s("code",[t._v("condition")]),t._v(" (casts it to Boolean). Expects it to be truthy, otherwise throws AppError.")]),t._v(" "),s("p",[t._v('Should be used NOT for "expected" / user-facing errors, but vice-versa - for completely unexpected\nand 100% buggy "should never happen" cases.')]),t._v(" "),s("p",[t._v("It'll result in http 500 on the server (cause that's the right code for \"unexpected\" errors). Pass {\nhttpStatusCode: x } at errorData argument to override the http code (will be picked up by\nbackend-lib).")]),t._v(" "),s("p",[t._v("API is similar to Node's assert(), except:")]),t._v(" "),s("ol",[s("li",[t._v("Throws js-lib's AppError")]),t._v(" "),s("li",[t._v("Has a default message, if not provided")]),t._v(" "),s("li",[t._v("Sets "),s("code",[t._v("userFriendly")]),t._v(' flag to true, cause it\'s always better to have at least SOME clue, rather\nthan fully generic "Oops" error.')])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from here TypeScript will know that `err instanceof AppError === true`, or `err: AppError`")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example with custom error message:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error should be of type AppError'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"assertequals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertequals"}},[t._v("#")]),t._v(" _assertEquals")]),t._v(" "),s("p",[t._v("Similar to "),s("a",{attrs:{href:"#assert"}},[t._v("_assert")]),t._v(", but allows to provide 2 values (first 2 arguments) and throws if\nthey are NOT equal.")]),t._v(" "),s("p",[t._v("Does a shallow equality check ("),s("code",[t._v("!==")]),t._v("), use "),s("a",{attrs:{href:"#assertdeepequals"}},[t._v("_assertDeepEquals")]),t._v(" if you need a\ndeep-check.")]),t._v(" "),s("h2",{attrs:{id:"assertdeepequals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertdeepequals"}},[t._v("#")]),t._v(" _assertDeepEquals")]),t._v(" "),s("p",[t._v("Similar to "),s("a",{attrs:{href:"#assertequals"}},[t._v("_assertEquals")]),t._v(", but does a deep assertion (using\n"),s("RouterLink",{attrs:{to:"/object.html#deepequals"}},[t._v("_deepEquals")]),t._v(").")],1),t._v(" "),s("h2",{attrs:{id:"assertiserror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertiserror"}},[t._v("#")]),t._v(" _assertIsError")]),t._v(" "),s("p",[t._v("Asserts that passed value is "),s("code",[t._v("instanceof Error")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"assertsistypeof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertsistypeof"}},[t._v("#")]),t._v(" _assertsIsTypeOf")]),t._v(" "),s("p",[t._v("Asserts that "),s("code",[t._v("typeof value")]),t._v(" matches expected type.")]),t._v(" "),s("h2",{attrs:{id:"assertsisstring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertsisstring"}},[t._v("#")]),t._v(" _assertsIsString")]),t._v(" "),s("p",[t._v("Asserts that "),s("code",[t._v("typeof value === 'string")])]),t._v(" "),s("h2",{attrs:{id:"assertsisnumber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertsisnumber"}},[t._v("#")]),t._v(" _assertsIsNumber")]),t._v(" "),s("p",[t._v("Asserts that "),s("code",[t._v("typeof value === 'number")])]),t._v(" "),s("h2",{attrs:{id:"aggregatederror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aggregatederror"}},[t._v("#")]),t._v(" AggregatedError")]),t._v(" "),s("p",[t._v("Subclass of "),s("code",[t._v("Error")]),t._v(" that contains "),s("code",[t._v(".errors: Error[]")]),t._v(" - array of errors from some batch operation.")]),t._v(" "),s("p",[t._v("May also contain "),s("code",[t._v(".results: RESULT[]")]),t._v(" - results from some batch operation (if needed).")]),t._v(" "),s("h2",{attrs:{id:"try"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try"}},[t._v("#")]),t._v(" _try")]),t._v(" "),s("p",[t._v("Calls a function, returns a Tuple of "),s("code",[t._v("[error, value]")]),t._v(". Allows to write shorter code that avoids\ntry/catch. Useful e.g. in unit tests.")]),t._v(" "),s("p",[t._v("Similar to "),s("a",{attrs:{href:"#ptry"}},[t._v("pTry")]),t._v(", but for sync functions.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"ptry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ptry"}},[t._v("#")]),t._v(" pTry")]),t._v(" "),s("p",[t._v("Loosely inspired by "),s("a",{attrs:{href:"https://github.com/scopsy/await-to-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("await-to-js"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Similar to "),s("a",{attrs:{href:"#_try"}},[t._v("_try")]),t._v(", but for promises.")]),t._v(" "),s("p",[t._v("Async/await wrapper for easy error handling. Wraps async/await calls in try catch blocks and returns\na tuple containing the error or the results of the promise")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerResponse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomError")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pTuple")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ServerResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CustomError"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);