import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-XI4PFYYE.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/CtaSection.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\CtaSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\CtaSection.tsx"
  );
  import.meta.hot.lastModified = "1784022483565.0408";
}
function CtaSection({
  title,
  text,
  buttons
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "cta-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "cta-title", children: title }, void 0, false, {
      fileName: "app/components/CtaSection.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "cta-text", children: text }, void 0, false, {
      fileName: "app/components/CtaSection.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cta-buttons", children: buttons.map((button) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: button.href, className: `btn-${button.variant ?? "primary"} btn-large`, target: button.external ? "_blank" : void 0, rel: button.external ? "noopener noreferrer" : void 0, children: [
      button.label,
      " \u2192"
    ] }, button.label, true, {
      fileName: "app/components/CtaSection.tsx",
      lineNumber: 31,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/components/CtaSection.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CtaSection.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CtaSection.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = CtaSection;
var _c;
$RefreshReg$(_c, "CtaSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CtaSection
};
//# sourceMappingURL=/build/_shared/chunk-ADAHJXOB.js.map
