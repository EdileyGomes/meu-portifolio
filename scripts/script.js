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



    $(".conteudo-card").on({
        mouseenter: function () {
            $(this).css({
                top:'-110px',
                opacity:'1',
                transition:'filter 0.5 ease-out',
                filter:"brightness(100%)"
            })
            $(this).parent().css({
                filter:"brightness(60%)",
                transition: "filter 0.5 ease-out"
            })
        },
        mouseleave: function () {
            $(this).css({
                opacity: "0",
                top: "-70px",
                transition: " opacity 0.5s ease-out, top 0.5s ease-out"
            })
        }
    })

});