// Ajout des images et textes du carrousel au bon endroit dans le HTML //

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let banner=document.querySelector(".banner-img");
let title=document.querySelector('#banner p')

// Ajout d'un event listener sur chacune des flèches du carrousel et changement de l'image au clic gauche/droit //

let position=0
const minPosition=0
const maxPosition=slides.length-1

let flecheGaucheCarrousel = document.querySelector(".arrow_left");
		flecheGaucheCarrousel.addEventListener("click", function(){
			console.log("Clic sur la flèche gauche")
			if (position <= minPosition){
				position=maxPosition
			}else{
				position=position-1
			}
			changerSlide(position)
		}
		);

let flecheDroiteCarrousel = document.querySelector(".arrow_right");
		flecheDroiteCarrousel.addEventListener("click", function(){
			console.log("Clic sur la flèche droite")
			if (position >= maxPosition){
				position=minPosition
			}else{
				position=position+1
			}
			changerSlide(position)
		}
		);

// Ajout des bullets en bas du carrousel //

let nombreTotalDots = document.querySelector(".dots");
slides.forEach((value, index) => {
	let div=document.createElement("div")
	div.classList.add("dot")
	if (index==0){
		div.classList.add ("dot_selected")
	}
	nombreTotalDots.append(div)
});

// Changement de l'image/du texte/du bullet sélectionné //


function changerSlide(position){
	const dotsSlide=document.querySelectorAll(".dot")
	const dotSelected=document.querySelector(".dot_selected")
	const elementNext=slides[position]
	console.log("./assets/images/slideshow/" + elementNext.image)
	let image="./assets/images/slideshow/" + elementNext.image
	console.log(position)
	banner.setAttribute("src",image)
	title.innerHTML=elementNext.tagLine
	dotSelected.classList.remove("dot_selected")
	dotsSlide[position].classList.add("dot_selected")
}