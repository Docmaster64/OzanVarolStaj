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
  import.meta.hot.lastModified = "1785166008730.3655";
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
            lineNumber: 64,
            columnNumber: 56
          }, this),
          "You'll ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "actually", children: "Actually" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 64,
            columnNumber: 69
          }, this),
          " Love"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "hero-join", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: [
          'Join 50K+ readers who call it "',
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-underline", children: "the email highlight of my week." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 65,
            columnNumber: 72
          }, this),
          '"'
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 38
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "hero-tag", children: "Takes 3 minutes to read. Takes longer to shake." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-form", id: "hero-convertkit-form" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hero-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/1600/Ih3XbA-RRRmJ2zw_AOkzXw/260793/untitled_design_1.png", alt: "Ozan Varol" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "hero-title", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ozan", children: "OZAN" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "varol", children: "VAROL" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "press-logos-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logos", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/RuRBwNDmTdueZgR42rHJNg/260793/wsj-logo.png", alt: "WSJ" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/PQtYbaDHT6ui7P67lsRdAA/260793/time-logo.png", alt: "TIME" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/pWDpYRR4RmO3Nk1RfL-3fQ/260793/fast-company-2.jpg", alt: "Fast Company" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 87,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/oY03gf4VQ5mQeqUwAyEJag/260793/cnn-logo.png", alt: "CNN" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 88,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/uTC-oOlySYeF6HDatCuA-w/260793/slate-logo.png", alt: "Slate" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/FQQRs84MRB2TEptVxwLvGw/260793/bbc-logo.png", alt: "BBC" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 90,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/Io-sD5YfRRGFz_pZWFnnxA/260793/the-washington-post-logo.png", alt: "Washington Post" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "press-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/cxHse0WKRe6mfy1thT7vIQ/260793/newsweek-logo.png", alt: "Newsweek" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 92,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-gallery", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/vjojJALxToO9k6fCfUVsJg/260793/ozan_1503.jpg", alt: "Ozan Varol" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "about-title", children: "Hey, I'm Ozan" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "about-subtitle", children: "I'M A ROCKET SCIENTIST TURNED BESTSELLING AUTHOR" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-text", children: "I've spent my career building things and then walking away from them \u2014 rocket science, law, a tenured professorship \u2014 each time following the energy toward what was next." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-text", children: "Now I write, speak, and teach about the moments that define us: the leaps we almost don't take, the things we hold onto too long, and the breakthroughs that only happen when we stop playing it safe." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-text", children: "My books have been translated into 25+ languages and selected by Adam Grant as his #1 leadership book of the year. I've delivered 100+ keynotes to organizations like Microsoft, Google X, Salesforce, Goldman Sachs, and the U.S. Department of State." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "quote-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "quote-text", children: "Most people hold on too long. I've built my life around letting go." }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "audio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-image", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/800/3SWKdhu6TuW85ECqrEiGXg/shared/phone-earbuds.png", alt: "Audio Training", className: "audio-main" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/ozan_audio_training_4_cropped.png", alt: "Training", className: "audio-overlay-1" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/Zz4JnRI7TgO440xGw0eRbA/shared/podcastblank.png", alt: "Podcast", className: "audio-overlay-2" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/file/ENoNJjXgQzmN5-5ugA_ClQ/260793/audio.gif", alt: "Audio", className: "audio-gif" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "audio-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "audio-title", children: [
          "Get A Free",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 138,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "audio-title-accent", children: "Audio Training" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 138,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 1
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "audio-description", children: "Learn 3 simple strategies to make giant leaps in your life and work." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "audio-form", id: "hero-convertkit-form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", placeholder: "Email Address", required: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "audio-btn", children: "DOWNLOAD" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mission-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mission-title", children: "The next chapter starts when you close this one." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mission-text", children: "Every ending is a beginning in disguise. The moment you let go of what's familiar\u2014whether it's a job, a relationship, or an old version of yourself\u2014you create space for something new to emerge." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mission-text", children: "This is the art of strategic surrender. It's not about giving up; it's about giving way to what's trying to happen. The most successful people aren't those who hold on the tightest, but those who know when to release." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mission-text", children: "I help people and organizations make this transition\u2014from the known to the unknown, from the comfortable to the transformative. Because the best view comes after the hardest climb." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "speaking", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-video-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { autoPlay: true, muted: true, loop: true, playsInline: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: "https://static.showit.co/file/WQOtPRx3cWRyVNQq2q-txA/260793/speakingclip.mp4", type: "video/mp4" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "speaking-title", children: "KEYNOTE SPEAKING" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-badge", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "speaking-badge-title", children: "the best keynote speaker." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "speaking-badge-author", children: "\u2014 Heather Hoerle" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "speaking-testimonial", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "testimonial-text", children: "AMONG THE TOP 3 SPEAKERS I'VE EVER ENCOUNTERED IN MY LIFE." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 183,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-author", children: "\u2014KATHERINE COHEN" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 184,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/speaking", className: "btn-link", children: "learn more \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "book", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/800/U9qXHFfiSBic8gCLv49PnQ/260793/awakenyourgenius_3d-1.png", alt: "Awaken Your Genius" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "book-label", children: "my latest book" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "book-title", children: "Awaken Your Genius" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "book-description", children: [
          "From the acclaimed author of ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Think Like a Rocket Scientist" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 202,
            columnNumber: 44
          }, this),
          " comes a simple guide to unlock your originality and unleash your unique talents."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-buttons", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://geni.us/6uDnAm", target: "_blank", className: "btn-primary", children: "order now \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/awaken", className: "btn-secondary", children: "learn more \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "book-praise", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 210,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "praise-label", children: "PRAISE FOR" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 213,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "praise-book", children: "Awaken Your Genius:" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-text", children: "Ozan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-author", children: "\u2014 ADAM GRANT" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 216,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "praise-title", children: "New York Times bestselling author of ORIGINALS and GIVE AND TAKE, and host of the TED podcast WorkLife" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 217,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "praise-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/J-w35fhaQKGqr4HdnlyAug/260793/adam-grant-photo.png", alt: "Adam Grant", className: "praise-photo" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 220,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "badge-content", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-source", children: "Wall Street Journal" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 222,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-type", children: "Best Seller" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 223,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-rank", children: "#3" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 224,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 221,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "blog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/blog", className: "blog-label", children: "recently on the blog:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://ozanvarol.com/a-trap-disguised-as-wisdom/", target: "_blank", className: "blog-title", children: "A Trap Disguised as Wisdom" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-arrow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 38 22.07", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M37.85 10.61 28 .19a.63.63 0 0 0-.87 0 .65.65 0 0 0 0 .87L36 10.42H.61a.61.61 0 0 0 0 1.22H36L27.14 21a.63.63 0 0 0 0 .87.62.62 0 0 0 .87 0l9.81-10.42a.66.66 0 0 0 0-.84Z" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 240,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 239,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/800/pqeYF6WVQXyweWNacR2ZwA/260793/52175273144_209943c6ea_o.jpg", alt: "Ozan Varol speaker" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 234,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "testimonials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonials-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-item alt reverse frame-blue", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 256,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "testimonial-text", children: [
            "Ozan Varol\xA0is\xA0always\xA0smart\xA0and\xA0always",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 258,
              columnNumber: 111
            }, this),
            "fascinating."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 258,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-author", children: "\u2014SUSAN CAIN" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-title", children: [
            "Bestselling author of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Bittersweet" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 260,
              columnNumber: 70
            }, this),
            " and ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Quiet" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 260,
              columnNumber: 93
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 260,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/400/WqI8LJ8mQc-n_QvfzCCV6g/260793/susan-cain-dec-2021-credit-aaron-fedor-sus_2702a_crop.png", alt: "Susan Cain" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 263,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-item alt frame-yellow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/hMVCmqe8ScKxvOWkrE1bxg/260793/dan_pink.jpg", alt: "Dan Pink" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 269,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "testimonial-text", children: "When the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero\u2014which means you need Ozan Varol." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-author", children: "\u2014 DAN PINK" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 276,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "testimonial-title", children: [
            "New York Times\u2013bestselling author of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Drive" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 277,
              columnNumber: 85
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 277,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 252,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "quote-banner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "quote-banner-text", children: [
          "If you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 288,
            columnNumber: 100
          }, this),
          "Varol."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-author", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "quote-banner-name", children: "\u2014 NIR EYAL" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 291,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "quote-banner-title", children: [
            "Bestselling author of ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "Hooked and Indistractable" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 292,
              columnNumber: 71
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 292,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 290,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteIcon, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 295,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quote-banner-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://static.showit.co/200/SrQb7ryXRy6FUcnmZiSfBg/260793/nireyal_150-scaled.jpg", alt: "Nir Eyal" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 300,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 299,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 298,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 285,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 284,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Index, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-EA6AQQWT.js.map
