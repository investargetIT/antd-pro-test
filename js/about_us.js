const nav = document.getElementById('nav-bar__about-us');
window.onscroll = function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    nav.classList.add('header-about-bg');
  } else {
    nav.classList.remove('header-about-bg');
  }
}
