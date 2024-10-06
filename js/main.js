let isMenuOpen = false; 


$("#target, #close").on("click", function() {
    if (!isMenuOpen) {
   
        $("#menu").animate({ width: '20%' }, 800);
        $("#target").animate({ left: '21%' }, 800); 
        isMenuOpen = true; 
    } else {
       
        $("#menu").animate({ width: '0%' }, 800);
        $("#target").animate({ left: '0%' }, 800); 
        isMenuOpen = false; 
    }
});


$("#t1,#t2,#t3,#t4").slideUp(0)

$("#h1").on("click",function(){
    $("#t1").slideToggle(500)
    $("#t2,#t3,#t4").slideUp(500)

})
$("#h2").on("click",function(){
    $("#t2").slideToggle(500)
    $("#t1,#t3,#t4").slideUp(500)

})
$("#h3").on("click",function(){
    $("#t3").slideToggle(500)
    $("#t2,#t1,#t4").slideUp(500)

})
$("#h4").on("click",function(){
    $("#t4").slideToggle(500)
    $("#t2,#t3,#t1").slideUp(500)

})
var countDownDate = new Date("Oct 12, 2024 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.day').textContent = days.toString().padStart(2, '0') + " Days ";
    document.querySelector('.hour').textContent = hours.toString().padStart(2, '0') + " Hours ";
    document.querySelector('.minute').textContent = minutes.toString().padStart(2, '0') + " Minutes ";
    document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0') + " Seconds ";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector('.day').textContent = '00 Days';
        document.querySelector('.hour').textContent = '00 Hours';
        document.querySelector('.minute').textContent = '00 Minutes';
        document.querySelector('.seconds').textContent = '00 Seconds';
    }
}, 1000);

const textarea = document.getElementById('message');
const charCountDisplay = document.getElementById('charCount');

textarea.addEventListener('input', function() {
    const maxLength = 100;
    const currentLength = textarea.value.length;
    const remainingChars = maxLength - currentLength;

    charCountDisplay.textContent = remainingChars + " characters left";
});
