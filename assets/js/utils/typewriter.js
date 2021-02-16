const heroTypewriter = document.getElementById('hero-typewriter');
const typewriter = new Typewriter(heroTypewriter, {
  loop: true,
});

typewriter
  .typeString('130 years of education')
  .pauseFor(2500)
  .deleteAll()
  .typeString('1891 to present')
  .pauseFor(2500)
  .deleteAll()
  .typeString('a trip through time')
  .deleteChars(4)
  .typeString('education')
  .pauseFor(2500)
  .start();
