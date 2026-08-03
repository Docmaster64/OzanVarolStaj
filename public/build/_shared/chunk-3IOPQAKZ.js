import {
  QuoteIcon
} from "/build/_shared/chunk-KU7STB4S.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-422OJQSD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/PraiseCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PraiseCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PraiseCard.tsx"
  );
  import.meta.hot.lastModified = "1785739878831.7947";
}
function PraiseCard({
  text,
  author,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
      fileName: "app/components/PraiseCard.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/PraiseCard.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-text", children: text }, void 0, false, {
      fileName: "app/components/PraiseCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-author", children: author }, void 0, false, {
      fileName: "app/components/PraiseCard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-title", children: title }, void 0, false, {
      fileName: "app/components/PraiseCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PraiseCard.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = PraiseCard;
var _c;
$RefreshReg$(_c, "PraiseCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/praise.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\praise.ts"
  );
  import.meta.hot.lastModified = "1785739878831.7947";
}
var awakenPraise = [
  {
    text: "\u201COzan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of.\u201D",
    author: "\u2014 ADAM GRANT",
    title: "New York Times bestselling author of ORIGINALS and GIVE AND TAKE, and host of the TED podcast WorkLife"
  },
  {
    text: "\u201CA brilliant and inspiring guide to breaking free from conventional thinking. Varol shows us how to reclaim our creativity and live more fully.\u201D",
    author: "\u2014 SHANE PARRISH",
    title: "Author of THE CLEAR MIND and founder of Farnam Street"
  },
  {
    text: "\u201CVarol has written the definitive guide to unlocking your creative potential. This book will change how you think about thinking.\u201D",
    author: "\u2014 CAL NEWPORT",
    title: "New York Times bestselling author of DEEP WORK"
  }
];
var rocketScientistPraise = [
  {
    text: "\u201COzan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of.\u201D",
    author: "\u2014 ADAM GRANT",
    title: "New York Times bestselling author of ORIGINALS and GIVE AND TAKE"
  },
  {
    text: "\u201CIf you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan Varol.\u201D",
    author: "\u2014 NIR EYAL",
    title: "New York Times-bestselling author of Hooked and Indistractable"
  },
  {
    text: "\u201CWhen the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero\u2014which means you need Ozan Varol.\u201D",
    author: "\u2014 DAN PINK",
    title: "Bestselling author of Bittersweet and Quiet"
  }
];

export {
  PraiseCard,
  awakenPraise,
  rocketScientistPraise
};
//# sourceMappingURL=/build/_shared/chunk-3IOPQAKZ.js.map
