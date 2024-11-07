$(document).ready(function () {
    $('.logoArea').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    })
});


var searchActive = document.getElementById("searchInp");
searchActive.addEventListener('focus',()=>{
    document.getElementById("footerSearch").style.border = "2px #47b2e4 solid"
})