(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function copyLabel(target, source) {
    var nl = source.getAttribute("data-nl");
    var en = source.getAttribute("data-en");
    if (nl) target.setAttribute("data-nl", nl);
    if (en) target.setAttribute("data-en", en);
    target.textContent = source.textContent.trim();
  }

  function cleanHref(href) {
    if (!href || href === "#") return "";
    return href;
  }

  function buildLink(source, extraClass) {
    var link = document.createElement("a");
    link.className = "mobile-menu-link" + (extraClass ? " " + extraClass : "");
    link.href = cleanHref(source.getAttribute("href")) || "#";
    copyLabel(link, source);
    if (source.classList.contains("active")) link.classList.add("active");
    if (source.classList.contains("nav-sponsor")) link.classList.add("sponsor");
    return link;
  }

  ready(function () {
    var navInner = document.querySelector(".site-nav .nav-inner");
    var desktopNav = document.querySelector(".site-nav .nav-links");
    if (!navInner || !desktopNav || document.querySelector(".mobile-menu-toggle")) return;

    var toggle = document.createElement("button");
    toggle.className = "mobile-menu-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Menu openen");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";
    navInner.insertBefore(toggle, navInner.firstChild);

    var backdrop = document.createElement("div");
    backdrop.className = "mobile-menu-backdrop";
    backdrop.hidden = true;

    var panel = document.createElement("aside");
    panel.className = "mobile-menu-panel";
    panel.setAttribute("aria-label", "Mobiele navigatie");
    panel.setAttribute("aria-hidden", "true");
    panel.innerHTML =
      '<div class="mobile-menu-head">' +
        '<a class="mobile-menu-brand" href="homepage-voorbeeld.html">' +
          '<img src="assets/logo.png" alt="HBV The Jumpers logo" />' +
          '<span>HBV The Jumpers<small>Den Haag</small></span>' +
        '</a>' +
        '<button class="mobile-menu-close" type="button" aria-label="Menu sluiten">&times;</button>' +
      '</div>' +
      '<div class="mobile-menu-body">' +
        '<nav class="mobile-menu-list" aria-label="Mobiele navigatie"></nav>' +
        '<p class="mobile-menu-foot" data-nl="Scroll door het menu om alle pagina&apos;s en submenu&apos;s te bekijken." data-en="Scroll through the menu to view all pages and subpages.">Scroll door het menu om alle pagina&apos;s en submenu&apos;s te bekijken.</p>' +
      '</div>';

    var list = panel.querySelector(".mobile-menu-list");
    desktopNav.querySelectorAll(":scope > .nav-item").forEach(function (item) {
      var main = item.querySelector(":scope > .nav-link");
      if (!main) return;
      var dropdown = item.querySelector(":scope > .dropdown");

      if (!dropdown) {
        list.appendChild(buildLink(main));
        return;
      }

      var details = document.createElement("details");
      details.className = "mobile-menu-group";
      details.open = true;

      var summary = document.createElement("summary");
      copyLabel(summary, main);
      details.appendChild(summary);

      var sublist = document.createElement("div");
      sublist.className = "mobile-menu-sublist";

      var mainHref = cleanHref(main.getAttribute("href"));
      if (mainHref) {
        sublist.appendChild(buildLink(main, "overview"));
      }

      dropdown.querySelectorAll("a").forEach(function (sub) {
        sublist.appendChild(buildLink(sub));
      });

      details.appendChild(sublist);
      list.appendChild(details);
    });

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    var closeButton = panel.querySelector(".mobile-menu-close");
    var focusableSelector = "a[href], button:not([disabled]), summary";
    var lastFocused = null;

    function openMenu() {
      lastFocused = document.activeElement;
      backdrop.hidden = false;
      document.body.classList.add("mobile-menu-open");
      toggle.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
      setTimeout(function () {
        var first = panel.querySelector(focusableSelector);
        if (first) first.focus();
      }, 80);
    }

    function closeMenu() {
      document.body.classList.remove("mobile-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
      setTimeout(function () {
        backdrop.hidden = true;
      }, 320);
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    toggle.addEventListener("click", function () {
      if (document.body.classList.contains("mobile-menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    closeButton.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    panel.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (link && link.getAttribute("href") && link.getAttribute("href") !== "#") {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("mobile-menu-open")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1120 && document.body.classList.contains("mobile-menu-open")) {
        closeMenu();
      }
    });
  });
})();
