// 根据时间展示不同banner背景大图
const currentDate = new Date();
const hours = currentDate.getHours();
const coverBanner = document.getElementById('cover-banner');
let backgroundImage = 'url(/img/photo-1509189692239-6c2bb03eac8a.jpg)';
if (hours >= 17) {
  backgroundImage = 'url(/img/denys-nevozhai-D8iZPlX-2fs-unsplash.jpg)';
}
coverBanner.style.backgroundImage = backgroundImage;
