"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), executable = ref2[0], setExecutable = ref2[1];\n    var addressSubmittedHandler = function(address) {\n        try {\n            var key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n            setAddress(key.toBase58());\n            var connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n            connection.getBalance(key).then(function(Balance) {\n                setBalance(Balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);\n            });\n            connection.getAccountInfo(key).then(function(result) {\n                console.log(result === null || result === void 0 ? void 0 : result.executable);\n            });\n        } catch (error) {\n            setAddress(\"\");\n            setBalance(0);\n            alert(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/home/fiaz/Documents/GitHub/solana practice/solana balance fetcher/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/home/fiaz/Documents/GitHub/solana practice/solana balance fetcher/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"/home/fiaz/Documents/GitHub/solana practice/solana balance fetcher/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"/home/fiaz/Documents/GitHub/solana practice/solana balance fetcher/pages/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fiaz/Documents/GitHub/solana practice/solana balance fetcher/pages/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fiaz/Documents/GitHub/solana practice/solana balance fetcher/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"YF0wPl7Rco63s2SpOU5v58FlgvQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2dDO0FBR2M7QUFDSztBQUNaOztBQUd2QyxJQUFNSSxJQUFJLEdBQWEsV0FBTTs7SUFDM0IsSUFBOEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFWM0MsT0FVZ0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFWaEIsVUFVNEIsR0FBSUEsR0FBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWDVDLFFBV2dCLEdBQWdCQSxJQUFZLEdBQTVCLEVBWGhCLFVBVzRCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsSUFBb0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFabEQsVUFZbUIsR0FBbUJBLElBQVksR0FBL0IsRUFabkIsYUFZa0MsR0FBSUEsSUFBWSxHQUFoQjtJQUVoQyxJQUFNVyx1QkFBdUIsR0FBRyxTQUFDSixPQUFlLEVBQUs7UUFDbkQsSUFBRztZQUNELElBQU1LLEdBQUcsR0FBRyxJQUFJVCxzREFBYyxDQUFDSSxPQUFPLENBQUM7WUFDdkNDLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDRSxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFNQyxVQUFVLEdBQUcsSUFBSVosdURBQWUsQ0FBQ0EsMERBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEVZLFVBQVUsQ0FBQ0csVUFBVSxDQUFDTixHQUFHLENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7Z0JBQ3pDZCxVQUFVLENBQUNjLE9BQU8sR0FBRWpCLDZEQUFxQixDQUFDO2FBQzNDLENBQUM7WUFFRlksVUFBVSxDQUFDTyxjQUFjLENBQUNWLEdBQUcsQ0FBQyxDQUFDTyxJQUFJLENBQUNJLFNBQUFBLE1BQU0sRUFBSTtnQkFBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sYUFBTkEsTUFBTSxXQUFZLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsTUFBTSxDQUFFZCxVQUFVLENBQUM7YUFBQyxDQUFDO1NBRWpGLFFBQU9pQixLQUFLLEVBQUU7WUFDYmxCLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDZEYsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNicUIsS0FBSyxDQUFDRCxLQUFLLENBQUM7U0FDYjtLQUNGO0lBRUQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFFNUIsb0VBQVU7a0JBQ3hCLDRFQUFDOEIsUUFBTTtZQUFDRixTQUFTLEVBQUU1QiwwRUFBZ0I7OzhCQUNqQyw4REFBQ2dDLEdBQUM7OEJBQUMsMkJBRUg7Ozs7O3lCQUFJOzhCQUNKLDhEQUFDL0IsK0RBQVc7b0JBQUNnQyxPQUFPLEVBQUV2Qix1QkFBdUI7Ozs7O3lCQUFJOzhCQUNqRCw4REFBQ3NCLEdBQUM7OEJBQUUsV0FBVSxDQUFVLE9BQVIxQixRQUFPLENBQUU7Ozs7O3lCQUFLOzhCQUM5Qiw4REFBQzBCLEdBQUM7OEJBQUUsV0FBVSxDQUFVLE1BQUksQ0FBWjVCLE9BQU8sRUFBQyxNQUFJLENBQUM7Ozs7O3lCQUFLOzs7Ozs7aUJBQzNCOzs7OzthQUNMLENBQ1A7Q0FDRjtHQXBDS0QsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBc0NWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEFkZHJlc3NGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkcmVzc0Zvcm0nXG5pbXBvcnQgKiBhcyB3ZWIzIGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcblxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtleGVjdXRhYmxlLCBzZXRFeGVjdXRhYmxlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IGtleSA9IG5ldyB3ZWIzLlB1YmxpY0tleShhZGRyZXNzKVxuICAgICAgc2V0QWRkcmVzcyhrZXkudG9CYXNlNTgoKSlcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgd2ViMy5Db25uZWN0aW9uKHdlYjMuY2x1c3RlckFwaVVybCgnZGV2bmV0JykpXG5cbiAgICAgIGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShrZXkpLnRoZW4oQmFsYW5jZSA9PiB7XG4gICAgICAgIHNldEJhbGFuY2UoQmFsYW5jZS8gd2ViMy5MQU1QT1JUU19QRVJfU09MKVxuICAgICAgfSlcblxuICAgICAgY29ubmVjdGlvbi5nZXRBY2NvdW50SW5mbyhrZXkpLnRoZW4ocmVzdWx0ID0+IHtjb25zb2xlLmxvZyhyZXN1bHQ/LmV4ZWN1dGFibGUpfSlcblxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEFkZHJlc3MoJycpXG4gICAgICBzZXRCYWxhbmNlKDApXG4gICAgICBhbGVydChlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU3RhcnQgWW91ciBTb2xhbmEgSm91cm5leVxuICAgICAgICA8L3A+XG4gICAgICAgIDxBZGRyZXNzRm9ybSBoYW5kbGVyPXthZGRyZXNzU3VibWl0dGVkSGFuZGxlcn0gLz5cbiAgICAgICAgPHA+e2BBZGRyZXNzOiAke2FkZHJlc3N9YH08L3A+XG4gICAgICAgIDxwPntgQmFsYW5jZTogJHtiYWxhbmNlfSBTT0xgfTwvcD5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkFkZHJlc3NGb3JtIiwid2ViMyIsIkhvbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiZXhlY3V0YWJsZSIsInNldEV4ZWN1dGFibGUiLCJhZGRyZXNzU3VibWl0dGVkSGFuZGxlciIsImtleSIsIlB1YmxpY0tleSIsInRvQmFzZTU4IiwiY29ubmVjdGlvbiIsIkNvbm5lY3Rpb24iLCJjbHVzdGVyQXBpVXJsIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJCYWxhbmNlIiwiTEFNUE9SVFNfUEVSX1NPTCIsImdldEFjY291bnRJbmZvIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJBcHAiLCJoZWFkZXIiLCJBcHBIZWFkZXIiLCJwIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});