$(document).ready(function(){

    $("#loading").fadeOut(3000,function(){
        $("html,body").css("overflow-y","auto");
    });

    $("#nav-placeholder").load("navbar.html");

    $("#contact").load("footer.html");


    /* product boxs FadeIn animation */
    $('.product').fadeIn(6000);


    $(".menu-icons").click(function () {
        $("nav").toggleClass('active');
    });

    /* scroll when i click on a link */
    /*$("nav-link").click(function(){
        let aHref=$(this).attr("href");
        console.log(aHref);
        let sectionOffset=$(aHref).offset().top;
        console.log(sectionOffset);
        $("html,body").animate({scrollTop:sectionOffset},1000);
    });*/


    /*Scroll up/down Animation button */
    $(window).scroll(function(){
        let wScroll=$(window).scrollTop();
        let halfWindowHeight=($(window).height()/2);
        if(wScroll>halfWindowHeight){
            $("#btnUp").fadeIn(500);
            $(".navbar").css("backgroundColor","rgba(60, 65, 103,0.8)");
        
        }
        else{
            $("#btnUp").fadeOut(500);
            $(".navbar").css("backgroundColor","rgb(60, 65, 103)");

        }
    });

    /*activate Scroll up/down button */
    $("#btnUp").click(function(){
        $("html,body").animate({scrollTop:'0'},1000);
    });

    
});