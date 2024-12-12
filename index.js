const images = [
    { src: './assets/1.png', text: '-IMPACT-' },
    { src: './assets/2.png', text: '-HUNTER-' },
    { src: './assets/3.png', text: '-MAIDEN-' },
];
let currentIndex = 0;
function updateContent() {
    const imageElement = document.getElementById('shoeImage');
    const subTextElement = document.getElementById('subText');
    imageElement.src = images[currentIndex].src;
    subTextElement.textContent = images[currentIndex].text;
    subTextElement.style.fontWeight = 'bold';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
}

document.addEventListener('DOMContentLoaded', updateContent);