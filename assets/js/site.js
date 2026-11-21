// Rivetory Agent Desk: small, honest motion only.
// 1. The status pill shows the real time in Meridian, Idaho.
// 2. The flow strip cycles through one call being handled.

(function () {
  var clock = document.querySelector('[data-boise-clock]');
  if (clock) {
    var fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Boise',
      hour: 'numeric',
      minute: '2-digit'
    });
    var tick = function () { clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 30000);
  }

  var steps = document.querySelectorAll('[data-flow-step]');
  if (steps.length > 1) {
    var i = 0;
    var advance = function () {
      steps.forEach(function (s) { s.classList.remove('active'); });
      steps[i].classList.add('active');
      i = (i + 1) % steps.length;
    };
    advance();
    setInterval(advance, 2200);
  }

  var year = document.querySelector('[data-year]');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
