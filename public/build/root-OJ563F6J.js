import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-H2TLULVD.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-XI4PFYYE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-ECI55RS3.css";

// app/styles/global.css
var global_default = "/build/_assets/global-A2Y5DR4K.css";

// app/components/Navigation.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navigation.tsx"
  );
  import.meta.hot.lastModified = "1784272804028.5376";
}
function Navigation() {
  _s();
  const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
  const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: `navbar ${isScrolled ? "scrolled" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "nav-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/3pfMTuu2Qhy59tTMuCFugw/260793/ozan_varol-112_1.png", alt: "Ozan Varol" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "nav-menu", id: "navMenu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/about", className: "nav-link", children: "About" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/books", className: "nav-link", children: "Books" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/speaking", className: "nav-link", children: "Speaking" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/courses", className: "nav-link", children: "Courses" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-dropdown-menu", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/masterclass", className: "dropdown-card blue", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "THE AI ADVANTAGE" }, void 0, false, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 55,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "For individuals and businesses" }, void 0, false, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 56,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "desc", children: "Learn how to master ChatGPT, reclaim 10 hours from your work week, and change your to-do list from a battleground to a playground." }, void 0, false, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 54,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/moonshot", className: "dropdown-card yellow", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "MOONSHOT THINKING" }, void 0, false, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "For businesses" }, void 0, false, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 61,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "desc", children: "Moonshot Thinking is a system for reimagining the status quo\u2014and building a future others can't yet see. I wrote the book on it\u2014literally." }, void 0, false, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 62,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 59,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/courses", className: "dropdown-all", children: "see all courses" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "nav-link", children: "Blog" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/contact", className: "nav-link", children: "Contact" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/experiences", className: "nav-link", children: "Experiences" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/newsletter", className: "nav-spark", children: "YOUR WEEKLY SPARK" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/masterclass", className: "nav-masterclass", children: "free masterclass" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "nav-toggle", "aria-label": "Open menu", onClick: () => setIsMenuOpen(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `overlay-menu ${isMenuOpen ? "open" : ""}`, id: "overlayMenu", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "overlay-close", "aria-label": "Close menu", onClick: () => setIsMenuOpen(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 512 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", { points: "405 121.8 390.2 107 256 241.2 121.8 107 107 121.8 241.2 256 107 390.2 121.8 405 256 270.8 390.2 405 405 390.2 270.8 256 405 121.8" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 83,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overlay-inner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overlay-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/about", children: "About" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/books", children: "Books" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/speaking", children: "Speaking" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/courses", children: "Courses" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", children: "Blog" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/contact", children: "Contact" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/experiences", children: "Experiences" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overlay-side", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Reimagine The Status Quo" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 97,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get a free audio training with 3 simple strategies to make giant leaps in your life and work." }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 98,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://geni.us/6uDnAm", target: "_blank", children: "download \u2192" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overlay-bestsellers", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "WSJ BESTSELLERS:" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 102,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://geni.us/6uDnAm", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Awaken Your Genius" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 103,
              columnNumber: 64
            }, this) }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://geni.us/TLaRS", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Think Like a Rocket Scientist" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 104,
              columnNumber: 63
            }, this) }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 104,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/SDje6V3rSxOj3fvu53ighA/260793/awakenyourgenius_1e.jpg", alt: "Awaken Your Genius" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Navigation, "e0Qwa1MjO2eD3Vy7tZ3RQSdIfyo=");
_c = Navigation;
var _c;
$RefreshReg$(_c, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1784015652641.3794";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://static.showit.co/1600/Vaf8rrlHQhqmbP081NjgJg/260793/ozan_varol-244.png", alt: "Ozan Varol" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "footer-heading", children: "navigate" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: "Home" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/about", children: "About" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 32,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/speaking", children: "Speaking" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 33,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/blog", children: "Blog" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/newsletter", children: "Newsletter" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/contact", children: "Contact" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "footer-heading", children: "books" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/rocket-scientist", children: "Think Like A Rocket Scientist" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/awaken", children: "Awaken Your Genius" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "footer-heading", children: "join 50k+ readers" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "footer-text", children: "Join 50K+ readers who call it 'the email highlight of my week.' Takes 3 minutes to read. Takes longer to shake." }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/newsletter", className: "footer-link", children: "subscribe \u2192" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "footer-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://static.showit.co/200/ToPPkbZRT0C0XqIAErQWtg/260793/ozan_varol-283.png", alt: "Ozan Varol" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "footer-copyright", children: [
        "Copyright 2025 Reimagine Ventures LLC |",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/terms", children: "terms and conditions" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        " |",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/privacy-policy", children: "privacy policy" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        " |",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/affiliate-disclosure", children: "affiliate disclosure" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        " |",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://megganstefan.com/", target: "_blank", children: "site credit" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: fonts_default
}, {
  rel: "stylesheet",
  href: global_default
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
}];
var meta = () => [{
  charset: "utf-8"
}, {
  viewport: "width=device-width,initial-scale=1"
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigation, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-OJ563F6J.js.map
