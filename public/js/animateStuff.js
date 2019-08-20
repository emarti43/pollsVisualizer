
anime({
  targets: document.querySelectorAll("li.subpopulation-response"),
  translateX: 0,
  duration: 600,
});
anime({
  targets: '.animated-poll',
  height: '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
})

document.addEventListener('DOMContentLoaded', function() {
  let progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(function(element) {
    let barValue = (element.getAttribute('aria-valuenow') / element.getAttribute('aria-valuemax'))* 100;
    element.style.width = `${barValue}%`;
  });
});
