const nav = document.getElementById('nav-bar__about-us');
const animationTargets = document.getElementsByClassName('parallax-animation__container');
for (let index = 0; index < animationTargets.length; index++) {
  const elementTarget = animationTargets[index];
  if (window.innerHeight> (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    const childTarget = elementTarget.getElementsByClassName('parallax-animation-ready');
    childTarget[0].classList.add('parallax-animation');
  }
}
window.onscroll = function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    nav.classList.add('header-about-bg');
  } else {
    nav.classList.remove('header-about-bg');
  }
 
  for (let index = 0; index < animationTargets.length; index++) {
    const elementTarget = animationTargets[index];
    if (scrollTop + window.innerHeight> (elementTarget.offsetTop + elementTarget.offsetHeight)) {
      const childTarget = elementTarget.getElementsByClassName('parallax-animation-ready');
      childTarget[0].classList.add('parallax-animation');
    }
  }
  
}
