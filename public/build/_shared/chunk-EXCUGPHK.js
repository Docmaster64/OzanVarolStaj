import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-422OJQSD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/PageHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PageHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PageHeader.tsx"
  );
  import.meta.hot.lastModified = "1785832089902.1228";
}
function PageHeader({
  title,
  subtitle
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "page-title", children: title }, void 0, false, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    subtitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "page-subtitle", children: subtitle }, void 0, false, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 28,
      columnNumber: 21
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/PageHeader.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/PageHeader.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = PageHeader;
var _c;
$RefreshReg$(_c, "PageHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PageHeader
};
//# sourceMappingURL=/build/_shared/chunk-EXCUGPHK.js.map
