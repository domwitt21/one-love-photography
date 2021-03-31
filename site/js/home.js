function navBar() {
    var x = document.getElementById("mobMenu");
    x.classList.toggle("mobMenuOpen");
}

// carousel script start

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
})
