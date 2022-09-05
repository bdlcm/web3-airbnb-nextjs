"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("utils_sign_js",{

/***/ "./utils/sign.js":
/*!***********************!*\
  !*** ./utils/sign.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);\nvar signer = provider.getSigner();\nvar signMessage = function() {\n    var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n        return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    try {\n                        signer.signMessage(\"Hello World\").then(function(result) {\n                            console.log(result);\n                        });\n                    } catch (error) {\n                        console.log(error);\n                    }\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function signMessage(message) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (signMessage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zaWduLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDL0IsR0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDRCxpRUFBNkIsQ0FBQ0ksTUFBTSxDQUFDQyxRQUFRO0FBQ2xFLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxRQUFRLENBQUNNLFNBQVM7QUFFakMsR0FBSyxDQUFDQyxXQUFXO3lMQUFHLFFBQVEsU0FBREMsT0FBTyxFQUFLLENBQUM7Ozs7b0JBQ3RDLEdBQUcsQ0FBQyxDQUFDO3dCQUNISCxNQUFNLENBQUNFLFdBQVcsQ0FBQyxDQUFhLGNBQUVFLElBQUksQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDOzRCQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07d0JBQ3BCLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7d0JBQ2ZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLO29CQUNuQixDQUFDOzs7Ozs7SUFDSCxDQUFDO29CQVJLTixXQUFXLENBQVVDLE9BQU87Ozs7QUFTbEMsK0RBQWVELFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9zaWduLmpzPzgyY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbmNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXG5jb25zdCBzaWduTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gIHRyeSB7XG4gICAgc2lnbmVyLnNpZ25NZXNzYWdlKFwiSGVsbG8gV29ybGRcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHNpZ25NZXNzYWdlO1xuIl0sIm5hbWVzIjpbImV0aGVycyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsIm1lc3NhZ2UiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/sign.js\n");

/***/ })

});