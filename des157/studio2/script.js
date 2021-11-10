(function(){
    'use strict';
    console.log('reading js');
	const myphotos = ["img1.jpg", "img2.jpg", "img3.jpg"];
	const brianPhotos = ["brian1.jpg", "brian2.jpg", "brian3.jpg", "brian4.jpg"];
	const tuanPhotos = ["tuan1.jpg", "tuan2.jpg", "tuan3.jpg"];

	// const container = document.getElementById('content');
	// const nextBtn = document.getElementById('next');
	// const prevBtn = document.getElementById('previous');
	// const over = document.getElementById("true");
	// const hi = document.getElementById("try");

	const brian = document.getElementById("brianImage");
	let bImage = 0;
	let bInterval;

	const tuan = document.getElementById("tuanImage");
	let currentImage = 0;
	let myInterval;

	function swapImage(){
		myInterval = setInterval(function(){
			currentImage++;

			if(currentImage > tuanPhotos.length - 1){
				currentImage = 0;
			}
			tuan.src = `images/tuanPic/${tuanPhotos[currentImage]}`;
		}, 300);
	};

	document.getElementById('tuan').addEventListener('mouseout', function(){
		clearInterval(myInterval);
		console.log("mouseover tuanImage");
	});

	document.getElementById('tuan').addEventListener('mouseover', function(){
		swapImage();
	});


	function briImage(){
		bInterval = setInterval(function(){
			bImage++;

			if(bImage > brianPhotos.length - 1){
				bImage = 0;
			}
			brian.src = `images/brianPic/${brianPhotos[bImage]}`;
		}, 300);
	};

	document.getElementById('brian').addEventListener('mouseout', function(){
		clearInterval(bInterval);
		console.log("mouseover brianImage");
	});

	document.getElementById('brian').addEventListener('mouseover', function(){
		briImage();
	});
	// const myVar = setInterval(setColor, 500);
	// const loopT = setInterval(rotateT, 300);

	// function repeatWhileMouseOver(element, action, time){
	// 	var interval = null;
	// 	element.addEventListener('mouseover', function(){
	// 		interval = setInterval (action, time);
	// 		currentImage++;
	// 		if (currentImage > (tuanPhotos.length - 1)) {currentImage = 0; }
	// 	});
	// 	element.addEventListener('mouseout', function(){
	// 		clearInterval(interval);
	// 	})
	// }

	// var counter = 1;
	// function count(){
	// 	console.log(counter++);
	// }
	// repeatWhileMouseOver(document.getElementById('name'), swapImage, 500);
		// tuan.addEventListener("mouseover", function(event){
		// 	event.preventDefault();
		// 	// for (i=0;i<tuanPhotos.length;i++)
		// 	currentImage++;
		// 	if (currentImage > (tuanPhotos.length - 1)) {currentImage = 0; }

		// 	swapImage();
		// 	});
	// tuan.addEventListener('mouseout', function (event){
	// 	event.preventDefault();
	// 	currentImage--;
	// 	if (currentImage <0) {currentImage = tuanPhotos.length - 1}
		
	// 	swapImage();
	// 	});

	// function swapImage(){
	// 	const newSlide = document.createElement('img');
	// 	newSlide.src = `images/tuanPic/${tuanPhotos[currentImage]}`;
	// 	newSlide.className = "fadeinimg";
	// 	container.appendChild(newSlide);
	
	// 	if (container.children.length > 2) {
	// 		container.removeChild(container.children[0]);
	// 	}
	// }
	// function setColor() {
	// 	var x = document.body;
	// 	x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
	//   }
	   
	// over.addEventListener("click", function (event){
	// 	clearInterval(myVar);
	//   });

	// over.addEventListener("mouseout", function(event){
	// 	clearInterval(myVar);
	// })
	// function setColor(){
	// 	var x = document.body;
	// 	x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
	// }

	// over.addEventListener("mouseover", function(event){
	// 	clearInterval(myVar);
	// })

	// over.addEventListener("mouseover", function(event){
	// 	event.target.style.color = "orange";

	// 	setTimeout(function(){
	// 		event.target.style.color = "";
	// 	}, 500);
	// });

	// over.addEventListener("mouseout", function(event){

	// })
	// nextBtn.addEventListener('mouseover', function (event){
	// 	event.preventDefault();
	// 	currentImage++;
	// 	if (currentImage > (tuanPhotos.length - 1)) {currentImage = 0; }

	// 	swapImage();
	// });

	// prevBtn.addEventListener('click', function (event){
			
	// 	event.preventDefault();
	// 		currentImage--;
	// 		if (currentImage <0) {currentImage = tuanPhotos.length - 1}
		
	// 	swapImage();
	// })

 })();
// favorite memory of each picture
// bio of each person
// 