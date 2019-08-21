
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

let listButtons = document.getElementsByClassName('show-btn')
for(let button of listButtons) {
  button.addEventListener('click', function(event) {
    let chunk = event.currentTarget.parentElement.parentElement;
    console.log(`${chunk.id}`)
    if (parseInt(chunk.id) < listButtons.length) {
      let nextChunk = document.getElementById(parseInt(chunk.id) + 1);
      nextChunk.classList.remove('d-none');
      if (parseInt(chunk.id) === listButtons.length - 2) {
        nextChunk.getElementsByClassName('show-btn')[0].classList.add('d-none');
        document.getElementById('pagination').classList.remove('d-none');
      }
    }
    event.currentTarget.classList.add('d-none');
  });
}
