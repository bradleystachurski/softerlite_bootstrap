$('.carousel').carousel({
    interval: 4000
});

$('.carousel-control').on('click', function() {
    //console.log("I work")
    $('.carousel').carousel('pause')
});

$('.carousel').on('keyup', function() {
    console.log("Keyup works")
    $('.carousel').carousel('pause')
})