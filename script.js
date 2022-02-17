// ---------------------------------------------------------------------------------------
// Timer credits: W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Feb 18, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = hours + " : "
    + minutes + " : " + seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
//--------------------------------------------------------------------------------------------

// cursor change
let mousecursor = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
    mousecursor.style.top = e.pageY + 'px';
    mousecursor.style.left = e.pageX + 'px';
}          
//---------------------------------------------------

// change background color on click
function changeColor(color) {
    document.body.style.background = color;
}
let i=0;
function changecol() {
    if (i%2==0){
        changeColor('#ffdb58');
        i+=1;
    }
    else{
        changeColor('#e2e1dd');
        i+=1;
    }
}
//-----------------------------------------------------
