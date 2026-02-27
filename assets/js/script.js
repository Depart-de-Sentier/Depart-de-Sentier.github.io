/* --- Hamburger Nav Menu --- */
(function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  if (!hamburger || !navLinks) return;

  function openMenu() {
    hamburger.classList.add('is-open');
    navLinks.classList.add('is-open');
    overlay && overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    overlay && overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Close all dropdowns too
    document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
      dd.classList.remove('is-open');
    });
  }

  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay && overlay.addEventListener('click', closeMenu);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Mobile dropdown toggles
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth > 768) return;
      e.preventDefault();
      var parent = toggle.closest('.nav-dropdown');
      var isOpen = parent.classList.contains('is-open');
      // Close siblings
      document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
        dd.classList.remove('is-open');
      });
      if (!isOpen) parent.classList.add('is-open');
    });
  });

  // Close menu if viewport widens past breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMenu();
  });
})();

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
