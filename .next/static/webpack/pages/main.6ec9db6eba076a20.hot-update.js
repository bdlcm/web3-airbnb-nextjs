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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/connection */ \"./utils/connection.js\");\n\n\n\n\nvar _this = undefined;\nvar Main = function() {\n    // const [customMsg, setcustomMsg] = useState(0);\n    // const [haveMetamask, sethaveMetamask] = useState(true);\n    // const [client, setclient] = useState({\n    //   isConnected: false,\n    // });\n    // const checkConnection = async () => {\n    //   const { ethereum } = window;\n    //   if (ethereum) {\n    //     sethaveMetamask(true);\n    //     const accounts = await ethereum.request({ method: \"eth_accounts\" });\n    //     if (accounts.length > 0) {\n    //       setclient({\n    //         isConnected: true,\n    //         address: accounts[0],\n    //       });\n    //     } else {\n    //       setclient({\n    //         isConnected: false,\n    //       });\n    //     }\n    //   } else {\n    //     sethaveMetamask(false);\n    //   }\n    // };\n    // const connectWeb3 = async () => {\n    //   try {\n    //     const { ethereum } = window;\n    //     if (!ethereum) {\n    //       console.log(\"Metamask not detected\");\n    //       return;\n    //     }\n    //     const accounts = await ethereum.request({\n    //       method: \"eth_requestAccounts\",\n    //     });\n    //     setclient({\n    //       isConnected: true,\n    //       address: accounts[0],\n    //     });\n    //   } catch (error) {\n    //     console.log(\"Error connecting to metamask\", error);\n    //   }\n    // };\n    // useEffect(() => {\n    //   checkConnection();\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: _utils_connection__WEBPACK_IMPORTED_MODULE_2__.connectWeb3,\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: !haveMetamask && \"You have to download metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluLmpzP2FhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgY2hlY2tDb25uZWN0aW9uLCBjb25uZWN0V2ViMyB9IGZyb20gXCIuLi91dGlscy9jb25uZWN0aW9uXCI7XG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAvLyBjb25zdCBbY3VzdG9tTXNnLCBzZXRjdXN0b21Nc2ddID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IFtoYXZlTWV0YW1hc2ssIHNldGhhdmVNZXRhbWFza10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBjb25zdCBbY2xpZW50LCBzZXRjbGllbnRdID0gdXNlU3RhdGUoe1xuICAvLyAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgLy8gfSk7XG5cbiAgLy8gY29uc3QgY2hlY2tDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgLy8gICBpZiAoZXRoZXJldW0pIHtcbiAgLy8gICAgIHNldGhhdmVNZXRhbWFzayh0cnVlKTtcbiAgLy8gICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcbiAgLy8gICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gIC8vICAgICAgIHNldGNsaWVudCh7XG4gIC8vICAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gIC8vICAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0Y2xpZW50KHtcbiAgLy8gICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRoYXZlTWV0YW1hc2soZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICAvLyBjb25zdCBjb25uZWN0V2ViMyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gIC8vICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAvLyAgICAgICByZXR1cm47XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gIC8vICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gIC8vICAgICB9KTtcblxuICAvLyAgICAgc2V0Y2xpZW50KHtcbiAgLy8gICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gIC8vICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAvLyAgICAgfSk7XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFza1wiLCBlcnJvcik7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY2hlY2tDb25uZWN0aW9uKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZyZW4tbmF2IGQtZmxleFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5NRU5VXzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBjb25uZWN0LWJ0blwiIG9uQ2xpY2s9e2Nvbm5lY3RXZWIzfT5cbiAgICAgICAgICAgICAge2NsaWVudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDAsIDQpfS4uLlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDM4LCA0Mil9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5Db25uZWN0IFdhbGxldDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3LWJ0blwiPlRXPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4XCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxwPnshaGF2ZU1ldGFtYXNrICYmIFwiWW91IGhhdmUgdG8gZG93bmxvYWQgbWV0YW1hc2tcIn08L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Bd2Vzb21lIERhcHAg8J+agDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cIm1pbnQtZm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW50LXZhbHVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXNzYWdlIHRvIHNpZ25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGN1c3RvbU1zZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21Nc2cgPT0gMCA/IFwiXCIgOiBjdXN0b21Nc2d9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbWludC1idG5cIj5cbiAgICAgICAgICAgICAgU2lnbiBNZXNzYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJjaGVja0Nvbm5lY3Rpb24iLCJjb25uZWN0V2ViMyIsIk1haW4iLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsInN0eWxlIiwibWFyZ2luTGVmdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGllbnQiLCJpc0Nvbm5lY3RlZCIsImFkZHJlc3MiLCJzbGljZSIsInNlY3Rpb24iLCJtYWluIiwicCIsImhhdmVNZXRhbWFzayIsImgxIiwiYnIiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJzZXRjdXN0b21Nc2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1c3RvbU1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ }),

