/* ═══════════════════════════════════════════════════════
   DENTAL LITE — main.js
   Semua interaksi: nav, cara kerja stepper, layanan flip
═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────
     NAV — hamburger toggle
  ───────────────────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var navMobile = document.getElementById('navMobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      navMobile.classList.toggle('open');
      var icon = navToggle.querySelector('i');
      if (navMobile.classList.contains('open')) {
        icon.className = 'ti ti-x';
      } else {
        icon.className = 'ti ti-menu-2';
      }
    });

    // Close mobile menu when link clicked
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        navToggle.querySelector('i').className = 'ti ti-menu-2';
      });
    });
  }

  /* ─────────────────────────────────────────
     CARA KERJA — interactive stepper
  ───────────────────────────────────────── */
  var currentStep = 0;
  var totalSteps  = 5;

  var steps   = document.querySelectorAll('.cara__step');
  var screens = document.querySelectorAll('.cara__screen');
  var tabs    = document.querySelectorAll('.cara__tab');

  function goToStep(n) {
    // Screens
    screens.forEach(function (s, i) {
      s.classList.toggle('active', i === n);
    });

    // Sidebar steps (desktop)
    steps.forEach(function (s, i) {
      s.classList.remove('active', 'done');
      if (i === n)      s.classList.add('active');
      else if (i < n)   s.classList.add('done');
    });

    // Mobile tabs
    tabs.forEach(function (t, i) {
      t.classList.toggle('active', i === n);
    });

    currentStep = n;
  }

  // Click on sidebar step
  steps.forEach(function (step) {
    step.addEventListener('click', function () {
      var n = parseInt(step.getAttribute('data-step'), 10);
      goToStep(n);
    });
  });

  // Click on mobile tab
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var n = parseInt(tab.getAttribute('data-step'), 10);
      goToStep(n);
    });
  });

  // Auto-advance every 3.5s (pauses on user interaction)
  var autoTimer;

  function startAuto() {
    autoTimer = setInterval(function () {
      var next = (currentStep + 1) % totalSteps;
      goToStep(next);
    }, 3500);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  startAuto();

  // Pause on user interaction, restart after 6s idle
  var restartTimer;
  function onUserInteraction() {
    stopAuto();
    clearTimeout(restartTimer);
    restartTimer = setTimeout(startAuto, 6000);
  }

  steps.forEach(function (s) { s.addEventListener('click', onUserInteraction); });
  tabs.forEach(function (t)  { t.addEventListener('click', onUserInteraction); });

  /* ─────────────────────────────────────────
     LAYANAN — tap to flip on mobile / touch
  ───────────────────────────────────────── */
  var layananCards = document.querySelectorAll('.layanan-card');

  layananCards.forEach(function (card) {
    // Touch devices: tap to toggle flip
    card.addEventListener('click', function () {
      // Only toggle on touch / narrow screens — hover handles desktop
      if (window.matchMedia('(hover: none)').matches) {
        card.classList.toggle('flipped');
      }
    });
  });

  /* ─────────────────────────────────────────
     SMOOTH SCROLL — polyfill for older Safari
  ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
