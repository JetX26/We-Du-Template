"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/zustand/esm/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   createStore: () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore),\n/* harmony export */   \"default\": () => (/* binding */ react),\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ \"(ssr)/./node_modules/zustand/esm/vanilla.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ \"(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\");\n\n\n\n\n\nconst { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;\nlet didWarnAboutEqualityFn = false;\nfunction useStore(api, selector = api.getState, equalityFn) {\n  if (( false ? 0 : void 0) !== \"production\" && equalityFn && !didWarnAboutEqualityFn) {\n    console.warn(\n      \"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937\"\n    );\n    didWarnAboutEqualityFn = true;\n  }\n  const slice = useSyncExternalStoreWithSelector(\n    api.subscribe,\n    api.getState,\n    api.getServerState || api.getState,\n    selector,\n    equalityFn\n  );\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(slice);\n  return slice;\n}\nconst createImpl = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\" && typeof createState !== \"function\") {\n    console.warn(\n      \"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.\"\n    );\n  }\n  const api = typeof createState === \"function\" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore)(createState) : createState;\n  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);\n  Object.assign(useBoundStore, api);\n  return useBoundStore;\n};\nconst create = (createState) => createState ? createImpl(createState) : createImpl;\nvar react = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\") {\n    console.warn(\n      \"[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.\"\n    );\n  }\n  return create(createState);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUNNO0FBQ2tEOztBQUV4RixRQUFRLG1DQUFtQyxFQUFFLDBFQUEyQjtBQUN4RTtBQUNBO0FBQ0EsT0FBTyxNQUFlLEdBQUcsQ0FBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0EsMkdBQTJHLFdBQVc7QUFDdEg7QUFDQTtBQUNBLGtEQUFrRCw0REFBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQWUsR0FBRyxDQUFvQjtBQUM3QztBQUNBLHdFQUF3RSxTQUFTO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpeC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS9pbmRleC5tanM/NzczMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3p1c3RhbmQvdmFuaWxsYSc7XG5leHBvcnQgKiBmcm9tICd6dXN0YW5kL3ZhbmlsbGEnO1xuaW1wb3J0IHsgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHMgZnJvbSAndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yLmpzJztcblxuY29uc3QgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciB9ID0gdXNlU3luY0V4dGVybmFsU3RvcmVFeHBvcnRzO1xubGV0IGRpZFdhcm5BYm91dEVxdWFsaXR5Rm4gPSBmYWxzZTtcbmZ1bmN0aW9uIHVzZVN0b3JlKGFwaSwgc2VsZWN0b3IgPSBhcGkuZ2V0U3RhdGUsIGVxdWFsaXR5Rm4pIHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIGVxdWFsaXR5Rm4gJiYgIWRpZFdhcm5BYm91dEVxdWFsaXR5Rm4pIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBVc2UgYGNyZWF0ZVdpdGhFcXVhbGl0eUZuYCBpbnN0ZWFkIG9mIGBjcmVhdGVgIG9yIHVzZSBgdXNlU3RvcmVXaXRoRXF1YWxpdHlGbmAgaW5zdGVhZCBvZiBgdXNlU3RvcmVgLiBUaGV5IGNhbiBiZSBpbXBvcnRlZCBmcm9tICd6dXN0YW5kL3RyYWRpdGlvbmFsJy4gaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kL2Rpc2N1c3Npb25zLzE5MzdcIlxuICAgICk7XG4gICAgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2xpY2UgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICBhcGkuc3Vic2NyaWJlLFxuICAgIGFwaS5nZXRTdGF0ZSxcbiAgICBhcGkuZ2V0U2VydmVyU3RhdGUgfHwgYXBpLmdldFN0YXRlLFxuICAgIHNlbGVjdG9yLFxuICAgIGVxdWFsaXR5Rm5cbiAgKTtcbiAgdXNlRGVidWdWYWx1ZShzbGljZSk7XG4gIHJldHVybiBzbGljZTtcbn1cbmNvbnN0IGNyZWF0ZUltcGwgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIHR5cGVvZiBjcmVhdGVTdGF0ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbREVQUkVDQVRFRF0gUGFzc2luZyBhIHZhbmlsbGEgc3RvcmUgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLiBJbnN0ZWFkIHVzZSBgaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICd6dXN0YW5kJ2AuXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IGFwaSA9IHR5cGVvZiBjcmVhdGVTdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY3JlYXRlU3RvcmUoY3JlYXRlU3RhdGUpIDogY3JlYXRlU3RhdGU7XG4gIGNvbnN0IHVzZUJvdW5kU3RvcmUgPSAoc2VsZWN0b3IsIGVxdWFsaXR5Rm4pID0+IHVzZVN0b3JlKGFwaSwgc2VsZWN0b3IsIGVxdWFsaXR5Rm4pO1xuICBPYmplY3QuYXNzaWduKHVzZUJvdW5kU3RvcmUsIGFwaSk7XG4gIHJldHVybiB1c2VCb3VuZFN0b3JlO1xufTtcbmNvbnN0IGNyZWF0ZSA9IChjcmVhdGVTdGF0ZSkgPT4gY3JlYXRlU3RhdGUgPyBjcmVhdGVJbXBsKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZUltcGw7XG52YXIgcmVhY3QgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbREVQUkVDQVRFRF0gRGVmYXVsdCBleHBvcnQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCB1c2UgYGltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3p1c3RhbmQnYC5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZShjcmVhdGVTdGF0ZSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGUsIHJlYWN0IGFzIGRlZmF1bHQsIHVzZVN0b3JlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand/esm/vanilla.mjs":
/*!**********************************************!*\
  !*** ./node_modules/zustand/esm/vanilla.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   \"default\": () => (/* binding */ vanilla)\n/* harmony export */ });\nconst createStoreImpl = (createState) => {\n  let state;\n  const listeners = /* @__PURE__ */ new Set();\n  const setState = (partial, replace) => {\n    const nextState = typeof partial === \"function\" ? partial(state) : partial;\n    if (!Object.is(nextState, state)) {\n      const previousState = state;\n      state = (replace != null ? replace : typeof nextState !== \"object\") ? nextState : Object.assign({}, state, nextState);\n      listeners.forEach((listener) => listener(state, previousState));\n    }\n  };\n  const getState = () => state;\n  const subscribe = (listener) => {\n    listeners.add(listener);\n    return () => listeners.delete(listener);\n  };\n  const destroy = () => {\n    if (( false ? 0 : void 0) !== \"production\") {\n      console.warn(\n        \"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.\"\n      );\n    }\n    listeners.clear();\n  };\n  const api = { setState, getState, subscribe, destroy };\n  state = createState(setState, getState, api);\n  return api;\n};\nconst createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;\nvar vanilla = (createState) => {\n  if (( false ? 0 : void 0) !== \"production\") {\n    console.warn(\n      \"[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.\"\n    );\n  }\n  return createStore(createState);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQWUsR0FBRyxDQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0EsdUVBQXVFLGNBQWM7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l4LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3p1c3RhbmQvZXNtL3ZhbmlsbGEubWpzP2JkYTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlU3RvcmVJbXBsID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGxldCBzdGF0ZTtcbiAgY29uc3QgbGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgc2V0U3RhdGUgPSAocGFydGlhbCwgcmVwbGFjZSkgPT4ge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHR5cGVvZiBwYXJ0aWFsID09PSBcImZ1bmN0aW9uXCIgPyBwYXJ0aWFsKHN0YXRlKSA6IHBhcnRpYWw7XG4gICAgaWYgKCFPYmplY3QuaXMobmV4dFN0YXRlLCBzdGF0ZSkpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBzdGF0ZTtcbiAgICAgIHN0YXRlID0gKHJlcGxhY2UgIT0gbnVsbCA/IHJlcGxhY2UgOiB0eXBlb2YgbmV4dFN0YXRlICE9PSBcIm9iamVjdFwiKSA/IG5leHRTdGF0ZSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihzdGF0ZSwgcHJldmlvdXNTdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIltERVBSRUNBVEVEXSBUaGUgYGRlc3Ryb3lgIG1ldGhvZCB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIGEgZnV0dXJlIHZlcnNpb24uIEluc3RlYWQgdXNlIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IHN1YnNjcmliZS4gRXZlcnl0aGluZyB3aWxsIGJlIGdhcmJhZ2UtY29sbGVjdGVkIGlmIHN0b3JlIGlzIGdhcmJhZ2UtY29sbGVjdGVkLlwiXG4gICAgICApO1xuICAgIH1cbiAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgfTtcbiAgY29uc3QgYXBpID0geyBzZXRTdGF0ZSwgZ2V0U3RhdGUsIHN1YnNjcmliZSwgZGVzdHJveSB9O1xuICBzdGF0ZSA9IGNyZWF0ZVN0YXRlKHNldFN0YXRlLCBnZXRTdGF0ZSwgYXBpKTtcbiAgcmV0dXJuIGFwaTtcbn07XG5jb25zdCBjcmVhdGVTdG9yZSA9IChjcmVhdGVTdGF0ZSkgPT4gY3JlYXRlU3RhdGUgPyBjcmVhdGVTdG9yZUltcGwoY3JlYXRlU3RhdGUpIDogY3JlYXRlU3RvcmVJbXBsO1xudmFyIHZhbmlsbGEgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbREVQUkVDQVRFRF0gRGVmYXVsdCBleHBvcnQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCB1c2UgaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd6dXN0YW5kL3ZhbmlsbGEnLlwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlU3RvcmUoY3JlYXRlU3RhdGUpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIHZhbmlsbGEgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/vanilla.mjs\n");

/***/ })

};
;