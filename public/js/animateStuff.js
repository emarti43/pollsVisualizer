
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

let progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(function(element) {
  let barValue = (element.getAttribute('aria-valuenow') / element.getAttribute('aria-valuemax'))* 100 + 1;
  element.setAttribute('total-width', `${barValue}%`);
});
onScroll(window);

function onScroll(element) {
  window.setTimeout(1000/60);
  let progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function(progressBar) {
    if (isInViewport(progressBar) && !progressBar.getAttribute('has-animated') && progressBar.parentElement.style.display !== 'none') {
      progressBar.animate([
        {width: 0},
        {width: progressBar.getAttribute('total-width')}
      ], {
        duration: 1000,
        easing: 'ease-out',
      });
      progressBar.setAttribute('style', `width: ${progressBar.getAttribute('total-width')};`)
      progressBar.setAttribute('has-animated', 'true');
    }
  });

}


document.onload = window.addEventListener('scroll', onScroll);

let listButtons = document.getElementsByClassName('page-btn');
for(let button of listButtons) {
  button.addEventListener('click', function(event) {
    let chunk = event.currentTarget.parentElement.parentElement;
    if (parseInt(chunk.id) < listButtons.length) {
      let nextChunk = document.getElementById(parseInt(chunk.id) + 1);
      nextChunk.classList.remove('d-none');
      if (parseInt(chunk.id) === listButtons.length - 2) {
        nextChunk.getElementsByClassName('page-btn')[0].classList.add('d-none');
        document.getElementById('pagination').classList.remove('d-none');
      }
    }
    event.currentTarget.classList.add('d-none');
  });
}
