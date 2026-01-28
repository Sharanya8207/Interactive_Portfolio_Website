// Scroll animations
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic'
});

// Typing animation
const text = "Frontend Developer | DSA Enthusiast";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
