
var i = 0; // start point 
var images = [];
var time = 3000;

// image list 
images[0] = './img/foto1.jpg';
images[1] = './img/foto2.jpg';
images[2] = './img/foto3.jpg';

//change image
function changeImg(){
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

}

setInterval('changeImg()', time);

window.onload = changeImg;
