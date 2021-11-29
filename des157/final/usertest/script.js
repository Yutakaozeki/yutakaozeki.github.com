(function(){
    'use strict';
    console.log('reading js');
	
	const tuanPhotos = ["tuan1.jpg", "tuan2.jpg", "tuan4.jpg", "tuan3.jpg"];
	const brianPhotos = ["brian1.jpg", "brian2.jpg", "brian3.jpg"];
	const genPhotos = ["ghom1.jpg", "ghom2.jpg", "ghom3.jpg"];

	const tuantext = document.querySelector('#tuan');    
	const tuan = document.getElementById("tuanImage");
	let currentImage = 0;
	let myInterval;

	const briantext = document.querySelector('#brian');
	const brian = document.getElementById("brianImage");
	let bImage = 0;
	let bInterval;

	const gentext = document.querySelector('#gennifer');
	const gen = document.getElementById("genImage");
	let gImage = 0;
	let gInterval;

	alert("Hello! Please complete the following tasks: 1. Hover over the two names Tuan and Brian. 2. Click on the Brian text once you have hovered it and then close it. 3. Examine the pagination bar on the side of the screen. ");

	tuantext.addEventListener('click', function(event){
		event.target.style.backgroundColor = "red";
		// document.getElementById('tuanImage').className = 'showing';
	})

	function tuanImage(){
		myInterval = setInterval(function(){
			currentImage++;

			if(currentImage > tuanPhotos.length - 1){
				currentImage = 0;
			}
			tuan.src = `images/tuanPic/${tuanPhotos[currentImage]}`;
		}, 150);
	};

	tuantext.addEventListener('mouseout', function(){
		clearInterval(myInterval);
		document.getElementById('tuanImage').className = 'hidden';
	});

	tuantext.addEventListener('mouseover', function(){
		event.preventDefault;
		tuanImage();
		document.getElementById('tuanImage').className = 'showing';
	});

	// tuan.addEventListener('mouseout', function (event){
	// 	event.preventDefault();
	// 	currentImage--;
	// 	if (currentImage <0) {currentImage = tuanPhotos.length - 1}

	briantext.addEventListener('click', function(event){
		event.preventDefault;
		document.getElementById('boverlay').className = 'showing';
		briImage();
		document.getElementById('brianImage').className = 'showing';
	})
	
	document.querySelector('.close').addEventListener('click', function(event){
		event.preventDefault();
		document.getElementById('boverlay').className = 'hidden';
		clearInterval(bInterval);
		document.getElementById('brianImage').className = 'hidden';
		})

	function briImage(){
		bInterval = setInterval(function(){
			bImage++;

			if(bImage > brianPhotos.length - 1){
				bImage = 0;
			}
			brian.src = `images/brianPic/${brianPhotos[bImage]}`;
		}, 150);
	};

	// document.getElementById('brian').addEventListener('mouseout', function(){
	// 	clearInterval(bInterval);
	// 	document.getElementById('brianImage').className = 'hidden';
	// });

	// document.getElementById('brian').addEventListener('mouseover', function(){
	// 	event.preventDefault;
	// 	briImage();
	// 	document.getElementById('brianImage').className = 'showing';
	// });

	gentext.addEventListener('click', function(event){
		event.target.style.backgroundColor = "red";
		// document.getElementById('tuanImage').className = 'showing';
	})

	function genImage(){
		gInterval = setInterval(function(){
			gImage++;

			if(gImage > genPhotos.length - 1){
				gImage = 0;
			}
			gen.src = `images/genniferPic/${genPhotos[gImage]}`;
		}, 150);
	};

	document.getElementById('gennifer').addEventListener('mouseout', function(){
		clearInterval(gInterval);
		document.getElementById('genImage').className = 'hidden';
	});

	document.getElementById('gennifer').addEventListener('mouseover', function(){
		event.preventDefault;
		genImage();
		document.getElementById('genImage').className = 'showing';
	});

 })();
