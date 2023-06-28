$(function(){

    $(".fixed_bar ul").slick({
        autoplay:true,
        autoplaySpeed:3000,
        vertical:true,
        dots:false,
        arrows:false
    })
    //fixed_bar영역
    $(".fixed_bar").hide(0)
    $(".fixed_bar").slideDown();
$(".close").click(function(){
    $(".fixed_bar").slideUp();
})
//메인메뉴영역
$(".main>li").hover(function(){
$(this).find(".sub").stop().slideDown();
},function(){
$(".sub").stop().slideUp();
})
//메인이미지슬라이드

//팝업
$(".p_close, .baro").click(function(){
    $(".popup").hide();
})

    $(".move").slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    arrows:true,
    slidesToShow :3.7,
    slidesToScroll:2,
    breakpoint:768[{
        slidesToShow :1,
    slidesToScroll:1,
    }]
        })

        //fixed nav
        $(".fix_nav").show();
        $(".nav li a, .fix_nav li a").click(function(){
                
            $(".nav li a, .fix_nav li a").removeClass("act")
            $(this).addClass("act")
            
            var number=$(this).parent("li").index()
            console.log(number)
            
            var position=number*700
            $("html, body").stop().animate({scrollTop : position},1000)
            
        })/* a click */
        
    })

    $(window).scroll(function(){
        var top= $(this).scrollTop()
        console.log(top)
        if(top > 80){
            $(".fix_nav").addClass("on")
        }else{
            $(".fix_nav").removeClass("on")
            $(".nav li a, fix_nav li a").removeClass("act")
            $(".nav li").eq(0).find("a").addClass("act")
        }

    $(".cont_new_product ul").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:true,
        slidesToShow:4,
        slidesToScroll:4,

        responsive:[{
            breakpoint:768,
            settings:{
            autoplay:false,
            dots:false,
            arrows:true,
            slidesToShow:3,
            slidesToScroll:2,
            }
        }]

    })
    $(".cont_offline_store ul").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1

    })
    $(".cont_recommend_product ul").slick({
        autoplay:false,
        dots:false,
        arrows:false,
        slidesToShow:4,
        rows:2,
        responsive:[{
            breakpoint:768,
            settings:{
            autoplay:false,
            dots:false,
            arrows:false,
            slidesToShow:3,
            rows:1,
            }
        }]
    })
    $(".cont_review ul").slick({
        autoplay:false,
        dots:false,
        arrows:true,
        slidesToShow:4,
        responsive:[{
            breakpoint:768,
            settings:{
            autoplay:false,
            dots:false,
            arrows:false,
            slidesToShow:3,
            }
        }]
    })
    

})//jq