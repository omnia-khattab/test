$(document).ready(function(){

$("#loading").fadeOut(3000,function(){
    $("html,body").css("overflow-y","auto");
});

new WOW().init();

$(function() {  
    $("body").niceScroll({
    cursoropacitymin: 0,
    cursoropacitymax: 0,    
    });
    
});

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

/* scroll when i click on a link */
$('.a-link').click(function(){
    let aHref = $(this).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate( { scrollTop: sectionOffset} , 1000);
    });


/*////////////////////////**********Form Validation**********////////////////*/
const form=document.getElementById('form');
let inputName=document.getElementById('inputName');
let inputEmail=document.getElementById('inputEmail');
let inputsubject=document.getElementById('inputsubject');
let inputMessage=document.getElementById('inputMessage');
let nameError=true;
let emailError=true;
let subjectError=true;
let messageError=true;

let nameRgx= /^[a-zA-Z ]{3,30}$/;
let emailRgx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit',function(e){
    if(nameError==true||emailError==true||subjectError==true||messageError){
        e.preventDefault()
    }

});

inputName.addEventListener('keyup',function(e) {
    e.preventDefault();
    const nameValue = inputName.value.trim();
    if(nameValue === '') {
        inputName.classList.remove("is-invalid");
        inputName.classList.remove("is-valid");
        nameError=true;
        
    }else if(nameRgx.test(nameValue)==false){
        inputName.classList.remove("is-valid");
        inputName.classList.add("is-invalid");
        nameError=true;
    }
    else {
		inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
        nameError=false;
	}
});

inputEmail.addEventListener('keyup',function(e) {
    e.preventDefault();
    const emailValue = inputEmail.value.trim();
    if(emailValue === '') {
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.remove("is-valid");
        emailError=true;
        
    }else if(emailRgx.test(emailValue)==false){
        inputEmail.classList.remove("is-valid");
        inputEmail.classList.add("is-invalid");
        emailError=true;
    }
    else {
		inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
        emailError=false
	}
});

inputsubject.addEventListener('keyup',function(e) {
    e.preventDefault();
    const subjectValue = inputsubject.value.trim();
    if(subjectValue === '') {
        inputsubject.classList.remove("is-invalid");
        inputsubject.classList.remove("is-valid");
        subjectError=true;
        
    }else if(nameRgx.test(subjectValue)==false){
        inputsubject.classList.remove("is-valid");
        inputsubject.classList.add("is-invalid");
        subjectError=true;
    }
    else {
		inputsubject.classList.add("is-valid");
        inputsubject.classList.remove("is-invalid");
        subjectError=false;
	}
});

inputMessage.addEventListener('keyup',function(e) {
    e.preventDefault();
    const messageValue = inputMessage.value.trim();
    if(messageValue === '') {
        inputMessage.classList.remove("is-invalid");
        inputMessage.classList.remove("is-valid");
        messageError=true;
    }
    else {
		inputMessage.classList.add("is-valid");
        inputMessage.classList.remove("is-invalid");
        messageError=false;
	}
});


});