$(document).ready(function(){

$("#loading").fadeOut(3000,function(){
    $("html,body").css("overflow-y","auto");
});

$("#nav-placeholder").load("navbar.html");

$("#contact").load("footer.html");

/*$(function() {  
    $("body").niceScroll({
    cursoropacitymin: 0,
    cursoropacitymax: 0,    
    });
    
    });*/

/*AOS.init({
    once: true,
});*/

$('.carousel').carousel({
    pause:'null',
    interval:4000
});


/*show/hide up  button */
//change nvabar background color
$(window).scroll(function(){
    let ledlightOffset=$("#ledLighting").offset().top;
    let wScroll=$(window).scrollTop();
    if(wScroll>ledlightOffset){
        $("#btnUp").fadeIn(500);
        $(".navbar").css("backgroundColor","rgba(60, 65, 103,0.8)");
    
    }
    else{
        $("#btnUp").fadeOut(500);
        $(".navbar").css("backgroundColor","transparent");

    }
});

/*activate Scroll up/down button */
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:'0'},1000);
});

/*Scroll up/down Animation section underwater Lighting  */
/*let HomeOffset=$("#home").offset().top;
$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if(wScroll>HomeOffset){
        $('#ledLighting h1').fadeIn(3000);
        $('.ledLighting-box-left').css({"-webkit-animation":"fadeInLeft 2s ","animation":"fadeInLeft 2s"});
        $('.ledLighting-box-right').css({"-webkit-animation":"fadeInRight 2s ","animation":"fadeInRight 2s"}); 
        }
});*/

/* scroll when i click on a link */
/*$('.nav-link').click(function(){
    let aHref = $(this).attr('href');
    console.log(aHref);
    let sectionOffset = $(aHref).offset().top;
    console.log(sectionOffset);
    $("html,body").animate( { scrollTop: sectionOffset} , 1000);
});*/

/*////////////////////////**********Form Validation**********////////////////*/
const form=document.getElementById('form');
let inputName=document.getElementById('inputName');
let inputEmail=document.getElementById('inputEmail');
let inputsubject=document.getElementById('inputsubject');
let inputMessage=document.getElementById('inputMessage');
let btnSubmit=document.getElementById('btn-submit');

let nameRgx= /^[a-zA-Z ]{3,30}$/;
let emailRgx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phoneNumbRgx=/^0|[0125][0-9]{8}$/;

form.addEventListener('submit',function(e){
    if(nameRgx.test(inputName.value)==true||emailRgx.test(inputEmail.valu)==false
    ||inputsubject.value !=""||inputMessage.value !=""){

        btnSubmit.classList.remove('disabled');
    }
    else{
        btnSubmit.classList.add('disabled');
    }

});

inputName.addEventListener('keyup',function(e) {
    e.preventDefault();
    const nameValue = inputName.value.trim();
    if(nameValue === '') {
        inputName.classList.remove("is-invalid");
        inputName.classList.remove("is-valid");
        
    }else if(nameRgx.test(nameValue)==false){
        inputName.classList.remove("is-valid");
        inputName.classList.add("is-invalid");
    }
    else {
		inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
	}
});

inputEmail.addEventListener('keyup',function(e) {
    e.preventDefault();
    const emailValue = inputEmail.value.trim();
    if(emailValue === '') {
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.remove("is-valid");
        
    }else if(emailRgx.test(emailValue)==false){
        inputEmail.classList.remove("is-valid");
        inputEmail.classList.add("is-invalid");
    }
    else {
		inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
	}
});



});