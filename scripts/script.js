$(document).ready(function () {
    $('.imagem-card').on({
        mouseenter: function (e) {
            $(this).siblings('.conteudo-card').css({
                opacity: "1",
                top: "-110px",
                transition: "opacity 0.5s ease-out, top 0.5s ease-out"
            });
            $(this).css({
                filter: "brightness(60%)",
                transition: "filter 0.5s ease-out"
            });
        },
        mouseleave: function (e) {
            $(this).siblings('.conteudo-card').css({
                opacity: "0",
                top: "-70px",
                transition: " opacity 0.5s ease-out, top 0.5s ease-out"
            });
            $(this).css({
                filter: "brightness(100%)",
                transition: "filter 0.5s ease-out"
            });
        }
    });
});