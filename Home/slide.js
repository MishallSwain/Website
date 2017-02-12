var imagecount=1;
var total=5;

function slide1(x){
	var Image = document.getElementById('newpic');
	imagecount =imagecount + x;
	if(imagecount>total){
		imagecount=1;
	}
	if(imagecount<1){
		imagecount=total;
	}
	Image.src = "img"+imagecount+".jpg";
}
function slide2(x){
	var Image = document.getElementById('trenpic');
	imagecount =imagecount + x;
	if(imagecount>total){
		imagecount=1;
	}
	if(imagecount<1){
		imagecount=total;
	}
	Image.src = "img"+imagecount+".jpg";
}
window.setInterval(function slideA(){
	var Image = document.getElementById('newpic');
	imagecount =imagecount + 1;
	if(imagecount>total){
		imagecount=1;
	}
	if(imagecount<1){
		imagecount=total;
	}
	Image.src = "img"+imagecount+".jpg";
},5000);
window.setInterval(function slideB(){
	var Image = document.getElementById('trenpic');
	imagecount =imagecount + 1;
	if(imagecount>total){
		imagecount=1;
	}
	if(imagecount<1){
		imagecount=total;
	}
	Image.src = "img"+imagecount+".jpg";
},5000);