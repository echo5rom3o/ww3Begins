var endDate = new Date("sep 22, 2018 00:00:00").getTime();
var x = setInterval(function() {

	var current = new Date().getTime();
	var t = endDate - current;
	var days = Math.floor(t/(1000*60*60*24));
	var hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
	var mins = Math.floor((t%(1000*60*60))/(1000*60));
	var secs = Math.floor((t%(1000*60))/1000);
	var final

	document.getElementById("days").innerHTML = days + " Days";
	document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
	document.getElementById("mins").innerHTML = ('0' + mins).slice(-2);
	document.getElementById("secs").innerHTML = ('0' + secs).slice(-2);
	document.getElementById("demo").innerHTML = "WAR IS COMING...";
	document.getElementById("timer-title").innerHTML = "PREPARE YOURSELF";

	if (t<0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "All out war has begun, are you ready?"
		document.getElementById("days").innerHTML = 0;
		document.getElementById("hours").innerHTML = 0;
		document.getElementById("mins").innerHTML = 0;
		document.getElementById("secs").innerHTML = 0;
	}
}, 1000);
