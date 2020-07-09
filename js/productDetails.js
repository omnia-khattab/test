
$(document).ready(function(){

$("#loading").fadeOut(3000,function(){
    $("html,body").css("overflow-y","auto");
});

$("#nav-placeholder").load("navbar.html");

$("#contact").load("footer.html");

$(".menu-icons").click(function () {
    $("nav").toggleClass('active');
});
/*nice scroll*/
$(function() {  
    $("body").niceScroll({
    cursoropacitymin: 0,
    cursoropacitymax: 0,    
    });
    
});
/* scroll when i click on a navbar link */
$('.a-link').click(function(){
    let aHref = $(this).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate( { scrollTop: sectionOffset} , 1000);
});

/*naving between products images*/
$(".img-item").click(function(){
    let imgSrc=$(this).attr("src");
    $("#mainImage").attr("src",imgSrc);
});

//change nvabar background color
$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    let halfWindowHeight=($(window).height()/2);
    if(wScroll>halfWindowHeight){
        $(".navbar").css("backgroundColor","rgba(60, 65, 103,0.8)");
    
    }
    else{
        $(".navbar").css("backgroundColor","rgb(60, 65, 103)");

    }
});

let crystal_pages = ['/crystal-compactUnite.html','/crystal-flatLamp.html','/crystal-fountainRing.html',
    '/crystal-fountainSpot.html','/crystal-LedFlexNeuon.html','/crystal-nicheLighting.html',
    '/crystal-pcSpot.html','/crystal-pcLamp.html','/crystal-stainlessteelLamp.html',
    '/crystal-starEffect.html','/crystal-wallmount.html'];

$("#C_next").on('click', function () {
    let currentPage = location.pathname,
    idx = crystal_pages.indexOf(currentPage);
    location.pathname = crystal_pages[ ++idx ] || crystal_pages[0];
});
$("#C_prev").on('click', function () {
    let currentPage = location.pathname,
    idx = crystal_pages.indexOf(currentPage);
        location.pathname = crystal_pages[ --idx ] || crystal_pages[crystal_pages.length -1];
        
    }
);

let shinee_pages=['/shinee-compactUnite.html','/shinee-nicheLighting.html','/shinee-pcSpot.html',
'/shinee-pcLamp.html','/shinee-wallMounted.html']

$('#Sh_next').on('click',function(){
    let currentPage=location.pathname,
    idx=shinee_pages.indexOf(currentPage);
    location.pathname=shinee_pages[++idx]||shinee_pages[0];
});
$('#Sh_prev').on('click',function () {
    let currentPage=location.pathname,
    idx=shinee_pages.indexOf(currentPage);
    location.pathname=shinee_pages[--idx]||shinee_pages[shinee_pages.length -1];
});

/********************Image Modal************/
var lightboxContainer = document.getElementById("lightbox-container");
var lightboxItem  = document.getElementById("lightbox-item");
let MainImage = document.getElementById("mainImage");
let imgList = $(".img-item");
let imgArray = [MainImage];
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let closeBtn = document.getElementById("close");
for(let i=0 ; i <imgList.length ; i++)
{
    imgArray.push(imgList[i]);

    MainImage.addEventListener("click" , function(eventInfo){
        currentSlideIndex=  imgArray.indexOf( eventInfo.target);
        var imgSrc = eventInfo.target.getAttribute('src');
        lightboxContainer.style.display = "flex";
        lightboxItem.style.backgroundImage ="url("+imgSrc+")";
    })
}
function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex==imgArray.length){
        currentSlideIndex=0;
    }
    
    var imgSrc=imgArray[currentSlideIndex].getAttribute('src');
    lightboxItem.style.backgroundImage="url("+imgSrc+")";
}

function prevSlide(){
    currentSlideIndex--;

    if(currentSlideIndex < 0){
        currentSlideIndex = imgArray.length - 1;
    }
    
    var imgSrc=imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage="url("+imgSrc+")";
}
function close(){
    lightboxContainer.style.display = "none";
}

nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
closeBtn.addEventListener("click",close);

document.body.addEventListener("keydown",function(eventInfo){
    if(eventInfo.keyCode==39){
        nextSlide();
    }
    else if(eventInfo.keyCode==37){
        prevSlide();
    }
    else if(eventInfo.keyCode==27){
        close()
    }
})
    
});
