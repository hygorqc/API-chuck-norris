const piadaOut = document.querySelector('#outPiadas');
const proxima = document.querySelector('#nextPiada');

proxima.addEventListener('click', nextPiada);

document.addEventListener('DOMContentLoaded', nextPiada)

function nextPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(piada => {
      piadaOut.innerText = piada.value
    })
  function aparecerSelo() {
    piadaOut.nextElementSibling.style.display = 'block'
  }
  setTimeout(aparecerSelo, 1000)
}

setTimeout(loaderChuck, 3000)

function loaderChuck() {
  const loadBox = document.querySelector('.load')
  loadBox.classList.remove('load')
}