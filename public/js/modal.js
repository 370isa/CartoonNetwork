const modalOverlay = document.querySelector('.modal-overlay');
const cartoons = document.querySelectorAll('.carrossel-animations .item');

for (let cartoon of cartoons) {
  cartoon.addEventListener('click', function() {
    modalOverlay.classList.add('active');

    const image = cartoon.querySelector('img');
    const imgSrc = image.getAttribute('src');
    const imgAlt = image.getAttribute('alt');
    const title = cartoon.querySelector('h2').innerHTML;
    const classification = cartoon.querySelector('p.class').innerText;
    const description = cartoon.querySelector('p.descri').innerText;

    modalOverlay.querySelector('.cartoon-img img').src = `${imgSrc}`;
    modalOverlay.querySelector('.cartoon-img img').alt = `${imgAlt}`;
    modalOverlay.querySelector('h1').textContent = `${title}`;
    modalOverlay.querySelector('h2').textContent = `${title}`;

    if (classification === 'L') {
      modalOverlay.querySelector('.cartoon-yeares').classList.add('public');
    } else {
      modalOverlay.querySelector('.cartoon-yeares').classList.remove('public');
    }

    modalOverlay.querySelector('.cartoon-yeares').textContent = `${classification}`;
    modalOverlay.querySelector('.modal-footer p').textContent = `${description}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active');
});

