// types de données primitifs

let unNombre = 123.45; // number
console.log(unNombre);

let unTexte = 'Bonjour, je suis un texte'; // string
console.log(unTexte);

let unBooleen = true; // boolean
console.log(unBooleen);

let rien = null; // null = aucune valeur
console.log(rien);

let nonDefini; // undefined
console.log(nonDefini);

// type de donnée «reference»
// un objet
let personne = { nom: 'Bretéché', prenom: 'Pierre'};
console.log(personne.prenom);

// un tableau
let fruits = ['ananas', 'banane', 'cerise'];
console.log(fruits[1]);
for (let fruit of fruits) {
    console.log(fruit);
}

// un élément HTML (DOM: Document Object Model)
let titre = document.querySelector('h1');
titre.addEventListener('click', function(){
    console.log(this);
});
