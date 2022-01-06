//js start
//orange start
let product_menus = document.querySelectorAll("#p_tab_menu .menus .menu");
let product_contents = document.querySelectorAll("#p_tab_menu .contents .content");

for (let menu of product_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#product_tab .menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of product_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })

}
// orange end



//jquery start
$( document ).ready(function() {

    //nav
    
    
    $(document).on('click', '#mobile-navbar-close', function () {
        $(this).parent().removeClass("active");
    
    })
    $(document).on('click', '#mobile-navbar-show', function () {
        $('.mobile-navbar').addClass("active");
    
    })
    
    $(document).on('click', '.mobile-navbar ul li a', function () {
        if ($(this).children('i').hasClass('fa-caret-right')) {
            $(this).children('i').removeClass('fa-caret-right').addClass('fa-sort-down')
        }
        else {
            $(this).children('i').removeClass('fa-sort-down').addClass('fa-caret-right')
        }
        $(this).parent().next().slideToggle();
    })
    
    $(document).on('click', '#search', function () {
        $(this).next().toggle();
    })
    //end navbar
    
    
    
    //slider start
    $(function() {
        $(".Slider").vegas({
            slides: [
                { src: '../Image/h3-slider-background.jpg' },
                { src: '../Image/h3-slider-background-2.jpg' },
                { src: '../Image/h3-slider-background-3.jpg' }
            ],
            animation: 'kenburnsDownLeft'
        });
    });
    //slider end

//filter start


   $(document).on('click', '.categories', function(e)
   {
       e.preventDefault();
       $(this).next().next().slideToggle();
   })

   $(document).on('click', '.category li a', function (e) {
       e.preventDefault();
       let category = $(this).attr('data-id');
       let products = $('.product-item');
       
       products.each(function () {
           if(category == $(this).attr('data-id'))
           {
               $(this).parent().fadeIn();
           }
           else
           {
               $(this).parent().hide();
           }
       })
       if(category == 'all')
       {
           products.parent().fadeIn();
       }
   })
//filter end
//acardion start
$("section#accordionPage h6").click(function() {
    let value = $(this).next().attr("data-index");
    if ($(this).next()[0] != $(".active[data-index=" + value + "]")[0]) {
        $(".active[data-index=" + value + "]").slideUp("200", function() {
            $(this).removeClass("active")
        }).prev().removeClass("clickedColor clickedBackground");
        $(this).next().slideDown("200", function() {
            $(this).addClass("active")
        }).prev().addClass("clickedColor clickedBackground");
    } else {
        $(".active[data-index=" + value + "]").slideUp("200", function() {
            $(this).removeClass("active")
        }).prev().removeClass("clickedColor clickedBackground");
    }
})
//acardion end
//sllider 2

$(document).ready(function(){
    $(".slider2").owlCarousel(
        {
            items: 1,
            loop: true,
            autoplay: true
        }
    );
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});
  
//slider2 end

//progress bar start
$('#progress-bar .percentage').each(function () {
    let percentage = $(this);
    let limit = percentage.text();
    let grow = 0;
    function progress() {
        if (grow < limit) {
            setTimeout(function () {
                grow += 1;
                percentage.text(grow);
                progress();
            }, 40);
        }
    }
    progress();
});
// progressbar end
// tabs start

let prevActiveTabMenu1HeaderDataId = 1;
let prevActiveTabMenu2HeaderDataId = 1;
let prevActiveTabMenu3HeaderDataId = 1;
let prevActiveTabMenu4HeaderDataId = 1;

$('.tab-menu1 .header').click(function () {
    let tabClicked1 = $(this).data("id");
    $('.tab-menu1 .header').each(function () {
        if ($(this).hasClass("active-header1")) {
            $(this).removeClass("active-header1");
        }
    });
    $(this).addClass("active-header1");
    if (tabClicked1 != prevActiveTabMenu1HeaderDataId) {
        $('.tab-menu1 .content').each(function () {
            if ($(this).data("id") == tabClicked1) {
                $('.tab-menu1 .content').hide();
                $(this).show();
                prevActiveTabMenu1HeaderDataId = $(this).data("id");
            }
        });
    }
});

$('.tab-menu2 .header').click(function () {
    let tabClicked2 = $(this).data("id");
    $('.tab-menu2 .header').each(function () {
        if ($(this).hasClass("active-header1")) {
            $(this).removeClass("active-header1");
        }
    });
    $(this).addClass("active-header1");
    if (tabClicked2 != prevActiveTabMenu2HeaderDataId) {
        $('.tab-menu2 .content').each(function () {
            if ($(this).data("id") == tabClicked2) {
                $('.tab-menu2 .content').hide();
                $(this).show();
                prevActiveTabMenu2HeaderDataId = $(this).data("id");
            }
        });
    }
});

$('.tab-menu3 .header').click(function () {
    let tabClicked3 = $(this).data("id");
    $('.tab-menu3 .header').each(function () {
        if ($(this).hasClass("active-header2")) {
            $(this).removeClass("active-header2");
        }
    });
    $(this).addClass("active-header2");
    if (tabClicked3 != prevActiveTabMenu3HeaderDataId) {
        $('.tab-menu3 .content').each(function () {
            if ($(this).data("id") == tabClicked3) {
                $('.tab-menu3 .content').hide();
                $(this).show();
                prevActiveTabMenu3HeaderDataId = $(this).data("id");
            }
        });
    }
});

$('.tab-menu4 .header').click(function () {
    let tabClicked4 = $(this).data("id");
    $('.tab-menu4 .header').each(function () {
        if ($(this).hasClass("active-header1")) {
            $(this).removeClass("active-header1");
        }
    });
    $(this).addClass("active-header1");
    if (tabClicked4 != prevActiveTabMenu4HeaderDataId) {
        $('.tab-menu4 .content').each(function () {
            if ($(this).data("id") == tabClicked4) {
                $('.tab-menu4 .content').hide();
                $(this).show();
                prevActiveTabMenu4HeaderDataId = $(this).data("id");
            }
        });
    }
});
// tabs end

// orange star

//orange end

});