"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sign */ \"./utils/sign.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), haveMetamask = ref[0], sethaveMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref1[0], setclient = ref1[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        sethaveMetamask(true);\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 9:\n                        {\n                            sethaveMetamask(false);\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        setclient({\n                            isConnected: true,\n                            address: accounts[0]\n                        });\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function connectWeb3() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: connectWeb3,\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: !haveMetamask && \"You have to download metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: _utils_sign__WEBPACK_IMPORTED_MODULE_3__.signMessage,\n                            type: \"button\",\n                            className: \"btn mint-btn\",\n                            children: \"Sign Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"qfoKW/OJEUbbtoN/AjapFSOFMsI=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt3R0FJckJOLENBQUc7c0hBQ0RJLENBQU07b0NBQUNMLFNBQVMsRUFBQyxDQUFZOzhDQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl0Q1EsQ0FBTztnQkFBQ1IsU0FBUyxFQUFDLENBQWtCO3NHQUNsQ1MsQ0FBSTs7b0dBQ0ZDLENBQUM7dUNBQUczQixZQUFZLElBQUksQ0FBK0I7Ozs7OztvR0FDbkQ0QixDQUFFOzRCQUFDWCxTQUFTLEVBQUMsQ0FBWTtzQ0FBQyxDQUFjOzs7Ozs7b0dBRXhDVSxDQUFDOzRCQUFDVixTQUFTLEVBQUMsQ0FBVzs7Z0NBQUMsQ0FFTTs0R0FBQ1ksQ0FBRTs7Ozs7Z0NBQUcsQ0FFckM7Ozs7Ozs7b0dBRUNQLENBQU07NEJBQUNDLE9BQU8sRUFBRXpCLG9EQUFXOzRCQUFFZ0MsSUFBSSxFQUFDLENBQVE7NEJBQUNiLFNBQVMsRUFBQyxDQUFjO3NDQUFDLENBRXJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQS9GS2xCLElBQUk7S0FBSkEsSUFBSTtBQWlHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4uanM/YWE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy9zaWduXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtoYXZlTWV0YW1hc2ssIHNldGhhdmVNZXRhbWFza10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbY2xpZW50LCBzZXRjbGllbnRdID0gdXNlU3RhdGUoe1xuICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgY2hlY2tDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIHNldGhhdmVNZXRhbWFzayh0cnVlKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldGNsaWVudCh7XG4gICAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2soZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2ViMyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KTtcblxuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tDb25uZWN0aW9uKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZyZW4tbmF2IGQtZmxleFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5NRU5VXzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBjb25uZWN0LWJ0blwiIG9uQ2xpY2s9e2Nvbm5lY3RXZWIzfT5cbiAgICAgICAgICAgICAge2NsaWVudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDAsIDQpfS4uLlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDM4LCA0Mil9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5Db25uZWN0IFdhbGxldDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3LWJ0blwiPlRXPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4XCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxwPnshaGF2ZU1ldGFtYXNrICYmIFwiWW91IGhhdmUgdG8gZG93bmxvYWQgbWV0YW1hc2tcIn08L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Bd2Vzb21lIERhcHAg8J+agDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduTWVzc2FnZX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBtaW50LWJ0blwiPlxuICAgICAgICAgICAgU2lnbiBNZXNzYWdlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzaWduTWVzc2FnZSIsIk1haW4iLCJoYXZlTWV0YW1hc2siLCJzZXRoYXZlTWV0YW1hc2siLCJpc0Nvbm5lY3RlZCIsImNsaWVudCIsInNldGNsaWVudCIsImNoZWNrQ29ubmVjdGlvbiIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiYWRkcmVzcyIsImNvbm5lY3RXZWIzIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwib25DbGljayIsInNsaWNlIiwic2VjdGlvbiIsIm1haW4iLCJwIiwiaDEiLCJiciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});