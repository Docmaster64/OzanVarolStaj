import {
  QuoteIcon
} from "/build/_shared/chunk-GMRJBPQV.js";
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

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1785394560444.644";
}
var meta = () => [{
  title: "Home | #1 Bestselling Author, Keynote Speaker & Expert on Innovation & Creativity"
}, {
  name: "description",
  content: "Ozan Varol is a former rocket scientist turned #1 bestselling author and a world-renowned keynote speaker. Unlock strategies for sparking creativity and reimagining the status quo."
}];
function Index() {
  _s();
  (0, import_react.useEffect)(() => {
    const ozan = document.querySelector(".hero-title .ozan");
    const varol = document.querySelector(".hero-title .varol");
    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (ozan && !ozan.classList.contains("animate"))
          ozan.classList.add("animate");
        if (varol && !varol.classList.contains("animate"))
          varol.classList.add("animate");
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  (0, import_react.useEffect)(() => {
    const gallery = document.querySelector(".about-gallery");
    if (!gallery)
      return;
    const slides = gallery.querySelectorAll("img");
    const dotsWrap = document.querySelector(".about-dots");
    let current = 0;
    let timer = null;
    if (dotsWrap && slides.length) {
      slides.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.setAttribute("aria-label", "Slide " + (i + 1));
        if (i === 0)
          btn.classList.add("active");
        btn.addEventListener("click", () => {
          goTo(i);
          restart();
        });
        dotsWrap.appendChild(btn);
      });
    }
    function goTo(index) {
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      if (dotsWrap) {
        dotsWrap.querySelectorAll("button").forEach((b, i) => {
          b.classList.toggle("active", i === index);
        });
      }
      current = index;
    }
    function next() {
      goTo((current + 1) % slides.length);
    }
    function start() {
      timer = setInterval(next, 5e3);
    }
    function stop() {
      if (timer)
        clearInterval(timer);
    }
    function restart() {
      stop();
      start();
    }
    if (slides.length > 1) {
      goTo(0);
      start();
      gallery.addEventListener("mouseenter", stop);
      gallery.addEventListener("mouseleave", start);
    }
    return () => {
      if (timer)
        clearInterval(timer);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    if ("IntersectionObserver" in window && fadeEls.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15
      });
      fadeEls.forEach((el) => io.observe(el));
    } else {
      fadeEls.forEach((el) => el.classList.add("visible"));
    }
  }, []);
  (0, import_react.useEffect)(() => {
    const container = document.getElementById("hero-convertkit-form");
    if (!container)
      return;
    if (container.querySelector("script[data-uid='9ae9a39668']"))
      return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "9ae9a39668");
    script.src = "https://outatime-llc.ck.page/9ae9a39668/index.js";
    container.appendChild(script);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "hero-sub", children: [
          "The One Newsletter",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 137,
            columnNumber: 56
          }, this),
          "You'll ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "actually", children: "Actually" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 137,
            columnNumber: 69
          }, this),
          " Love"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "hero-join", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: [
          'Join 50K+ readers who call it "',
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-underline", children: "the email highlight of my week." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 138,
            columnNumber: 72
          }, this),
          '"'
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 38
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "hero-tag", children: "Takes 3 minutes to read. Takes longer to shake." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-form", id: "hero-convertkit-form" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/1600/Ih3XbA-RRRmJ2zw_AOkzXw/260793/untitled_design_1.png", alt: "Ozan Varol" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "hero-title", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ozan", children: "OZAN" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "varol", children: "VAROL" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "press-logos-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logos", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/RuRBwNDmTdueZgR42rHJNg/260793/wsj-logo.png", alt: "WSJ" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/PQtYbaDHT6ui7P67lsRdAA/260793/time-logo.png", alt: "TIME" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 159,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/pWDpYRR4RmO3Nk1RfL-3fQ/260793/fast-company-2.jpg", alt: "Fast Company" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 160,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/oY03gf4VQ5mQeqUwAyEJag/260793/cnn-logo.png", alt: "CNN" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 161,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 161,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/uTC-oOlySYeF6HDatCuA-w/260793/slate-logo.png", alt: "Slate" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 162,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 162,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/FQQRs84MRB2TEptVxwLvGw/260793/bbc-logo.png", alt: "BBC" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 163,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/Io-sD5YfRRGFz_pZWFnnxA/260793/the-washington-post-logo.png", alt: "Washington Post" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 164,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/cxHse0WKRe6mfy1thT7vIQ/260793/newsweek-logo.png", alt: "Newsweek" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 165,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-eyebrow", children: "I'M OZAN VAROL" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "about-subtitle", children: [
          "a ROCKET SCIENTIST TURNED BESTSELLING",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 175,
            columnNumber: 81
          }, this),
          "AUTHOR"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-text fade-in", children: [
          "I've spent my career building things and then walking away from them \u2014 rocket science, law, a tenured professorship \u2014 each time following the energy toward what was next.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 176,
            columnNumber: 217
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 176,
            columnNumber: 223
          }, this),
          "Now I write, speak, and teach about the moments that define us: the leaps we almost don't take, the things we hold onto too long, and the breakthroughs that only happen when we stop playing it safe.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 176,
            columnNumber: 427
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 176,
            columnNumber: 433
          }, this),
          "My books have been translated into 25+ languages and selected by Adam Grant as his #1 leadership book of the year. I've delivered 100+ keynotes to organizations like Microsoft, Google X, Salesforce, Goldman Sachs, and the U.S. Department of State."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-gallery-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-gallery", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "active", src: "https://static.showit.co/400/vjojJALxToO9k6fCfUVsJg/260793/ozan_1503.jpg", alt: "Ozan Varol" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/ZAImgYHOQ66OsMvVCbdujQ/260793/ozan_1379.jpg", alt: "Ozan Varol" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/hHPLAClLRzmHLoI_pKMhZQ/260793/ozan_1515.jpg", alt: "Ozan Varol" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "quote-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-bg-top" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-bg-bottom" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-container", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-images", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-image-original", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/image_2.png", alt: "Original" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-image-yellow", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "quote-text", children: [
            "Most people hold",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 200,
              columnNumber: 56
            }, this),
            "on too long. I've",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 200,
              columnNumber: 79
            }, this),
            "built my life",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 200,
              columnNumber: 98
            }, this),
            "around letting go."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 200,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "quote-btn", children: [
            "COUNT ME IN!",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 203,
                columnNumber: 140
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "12 5 19 12 12 19" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 203,
                columnNumber: 179
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-card quote-card-copy", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "quote-text", children: [
            "Most people hold",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 208,
              columnNumber: 56
            }, this),
            "on too long. I've",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 208,
              columnNumber: 79
            }, this),
            "built my life",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 208,
              columnNumber: 98
            }, this),
            "around letting go."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "quote-btn", children: [
            "COUNT ME IN!",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 211,
                columnNumber: 140
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "12 5 19 12 12 19" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 211,
                columnNumber: 179
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 211,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "speaking", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-video-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { autoPlay: true, muted: true, loop: true, playsInline: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: "https://static.showit.co/file/WQOtPRx3cWRyVNQq2q-txA/260793/speakingclip.mp4", type: "video/mp4" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-overlay", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-quote speaking-quote-top-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "speaking-quote-icon", viewBox: "0 0 500 500", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 226,
            columnNumber: 92
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "speaking-quote-text", children: [
            "The Best Keynote",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 227,
              columnNumber: 64
            }, this),
            "Speaker."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 227,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "speaking-quote-author", children: "\u2014 Heather Hoerle" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 228,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-center-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "speaking-center-title", children: "KEYNOTE SPEAKING" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/speaking", className: "speaking-center-btn", children: "LEARN MORE \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 232,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-quote speaking-quote-bottom-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "speaking-quote-icon", viewBox: "0 0 500 500", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 235,
            columnNumber: 92
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "speaking-quote-text", children: [
            "Among the Top 3 SPEAKERS",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 236,
              columnNumber: 72
            }, this),
            "I'VE EVER ENCOUNTERED IN",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 236,
              columnNumber: 102
            }, this),
            "MY LIFE."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "speaking-quote-author", children: "\u2014 Katherine Cohen" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "audio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-image", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/800/3SWKdhu6TuW85ECqrEiGXg/shared/phone-earbuds.png", alt: "Audio Training", className: "audio-main" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/ozan_audio_training_4_cropped.png", alt: "Training", className: "audio-overlay-1" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/Zz4JnRI7TgO440xGw0eRbA/shared/podcastblank.png", alt: "Podcast", className: "audio-overlay-2" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/file/ENoNJjXgQzmN5-5ugA_ClQ/260793/audio.gif", alt: "Audio", className: "audio-gif" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "audio-title", children: [
          "Get A Free",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 252,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "audio-title-accent", children: "Audio Training" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 252,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 252,
          columnNumber: 1
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "audio-description", children: "Learn 3 simple strategies to make giant leaps in your life and work." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "audio-form", id: "hero-convertkit-form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", placeholder: "Email Address", required: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "audio-btn", children: "DOWNLOAD" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 244,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "book", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/800/U9qXHFfiSBic8gCLv49PnQ/260793/awakenyourgenius_3d-1.png", alt: "Awaken Your Genius" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 266,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "book-label", children: "my latest book" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "book-title", children: "Awaken Your Genius" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "book-description", children: [
          "From the acclaimed author of ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Think Like a Rocket Scientist" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 272,
            columnNumber: 44
          }, this),
          " comes a simple guide to unlock your originality and unleash your unique talents."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-buttons", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://geni.us/6uDnAm", target: "_blank", className: "btn-primary", children: "order now \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/awaken", className: "btn-secondary", children: "learn more \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 276,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 274,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-praise", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 280,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "praise-label", children: "PRAISE FOR" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "praise-book", children: "Awaken Your Genius:" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 284,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-text", children: "Ozan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-author", children: "\u2014 ADAM GRANT" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 286,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-title", children: "New York Times bestselling author of ORIGINALS and GIVE AND TAKE, and host of the TED podcast WorkLife" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 287,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/J-w35fhaQKGqr4HdnlyAug/260793/adam-grant-photo.png", alt: "Adam Grant", className: "praise-photo" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 290,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "badge-content", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-source", children: "Wall Street Journal" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 292,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-type", children: "Best Seller" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 293,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-rank", children: "#3" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 294,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 289,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 264,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "blog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "blog-label", children: "recently on the blog:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 306,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://ozanvarol.com/a-trap-disguised-as-wisdom/", target: "_blank", className: "blog-title", children: "A Trap Disguised as Wisdom" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 307,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-arrow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 38 22.07", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M37.85 10.61 28 .19a.63.63 0 0 0-.87 0 .65.65 0 0 0 0 .87L36 10.42H.61a.61.61 0 0 0 0 1.22H36L27.14 21a.63.63 0 0 0 0 .87.62.62 0 0 0 .87 0l9.81-10.42a.66.66 0 0 0 0-.84Z" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 310,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 309,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 305,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/800/pqeYF6WVQXyweWNacR2ZwA/260793/52175273144_209943c6ea_o.jpg", alt: "Ozan Varol speaker" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 314,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 304,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "testimonials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonials-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-item alt reverse frame-blue", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 326,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 325,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "testimonial-text", children: [
            "Ozan Varol\xA0is\xA0always\xA0smart\xA0and\xA0always",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 328,
              columnNumber: 111
            }, this),
            "fascinating."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 328,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-author", children: "\u2014SUSAN CAIN" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 329,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-title", children: [
            "Bestselling author of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Bittersweet" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 330,
              columnNumber: 70
            }, this),
            " and ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Quiet" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 330,
              columnNumber: 93
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 330,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 324,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/WqI8LJ8mQc-n_QvfzCCV6g/260793/susan-cain-dec-2021-credit-aaron-fedor-sus_2702a_crop.png", alt: "Susan Cain" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 323,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-item alt frame-yellow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/hMVCmqe8ScKxvOWkrE1bxg/260793/dan_pink.jpg", alt: "Dan Pink" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 339,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 338,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 343,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 342,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "testimonial-text", children: "When the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero\u2014which means you need Ozan Varol." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 345,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-author", children: "\u2014 DAN PINK" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 346,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-title", children: [
            "New York Times\u2013bestselling author of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Drive" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 347,
              columnNumber: 85
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 347,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 341,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 337,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 322,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 321,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "quote-banner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "quote-banner-text", children: [
          "If you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 358,
            columnNumber: 100
          }, this),
          "Varol."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 357,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-author", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "quote-banner-name", children: "\u2014 NIR EYAL" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 361,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "quote-banner-title", children: [
            "Bestselling author of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Hooked and Indistractable" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 362,
              columnNumber: 71
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 362,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 365,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 364,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 356,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/SrQb7ryXRy6FUcnmZiSfBg/260793/nireyal_150-scaled.jpg", alt: "Nir Eyal" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 370,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 369,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 368,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 355,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 354,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(Index, "0cIHaRPT5AsNp+tu70IQfhS7pBY=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-YFEX5K33.js.map