/***/ "./utils/connection.js":
/*!*****************************!*\
  !*** ./utils/connection.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkConnection\": function() { return /* binding */ checkConnection; },\n/* harmony export */   \"connectWeb3\": function() { return /* binding */ connectWeb3; }\n/* harmony export */ });\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), haveMetamask = ref[0], sethaveMetamask = ref[1];\nvar ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    isConnected: false\n}), client = ref1[0], setclient = ref1[1];\nvar checkConnection = function() {\n    var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, accounts;\n        return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    ethereum = window.ethereum;\n                    if (!ethereum) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    sethaveMetamask(true);\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: \"eth_accounts\"\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    if (accounts.length > 0) {\n                        setclient({\n                            isConnected: true,\n                            address: accounts[0]\n                        });\n                    } else {\n                        setclient({\n                            isConnected: false\n                        });\n                    }\n                    _ctx.next = 10;\n                    break;\n                case 9:\n                    {\n                        sethaveMetamask(false);\n                    }\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function checkConnection() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar connectWeb3 = function() {\n    var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, accounts;\n        return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (ethereum) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    console.log(\"Metamask not detected\");\n                    return _ctx.abrupt(\"return\");\n                case 5:\n                    _ctx.next = 7;\n                    return ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 7:\n                    accounts = _ctx.sent;\n                    setclient({\n                        isConnected: true,\n                        address: accounts[0]\n                    });\n                    _ctx.next = 14;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(\"Error connecting to metamask\", _ctx.t0);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                11\n            ]\n        ]);\n    }));\n    return function connectWeb3() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQW1DQSxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUE5Q0MsWUFBWSxHQUFxQkQsR0FBYyxLQUFqQ0UsZUFBZSxHQUFJRixHQUFjO0FBRXRELEdBQUssQ0FBdUJBLElBRTFCLEdBRjBCQSwrQ0FBUSxDQUFDLENBQUM7SUFDcENHLFdBQVcsRUFBRSxLQUFLO0FBQ3BCLENBQUMsR0FGTUMsTUFBTSxHQUFlSixJQUUxQixLQUZhSyxTQUFTLEdBQUlMLElBRTFCO0FBRUssR0FBSyxDQUFDTSxlQUFlO3lMQUFHLFFBQVEsV0FBSSxDQUFDO1lBQ2xDQyxRQUFRLEVBR1JDLFFBQVE7Ozs7b0JBSFJELFFBQVEsR0FBS0UsTUFBTSxDQUFuQkYsUUFBUTt5QkFDWkEsUUFBUTs7OztvQkFDVkwsZUFBZSxDQUFDLElBQUk7OzJCQUNHSyxRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDO3dCQUFDQyxNQUFNLEVBQUUsQ0FBYztvQkFBQyxDQUFDOztvQkFBNURILFFBQVE7b0JBQ2QsRUFBRSxFQUFFQSxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEJQLFNBQVMsQ0FBQyxDQUFDOzRCQUNURixXQUFXLEVBQUUsSUFBSTs0QkFDakJVLE9BQU8sRUFBRUwsUUFBUSxDQUFDLENBQUM7d0JBQ3JCLENBQUM7b0JBQ0gsQ0FBQyxNQUFNLENBQUM7d0JBQ05ILFNBQVMsQ0FBQyxDQUFDOzRCQUNURixXQUFXLEVBQUUsS0FBSzt3QkFDcEIsQ0FBQztvQkFDSCxDQUFDOzs7O29CQUNJLENBQUM7d0JBQ05ELGVBQWUsQ0FBQyxLQUFLO29CQUN2QixDQUFDOzs7Ozs7SUFDSCxDQUFDO29CQWxCWUksZUFBZTs7OztBQW9CckIsR0FBSyxDQUFDUSxXQUFXO3lMQUFHLFFBQVEsV0FBSSxDQUFDO1lBRTVCUCxRQUFRLEVBT1ZDLFFBQVE7Ozs7O29CQVBORCxRQUFRLEdBQUtFLE1BQU0sQ0FBbkJGLFFBQVE7d0JBRVhBLFFBQVE7Ozs7b0JBQ1hRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCOzs7OzJCQUlkVCxRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDO3dCQUN2Q0MsTUFBTSxFQUFFLENBQXFCO29CQUMvQixDQUFDOztvQkFGS0gsUUFBUTtvQkFJZEgsU0FBUyxDQUFDLENBQUM7d0JBQ1RGLFdBQVcsRUFBRSxJQUFJO3dCQUNqQlUsT0FBTyxFQUFFTCxRQUFRLENBQUMsQ0FBQztvQkFDckIsQ0FBQzs7Ozs7O29CQUVETyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4Qjs7Ozs7Ozs7Ozs7SUFFOUMsQ0FBQztvQkFwQllGLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29ubmVjdGlvbi5qcz8xODNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFtoYXZlTWV0YW1hc2ssIHNldGhhdmVNZXRhbWFza10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuY29uc3QgW2NsaWVudCwgc2V0Y2xpZW50XSA9IHVzZVN0YXRlKHtcbiAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjaGVja0Nvbm5lY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgaWYgKGV0aGVyZXVtKSB7XG4gICAgc2V0aGF2ZU1ldGFtYXNrKHRydWUpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRoYXZlTWV0YW1hc2soZmFsc2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29ubmVjdFdlYjMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coXCJNZXRhbWFzayBub3QgZGV0ZWN0ZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgfSk7XG5cbiAgICBzZXRjbGllbnQoe1xuICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gbWV0YW1hc2tcIiwgZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaGF2ZU1ldGFtYXNrIiwic2V0aGF2ZU1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzZXRjbGllbnQiLCJjaGVja0Nvbm5lY3Rpb24iLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImFkZHJlc3MiLCJjb25uZWN0V2ViMyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/connection.js\n");

/***/ })

});