
const btn = document.querySelector(".dark_light_btn");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  }
  else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});









// localStorage.setItem("color_theme", dark);
//
// var media = window.matchMedia(mediaQueryString)


// const $darkLightHandler = document.querySelector('.dark_light_btn');
//
// const userColortheme = localStorage.getItem('color_theme');
// const osColortheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//
// const getUserTheme = () => userColortheme ? userColortheme : osColortheme;
//
// window.onload = function() {
//   if (getUserTheme === 'dark') {
//     localStorage.setItem('color_theme', 'dark');
//
//     document.documentElement.setAttribute('color_theme', 'dark');
//     $darkLightHandler.setAttribute('value', 'to_light')
//   }
//   else {
//     localStorage.setItem('color_theme', 'light');
//
//     document.documentElement.setAttribute('color_theme', 'light');
//   }
// }
//
// $darkLightHandler.addEventListener('click', e=>{
//   if (e.target.checked){
//     localStorage.setItem('color_theme', 'light');
//
//     document.documentElement.setAttribute('color_theme', dark);
//   }
//   else {
//     localStorage.setItem('color_theme', 'light');
//
//     document.documentElement.setAttribute('color_theme', 'light');
//   }
// })








// var Logo = {
//   setColor: function (color) {
//     $(".logo_img").attr("src", "img/np_logo/np_logo_"+color+".png");
//   }
// }
//
// var DarkLightBtn = {
//   setImg : function (darkorlight) {
//     $(".dark_light_btn_img").attr("src", "img/dark_light_icon/to_"+darkorlight+"_icon.png");
//   }
// }
//
// var Body = {
//   setColor: function (color) {
//     $('body').css('color', color);
//   },
//
//   setBackgroundColor: function (color) {
//     $('body').css('backgroundColor', color);
//   }
// }
//
// var Link = {
//   setColor: function (color){
//     $('a').css('color', color);
//   }
// }
//
// var List = {
//   setColor: function (color) {
//     $(".list_box").css('color', color);
//   }
// }
//
// var ListHere = {
//   setColor: function (color) {
//     $(".list_here").css('color', color);
//   }
// }
//
// // ============================================================
// function darkLightHandler(self) {
//
//   if(self.value === 'to_light'){
//     Body.setBackgroundColor('white');
//     Body.setColor('black');
//
//     Link.setColor('black');
//     List.setColor('rgb(80,80,80)');
//     ListHere.setColor('black');
//
//     Logo.setColor('black');
//
//     DarkLightBtn.setImg('dark');
//
//
//     self.value = 'to_dark'
//   }
//   else {
//     Body.setBackgroundColor('black');
//     Body.setColor('white');
//
//     Link.setColor('white');
//     List.setColor('rgb(150,150,150)');
//     ListHere.setColor('white');
//
//     Logo.setColor('white');
//
//     DarkLightBtn.setImg('light');
//
//     self.value = 'to_light'
//
//   }
//
// }
