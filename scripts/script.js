// Floating hearts animation
const heartsContainer = document.querySelector('.floating-hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart-float';
  heart.innerHTML = '❤️';
  const size = Math.random() * 24 + 24;
  heart.style.fontSize = `${size}px`;
  heart.style.left = `${Math.random() * 98}%`;
  heart.style.animationDuration = `${3 + Math.random() * 4}s`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 800);

// Heart float CSS:
const style = document.createElement('style');
style.innerHTML = `
.heart-float {
  position: absolute;
  top: 100%;
  opacity: 0.8;
  animation: floatHeart 7s linear forwards;
  pointer-events: none;
  will-change: transform, opacity;
}
@keyframes floatHeart {
  0% {transform: translateY(0) scale(1);}
  60% {opacity: 1;}
  100% {transform: translateY(-110vh) scale(1.3); opacity: 0;}
}
`;
document.head.appendChild(style);

// Flower animation (simple SVGs on borders)
const flowersContainer = document.querySelector('.flowers-decor');
for(let i=0; i<10; i++) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = `${Math.random()*95}%`;
  flower.style.top = `${Math.random()>0.5 ? -30 : 100+Math.random()*2}%`;
  flower.style.animationDuration = `${18+Math.random()*7}s`;
  flower.style.opacity = 0.75;
  flower.innerHTML = `
    <svg width="36" height="36" viewBox="0 0 36 36">
      <g>
        <circle cx="18" cy="18" r="7" fill="#ffd1e3"/>
        <circle cx="30" cy="18" r="5" fill="#e63946" opacity="0.7"/>
        <circle cx="6" cy="18" r="5" fill="#e63946" opacity="0.7"/>
        <circle cx="18" cy="6" r="5" fill="#e63946" opacity="0.7"/>
        <circle cx="18" cy="30" r="5" fill="#e63946" opacity="0.7"/>
      </g>
      <circle cx="18" cy="18" r="2.5" fill="#ffd700"/>
    </svg>
  `;
  flowersContainer.appendChild(flower);
}
const flowerStyle = document.createElement('style');
flowerStyle.innerHTML = `
.flower {
  position: absolute;
  animation: flowerFloat linear infinite;
  z-index: 1;
}
@keyframes flowerFloat {
  0% {transform: translateY(0) rotate(0deg);}
  100% {transform: translateY(100vh) rotate(140deg);}
}
`;
document.head.appendChild(flowerStyle);

// Nueva animación de rosas realistas
function createRose() {
  const rose = document.createElement('div');
  rose.className = 'rose-float';
  rose.style.left = `${Math.random() * 90 + 2}%`;
  rose.style.animationDuration = `${10 + Math.random() * 9}s`;
  rose.style.transform = `scale(${0.8 + Math.random() * 0.7})`;
  rose.style.opacity = 0.88;
  rose.innerHTML = `
    <svg width="52" height="70" viewBox="0 0 52 70" fill="none">
      <!-- Tallo -->
      <rect x="24" y="38" width="4" height="28" rx="2" fill="#2d6a4f"/>
      <!-- Hoja izquierda -->
      <ellipse cx="18" cy="55" rx="8" ry="4" fill="#40916c" transform="rotate(-25 18 55)"/>
      <!-- Hoja derecha -->
      <ellipse cx="36" cy="60" rx="7" ry="3.5" fill="#52b788" transform="rotate(18 36 60)"/>
      <!-- Pétalos exteriores -->
      <ellipse cx="26" cy="21" rx="14" ry="16" fill="#c9184a" />
      <!-- Pétalos medios -->
      <ellipse cx="26" cy="24" rx="10" ry="11" fill="#e63946" />
      <!-- Pétalos internos -->
      <ellipse cx="26" cy="28" rx="7" ry="7.5" fill="#ffb6c1" />
      <!-- Centro espiral -->
      <path d="M26 28 Q29 29 26 32 Q23 29 26 28" fill="#ffd1e3" stroke="#c9184a" stroke-width="0.7"/>
    </svg>
  `;
  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 19000);
}
setInterval(createRose, 3200);

const roseStyle = document.createElement('style');
roseStyle.innerHTML = `
.rose-float {
  position: fixed;
  top: 100%;
  pointer-events: none;
  z-index: 2;
  animation: floatRose linear forwards;
}
@keyframes floatRose {
  0% {transform: translateY(0) scale(1);}
  60% {opacity: 1;}
  100% {transform: translateY(-110vh) scale(1.15); opacity: 0;}
}
`;
document.head.appendChild(roseStyle);

// Music control
const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('bg-music');
let musicOn = false;
musicBtn.addEventListener('click', () => {
  if (!musicOn) {
    music.play();
    musicOn = true;
    musicBtn.classList.add('active');
    musicBtn.title = "Pausar música";
  } else {
    music.pause();
    musicOn = false;
    musicBtn.classList.remove('active');
    musicBtn.title = "Reproducir música";
  }
});

// Prevent auto-play on load
music.volume = 0.4;
music.pause();