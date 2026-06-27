(function () {
  var storageKey = "jumpers-language";

  function currentLanguage() {
    try {
      return localStorage.getItem(storageKey) || "nl";
    } catch (err) {
      return "nl";
    }
  }

  function setLanguage(lang) {
    if (lang !== "nl" && lang !== "en") lang = "nl";
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(storageKey, lang);
    } catch (err) {}

    document.querySelectorAll("[data-nl]").forEach(function (el) {
      var text = el.getAttribute("data-" + lang);
      if (text) el.innerHTML = text;
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-set-lang") === lang);
    });

    var hint = document.querySelector("[data-lang-hint]");
    if (hint) {
      hint.textContent = lang === "nl"
        ? "English? Use the button here."
        : "Nederlands? Gebruik de knop hier.";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(currentLanguage());
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-set-lang"));
      });
    });
  });
})();
