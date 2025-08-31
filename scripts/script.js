$(document).ready(function () {
    
    $(".card-projeto").on({
        mouseenter: function (e) {
            $(this).find('.conteudo-card').css({
                opacity: "1",
                top: "-110px",
                transition: "0.5s"
            });
        },
        mouseleave: function (e) {
            $(this).find('.conteudo-card').css({
                opacity: "0",
                top: "-70px",
                transition: " opacity 0.5s ease-out, top 0.5s ease-out"
            });
        }
    })


});