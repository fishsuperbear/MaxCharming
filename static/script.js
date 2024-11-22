/*
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(() => {
  // Banner Owl Carousel
  $("#owl_carousel .owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    stagePadding: 0,
  });
});
*/

// Navbar Scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 向下滚动
        navbar.style.top = "-60px"; // 隐藏导航栏
    } else {
        // 向上滚动
        navbar.style.top = "0"; // 显示导航栏
    }
    lastScrollTop = scrollTop; // 更新最后的滚动位置
});
// End Navbar Scroll

// Search Box
function toggleSearchBox() {
  const searchBox = document.getElementById('searchBox');
  searchBox.classList.toggle('active');
  document.querySelector(".search-bar").focus(); // search auto focus
}

function search() {
  const query = document.querySelector('.search-box input').value;
  alert('搜索: ' + query);
  // 这里可以添加搜索功能代码，例如跳转到搜索结果页面
}

// End Search Box

