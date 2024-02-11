/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('particles.js loaded - callback');
});
const colors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#D1BBFF', '#FFC3A0', '#FF6F69', '#D4A5A5', '#392613', '#31A2AC', '#61C0BF', '#6B4226', '#D9BF77', '#FFFFFF'];
setInterval(() => {
  const puddle = document.createElement('div');
  puddle.className = 'puddle';
  puddle.style.left = Math.random() * window.innerWidth + 'px';
  puddle.style.top = Math.random() * window.innerHeight + 'px';
  puddle.style.width = puddle.style.height = (Math.random() * 200 + 50) + 'px'; // min size of 50px and max size of 250px
  puddle.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(puddle);
  setTimeout(() => {
      puddle.remove();
  }, 4000); // puddles are removed after 4 seconds
}, 1000); // new puddle appears every 1 second
const cursor = document.querySelector('#custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

let hue = 0;

setInterval(() => {
    cursor.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 50%), hsl(${hue}, 100%, 50%))`;
    cursor.style.boxShadow = `0 0 5px 5px hsl(${hue}, 100%, 50%)`;
    hue = (hue + 1) % 360;
}, 100);