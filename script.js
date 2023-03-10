const ham=document.getElementById("navHamburger");
const navList=document.getElementById('navList');
const blackBack=document.getElementById('black-back');
console.log(ham);
let isContentVisible = false;
ham.addEventListener("click", function(){
	if(isContentVisible){
		navList.style.display = 'flex'; 
		blackBack.style.display = 'flex';
		isContentVisible = false;
	}else{
		navList.style.display = 'none'; 
		blackBack.style.display = 'none';
		isContentVisible = true;
	}

});
function toggleDisplay() {
  if (window.innerWidth >= 800) { // Check if screen size is greater than or equal to 768px
    blackBack.style.display = "none";
    if(isContentVisible)
    navList.style.display = 'flex';  // Hide the element
  }
}

// Call the function on window load and on window resize
window.addEventListener("load", toggleDisplay);
window.addEventListener("resize", toggleDisplay);

