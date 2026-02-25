/**
 * Hero typewriter effect — plays once on page load
 */
(function () {
  var el = document.getElementById('hero-typewriter');
  if (!el) return;

  var text = el.textContent;
  el.textContent = '';
  el.setAttribute('aria-live', 'polite');

  var i = 0;
  var speed = 45;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(type, 400);
    });
  } else {
    setTimeout(type, 400);
  }
})();
