const nowDate = new Date() ;

if ( nowDate.getHours() < 12 ) {
	document.getElementById('greetings').innerHTML = "Good Morning, " ;
} else if ( nowDate.getHours() >= 12 && nowDate.getHours() <= 15 ) {
	document.getElementById('greetings').innerHTML = "Good Afternoon, " ;
} else {
	document.getElementById('greetings').innerHTML = "Good Evening, " ;
}
let day ;
switch( nowDate.getDay() ) {
	case 0 :
		day = "Sunday," ;
	break ;
	case 1 :
		day = "Monday," ;
	break ;
	case 2 :
		day = "Tuesday," ;
	break ;
	case 3 :
		day = "Wednesday," ;
	break ;
	case 4 :
		day = "Thursday, " ;
	break ;
	case 5 :
		day = "Friday," ;
	break ;
	case 6 :
		day = "Saturday," ;
	break ;	
}
document.getElementById('dayNote').innerHTML = day ;

function currenttime() {
  let myTimer = new Date() ;
  // document.getElementById('timee').innerHTML = "The current time is " + myTimer.toLocaleTimeString() + " EAT" ;
  document.getElementById('timee').innerHTML = myTimer.toLocaleTimeString() ;
}
let abc = setInterval(currenttime, 1000) ;


let header = document.querySelector(".header") ;
// header.style.border = "2px solid red" ;
header.style.height = "50px" ;
header.style.textAlign = "center" ;
header.style.padding = "10px"