$('document').ready(function () {

    $('#load').delay(500).slideUp(1000);
    $('.spinner').fadeOut(1500);
    $('.grid-item-3').fadeIn(1750);
})

function move() {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}