
    
 
var i = 0;
var txt = " Mujahid Salie";
var speed =200;

function typeWriter() {
  if (i < txt.length) {
  	// var text = document.getElementById("demo");
  	var name = document.getElementById("fullname");


    name.innerHTML += txt.charAt(i);
    i++;
    name.style.color = "black";

    setTimeout(typeWriter, speed);
  }
}


setInterval(()=> {
	typeWriter();
}, 1500)



$(document).ready(function() {
        $("#slide").click(function() {
            $("#panel").slideToggle("s");
        });
    });


