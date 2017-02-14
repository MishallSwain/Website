var imagecount1=1;
var total=5;
var imagecount2=2;

function slide1(x){
	var Image1 = document.getElementById('newpic1');
	var Image2 = document.getElementById('newpic2');
	imagecount1 =imagecount1 + x;
	if(imagecount1>total){
		imagecount1=1;
	}
	else if(imagecount1<1){
		imagecount1=total;
	}
	Image1.src = "img"+imagecount1+".jpg";
	Image2.src = "img"+((imagecount1%5)+1)+".jpg";
}
function slide2(x){
	var Image1 = document.getElementById('trenpic1');
	var Image2 = document.getElementById('trenpic2');
	imagecount2 =imagecount2 + x;
	if(imagecount2>total){
		imagecount2=1;
	}
	else if(imagecount2<1){
		imagecount2=total;
	}
	Image1.src = "img"+imagecount2+".jpg";
	Image2.src = "img"+((imagecount2%5)+1)+".jpg";
}
window.setInterval(function slideA(){
	var Image1 = document.getElementById('newpic1');
	var Image2 = document.getElementById('newpic2');
	imagecount1 =imagecount1 + 1;
	if(imagecount1>total){
		imagecount1=1;
	}
	else if(imagecount1<1){
		imagecount1=total;
	}
	Image1.src = "img"+imagecount1+".jpg";
	Image2.src = "img"+((imagecount1%5)+1)+".jpg";
},5000);
window.setInterval(function slideB(){
	var Image1 = document.getElementById('trenpic1');
	var Image2 = document.getElementById('trenpic2');
	imagecount2 =imagecount2 + 1;
	if(imagecount2>total){
		imagecount2=1;
	}
	else if(imagecount2<1){
		imagecount2=total;
	}
	Image1.src = "img"+imagecount2+".jpg";
	Image2.src = "img"+((imagecount2%5)+1)+".jpg";
},5000);