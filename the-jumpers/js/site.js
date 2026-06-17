/* ============================================================
   HBV THE JUMPERS — shared site behaviour
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Language (NL / EN) ---------- */
  var LANG_KEY = "jumpers-lang";

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "nl";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    // text content
    document.querySelectorAll("[data-nl]").forEach(function (el) {
      var val = el.getAttribute("data-" + lang);
      if (val !== null) el.innerHTML = val;
    });
    // attributes: data-nl-placeholder / data-en-placeholder etc.
    ["placeholder", "aria-label", "value", "content"].forEach(function (attr) {
      document.querySelectorAll("[data-nl-" + attr + "]").forEach(function (el) {
        var val = el.getAttribute("data-" + lang + "-" + attr);
        if (val !== null) el.setAttribute(attr, val);
      });
    });
    // toggle buttons
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  window.JumpersLang = { set: setLang, get: getLang };

  /* ---------- DOM ready ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());

    // language buttons
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        setLang(b.getAttribute("data-lang"));
      });
    });

    // mobile nav toggle
    var nav = document.querySelector(".nav");
    var toggle = document.querySelector(".nav-toggle");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        nav.classList.toggle("open");
      });
      nav.querySelectorAll(".nav-links a").forEach(function (a) {
        a.addEventListener("click", function () { nav.classList.remove("open"); });
      });
    }

    // nav shadow on scroll
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("scrolled", window.scrollY > 8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // reveal on scroll
    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }

    // count-up stats
    var counters = document.querySelectorAll("[data-count]");
    if ("IntersectionObserver" in window && counters.length) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          var el = e.target;
          var target = parseFloat(el.getAttribute("data-count"));
          var suffix = el.getAttribute("data-suffix") || "";
          var prefix = el.getAttribute("data-prefix") || "";
          var dur = 1300, start = null;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = Math.round(target * eased);
            el.textContent = prefix + val.toLocaleString("nl-NL") + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  });

  /* ---------- Form validation ---------- */
  window.JumpersForm = {
    init: function (formSel, successSel) {
      var form = document.querySelector(formSel);
      if (!form) return;
      var success = document.querySelector(successSel);
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var ok = true;
        form.querySelectorAll("[required]").forEach(function (input) {
          var field = input.closest(".field");
          var valid = input.value.trim() !== "";
          if (input.type === "email") {
            valid = valid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
          }
          if (field) field.classList.toggle("invalid", !valid);
          if (!valid) ok = false;
        });
        if (ok) {
          form.style.display = "none";
          if (success) {
            success.classList.add("show");
            success.scrollTo ? null : null;
          }
        } else {
          var firstBad = form.querySelector(".field.invalid input, .field.invalid select, .field.invalid textarea");
          if (firstBad) firstBad.focus();
        }
      });
      form.querySelectorAll("input, select, textarea").forEach(function (input) {
        input.addEventListener("input", function () {
          var field = input.closest(".field");
          if (field) field.classList.remove("invalid");
        });
      });
    }
  };
})();
