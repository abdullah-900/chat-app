/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCWlux9msRAg7h7L9bSkmCJqRfwjBin6DM\",\n    authDomain: \"placid-5ff78.firebaseapp.com\",\n    projectId: \"placid-5ff78\",\n    storageBucket: \"placid-5ff78.appspot.com\",\n    messagingSenderId: \"261360857245\",\n    appId: \"1:261360857245:web:266d6b5beb65bbdb70e474\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNSO0FBQ087QUFDTTtBQUNsRCxNQUFNSSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBRVQ7QUFFQSxzQkFBc0I7QUFDZixNQUFNQyxNQUFNWCwyREFBYUEsQ0FBQ0ksZ0JBQWdCO0FBQzFDLE1BQU1RLE9BQUtYLHNEQUFPQSxDQUFDVSxLQUFLO0FBQ3hCLE1BQU1FLFVBQVVYLDREQUFVQSxHQUFHO0FBQzdCLE1BQU1ZLEtBQUtYLGdFQUFZQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQge2dldEF1dGh9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7Z2V0U3RvcmFnZX0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNXbHV4OW1zUkFnN2g3TDliU2ttQ0pxUmZ3akJpbjZETVwiLFxyXG4gIGF1dGhEb21haW46IFwicGxhY2lkLTVmZjc4LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJwbGFjaWQtNWZmNzhcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInBsYWNpZC01ZmY3OC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI2MTM2MDg1NzI0NVwiLFxyXG4gIGFwcElkOiBcIjE6MjYxMzYwODU3MjQ1OndlYjoyNjZkNmI1YmViNjViYmRiNzBlNDc0XCIsXHJcbiAgXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmV4cG9ydCBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGF1dGg9Z2V0QXV0aChhcHApO1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XHJcblxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRTdG9yYWdlIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwic3RvcmFnZSIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/context/AuthContext */ \"./pages/components/context/AuthContext.js\");\n/* harmony import */ var _components_context_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/context/user */ \"./pages/components/context/user.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [selectedUser, setSelectedUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [combinedId, setCombinedId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const unsub = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (user)=>{\n            setCurrentUser(user);\n        });\n        return ()=>{\n            unsub();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Placid\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\chat-app\\\\pages\\\\_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\chat-app\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\chat-app\\\\pages\\\\_app.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context_user__WEBPACK_IMPORTED_MODULE_6__.userContext.Provider, {\n                value: {\n                    setSelectedUser,\n                    selectedUser,\n                    combinedId,\n                    setCombinedId\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthContext.Provider, {\n                    value: {\n                        currentUser\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\chat-app\\\\pages\\\\_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\chat-app\\\\pages\\\\_app.js\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdal\\\\Documents\\\\GitHub\\\\chat-app\\\\pages\\\\_app.js\",\n                lineNumber: 31,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNjO0FBQ1I7QUFDZ0I7QUFDVztBQUNOO0FBQzNCO0FBQ2QsU0FBU08sTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3JELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQ1csY0FBYUMsZ0JBQWdCLEdBQUNaLCtDQUFRQTtJQUM3QyxNQUFNLENBQUNhLFlBQVdDLGNBQWMsR0FBQ2QsK0NBQVFBO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWdCLFFBQU1iLGlFQUFrQkEsQ0FBQ0QsMkNBQUlBLEVBQUUsQ0FBQ2UsT0FBUztZQUUzQ04sZUFBZU07UUFFbkI7UUFDQSxPQUFPLElBQU07WUFDWEQ7UUFDRjtJQUVGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDQSw4REFBQ1Ysa0RBQUlBOztrQ0FDTCw4REFBQ1k7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNoQiwwRUFBb0I7Z0JBQUNrQixPQUFPO29CQUFDVjtvQkFBZ0JEO29CQUFhRTtvQkFBV0M7Z0JBQWE7MEJBQ2pGLDRFQUFDWCxpRkFBb0I7b0JBQUNtQixPQUFPO3dCQUFDYjtvQkFBVzs4QkFDdkMsNEVBQUNGO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQnXHJcbmltcG9ydCB7IHVzZXJDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRleHQvdXNlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgY29uc3QgW3NlbGVjdGVkVXNlcixzZXRTZWxlY3RlZFVzZXJdPXVzZVN0YXRlKCk7XHJcbiAgIGNvbnN0IFtjb21iaW5lZElkLHNldENvbWJpbmVkSWRdPXVzZVN0YXRlKCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3ViPW9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgIFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKHVzZXIpO1xyXG4gICBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5zdWIoKTtcclxuICAgIH07XHJcbiAgICBcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+UGxhY2lkPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIj48L21ldGE+XHJcbiAgPC9IZWFkPlxyXG4gIDx1c2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NldFNlbGVjdGVkVXNlcixzZWxlY3RlZFVzZXIsY29tYmluZWRJZCxzZXRDb21iaW5lZElkfX0+XHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjdXJyZW50VXNlcn19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvdXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvPlxyXG4gIClcclxufVxyXG4gIFxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiQXV0aENvbnRleHQiLCJ1c2VyQ29udGV4dCIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJzZWxlY3RlZFVzZXIiLCJzZXRTZWxlY3RlZFVzZXIiLCJjb21iaW5lZElkIiwic2V0Q29tYmluZWRJZCIsInVuc3ViIiwidXNlciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/context/AuthContext.js":
/*!*************************************************!*\
  !*** ./pages/components/context/AuthContext.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLDRCQUFjRCxvREFBYUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dC5qcz80YzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/context/AuthContext.js\n");

/***/ }),

/***/ "./pages/components/context/user.js":
/*!******************************************!*\
  !*** ./pages/components/context/user.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userContext\": () => (/* binding */ userContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NvbnRleHQvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFL0IsTUFBTUMsNEJBQVlELG9EQUFhQSxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9jb250ZXh0L3VzZXIuanM/NzMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VyQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/context/user.js\n");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();