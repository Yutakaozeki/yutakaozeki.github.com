(function(){
    'use strict';
    console.log('reading js');
	
	
	const brianPhotos = ["brian1.jpg", "brian2.jpg", "brian3.jpg"];
	const fionaPhotos = ["fiona1.jpg", "fiona2.jpg", "fiona3.jpg"];
	const genPhotos = ["ghom1.jpg", "ghom2.jpg", "ghom3.jpg"];
	const kevinPhotos = ["kevin1.jpg", "kevin2.jpg", "kevin3.jpg"];
	const stevenPhotos = ["steven1.jpg", "steven2.jpg", "steven3.jpg"];
	const tuanPhotos = ["tuan1.jpg", "tuan2.jpg", "tuan3.jpg"];
	const wislamPhotos = ["wislam1.jpg", "wislam2.jpg", "wislam3.jpg"];

	const briantext = document.querySelector('#brian');
	const brian = document.getElementById("brianImage");
	let bImage = 0;
	let bInterval;

	const fionatext = document.querySelector('#fiona');
	const fiona = document.getElementById("fionaImage");
	let fImage = 0;
	let fInterval;

	const gentext = document.querySelector('#gennifer');
	const gen = document.getElementById("genImage");
	let gImage = 0;
	let gInterval;

	const kevintext = document.querySelector('#kevin');    
	const kevin = document.getElementById("kevinImage");
	let kImage = 0;
	let kInterval;

	const steventext = document.querySelector('#steven');
	const steven = document.getElementById("stevenImage");
	let sImage = 0;
	let sInterval;
	
	const tuantext = document.querySelector('#tuan');    
	const tuan = document.getElementById("tuanImage");
	let tImage = 0;
	let tInterval;

	const wislamtext = document.querySelector('#wislam');    
	const wislam = document.getElementById("wislamImage");
	let wImage = 0;
	let wInterval;

	// brian instructions
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
		}, 3000);
	};

	// fiona instructions
	fionatext.addEventListener('click', function(event){
		event.preventDefault;
		document.getElementById('foverlay').className = 'showing';
		fioImage();
		document.getElementById('fionaImage').className = 'showing';
	})
	
	document.querySelector('.close').addEventListener('click', function(event){
		event.preventDefault();
		document.getElementById('foverlay').className = 'hidden';
		clearInterval(fInterval);
		document.getElementById('fionaImage').className = 'hidden';
		})

	function fioImage(){
		fInterval = setInterval(function(){
			fImage++;

			if(fImage > fionaPhotos.length - 1){
				fImage = 0;
			}
			fiona.src = `images/fionaPic/${fionaPhotos[fImage]}`;
		}, 3000);
	};

	// gennifer instructions
	gentext.addEventListener('click', function(event){
		event.preventDefault;
		document.getElementById('goverlay').className = 'showing';
		genImage();
		document.getElementById('genImage').className = 'showing';
	})
	
	document.querySelector('.close').addEventListener('click', function(event){
		event.preventDefault();
		document.getElementById('goverlay').className = 'hidden';
		clearInterval(gInterval);
		document.getElementById('genImage').className = 'hidden';
		})

	function genImage(){
		gInterval = setInterval(function(){
			gImage++;

			if(gImage > genPhotos.length - 1){
				gImage = 0;
			}
			gen.src = `images/genniferPic/${genPhotos[gImage]}`;
		}, 3000);
	};

// kevin instructions
kevintext.addEventListener('click', function(event){
	event.preventDefault;
	document.getElementById('koverlay').className = 'showing';
	kevImage();
	document.getElementById('kevinImage').className = 'showing';
})

document.querySelector('.close').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('koverlay').className = 'hidden';
	clearInterval(kInterval);
	document.getElementById('kevinImage').className = 'hidden';
	})

function kevImage(){
	kInterval = setInterval(function(){
		kImage++;

		if(kImage > kevinPhotos.length - 1){
			kImage = 0;
		}
		kevin.src = `images/kevinPic/${kevinPhotos[kImage]}`;
	}, 3000);
};

// steven instructions
steventext.addEventListener('click', function(event){
	event.preventDefault;
	document.getElementById('soverlay').className = 'showing';
	steImage();
	document.getElementById('stevenImage').className = 'showing';
})

document.querySelector('.close').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('soverlay').className = 'hidden';
	clearInterval(sInterval);
	document.getElementById('stevenImage').className = 'hidden';
	})

function steImage(){
	sInterval = setInterval(function(){
		sImage++;

		if(sImage > stevenPhotos.length - 1){
			sImage = 0;
		}
		steven.src = `images/stevenPic/${stevenPhotos[sImage]}`;
	}, 3000);
};

// tuan instructions
tuantext.addEventListener('click', function(event){
	event.preventDefault;
	document.getElementById('toverlay').className = 'showing';
	tuaImage();
	document.getElementById('tuanImage').className = 'showing';
})

document.querySelector('.close').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('toverlay').className = 'hidden';
	clearInterval(tInterval);
	document.getElementById('tuanImage').className = 'hidden';
	})

function tuaImage(){
	tInterval = setInterval(function(){
		tImage++;

		if(tImage > tuanPhotos.length - 1){
			tImage = 0;
		}
		tuan.src = `images/tuanPic/${tuanPhotos[tImage]}`;
	}, 3000);
};

// wislam instructions
wislamtext.addEventListener('click', function(event){
	event.preventDefault;
	document.getElementById('woverlay').className = 'showing';
	wisImage();
	document.getElementById('wislamImage').className = 'showing';
})

document.querySelector('.close').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('woverlay').className = 'hidden';
	clearInterval(wInterval);
	document.getElementById('wislamImage').className = 'hidden';
	})

function wisImage(){
	wInterval = setInterval(function(){
		wImage++;

		if(wImage > wislamPhotos.length - 1){
			wImage = 0;
		}
		wislam.src = `images/wislamPic/${wislamPhotos[wImage]}`;
	}, 3000);
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

	// gentext.addEventListener('click', function(event){
	// 	event.target.style.backgroundColor = "red";
	// 	// document.getElementById('tuanImage').className = 'showing';
	// })

	// function genImage(){
	// 	gInterval = setInterval(function(){
	// 		gImage++;

	// 		if(gImage > genPhotos.length - 1){
	// 			gImage = 0;
	// 		}
	// 		gen.src = `images/genniferPic/${genPhotos[gImage]}`;
	// 	}, 150);
	// };

	// document.getElementById('gennifer').addEventListener('mouseout', function(){
	// 	clearInterval(gInterval);
	// 	document.getElementById('genImage').className = 'hidden';
	// });

	// document.getElementById('gennifer').addEventListener('mouseover', function(){
	// 	event.preventDefault;
	// 	genImage();
	// 	document.getElementById('genImage').className = 'showing';
	// });

 })();
