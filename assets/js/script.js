// Tableaux pour phrases classiques 
const preposition = [
	"Bien que", 
	"Malgré le fait que", 
	"Nonobstant le fait que", 
	"En considérant que", 
	"En prenant en compte le fait que"
];

const sujet = [
	"John-David", 
	"Yoann", 
	"ma mère", 
	"le Pape", 
	"Kim-Jong-Un", 
	"Trump", 
	"Cyril Hanouna", 
	"Batman", 
	"Monsieur Propre", 
	"Mario", 
	"Luigi"
];

const verbe1 = [
	"mange", 
	"boit", 
	"tue", 
	"achète", 
	"commande", 
	"range", 
	"absout", 
	"évalue", 
	"dresse", 
	"découvre"
];

const complement = [
	"un chien,", 
	"une voiture,", 
	"notre planète,", 
	"l'univers tout entier,", 
	"les pierres,",
	"un clafoutis,",
	"un cactus,",
	"le Joker,",
	"la mer,", 
	"Wario,"
];

const verbe2 = [
	"j'admets réfléchir à", 
	"je considère", 
	"j'envisage", 
	"je pense que cela necessitera", 
	"je conclue qu'il faudra"
];

const complement2 = [
	"devoir m'incliner sur ce coup", 
	"une réelle rédemption de sa part", 
	"une partie remise", 
	"une sacré remontada"
];




// Tableaux pour phrases Star Wars
const sujetSw = [
	"Luke", 
	"Leïa", 
	"Dark Vador", 
	"Yoda", 
	"Obi-wan Kenobi", 
	"Padmé", 
	"Dark Maul", 
	"Palpatine", 
	"Han Solo", 
	"Mace Windu", 
	"Bobba Fett"
];

const verbeSw = [
	"tue", 
	"térasse", 
	"anihile", 
	"éxécute", 
	"assassine", 
	"éradique", 
	"supprime"
];

const complementSw = [
	"un wookie", 
	"un ewok", 
	"un stormtrooper", 
	"Sébulba", 
	"Jar-Jar Binks", 
	"un bantha", 
	"Jabba-Le-Hutt"
];

const complement2Sw = [
	"et s'en enorgueillit", 
	"et le regrette amèrement", 
	"et a pris du plaisir à le faire", 
	"et pleure dans un coin", 
	"et aurait souhaité continuer"
];

let citation = document.getElementById('citation');
let classique = document.getElementById('classique'); // fichier CSS "classique"
let starwars = document.getElementById('starwars'); // fichier CSS "star-wars"



	
// Fonction qui choisi un élément du tableau au hasard en générant un entier entre 0 et la longueur du tableau.
function phraseRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)]; 
}




/* Fonction qui génère une ou plusieurs phrases aléatoirement à partir des tableaux du mode "Classique"
(ne pas utiliser += avec innerHTML car trop gourmand) */
function genererPhraseClassique() {

	let valeur = document.querySelector('input[name=contact]:checked').value;
	let textClassique = "";

	for (var i = 0; i < valeur; i++) {
		textClassique += phraseRandom(preposition) + " " + phraseRandom(sujet) + " " + phraseRandom(verbe1) + " " + phraseRandom(complement) + " " + phraseRandom(verbe2) + " " + phraseRandom(complement2) + " !</br></br>";
	}

	citation.innerHTML = textClassique;

}




/* Fonction qui génère une ou plusieurs phrases aléatoirement à partir des tableaux du mode "Star-Wars"
(ne pas utiliser += avec innerHTML car trop gourmand) */
function genererPhraseSW() {

	let valeur = document.querySelector('input[name=contact]:checked').value;
	let textStarWars = "";

	for (var i = 0; i < valeur; i++) {
		textStarWars += phraseRandom(sujetSw) + " " + phraseRandom(verbeSw) + " " + phraseRandom(complementSw) + " " + phraseRandom(complement2Sw) + " !</br></br>";
	}

	citation.innerHTML = textStarWars;

}




// Fonction qui va chercher la valeur du bouton radio selectionné. ex : si bouton radio "3" sélectionné, alors la fonction retourne 3.
function getValueRadio() {
	return document.querySelector('input[name=contact]:checked').value;
}




// Fonction qui affiche le bouton "Quitter" dans le html.
function afficherBoutonQuitter(){
	document.getElementById("quitter").innerHTML += '<a onclick="" id="bouton-red" class="bouton" href="index.html">QUITTER</a>';
}




// Fonction qui efface le bouton "Quitter" dans le html.
function effacerBoutonQuitter(){
	document.getElementById("quitter").innerHTML = '';
}




// Fonction qui va afficher les différentes phrases dans la div citation du html.
function afficherPhrase() {
	citation.innerHTML = "";

	effacerBoutonQuitter();

	if (classique.checked) {
		genererPhraseClassique();
	} else { 
		genererPhraseSW();
	}

	afficherBoutonQuitter();
}




// Evénement : quand le bouton radio "star wars" est coché, sw.css devient la feuille de style du document
starwars.addEventListener("click", function styleSw(event) {

	let stylesheet = document.getElementById("stylesheet");

	event.stopPropagation();

	citation.innerHTML = "En cliquant sur le bouton ci-dessous, tu entreras dans les méandres de la phrase bizarre...";

	stylesheet.setAttribute("href", "assets/css/sw.css");
});




// Evénement : quand le bouton radio "classique" est coché, style.css devient la feuille de style du document
classique.addEventListener("click", function styleClassique(event) {

	let stylesheet = document.getElementById("stylesheet");
	
	event.stopPropagation();

	citation.innerHTML = "En cliquant sur le bouton ci-dessous, tu entreras dans les méandres de la phrase bizarre...";

	stylesheet.setAttribute("href", "assets/css/style.css");
});
