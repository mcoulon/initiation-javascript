//Demander à l'utilisateur d'introduire une chaine de caractère.
//Envoyer cette chaine de caractère dans un tableau
//Redemander si le user veut entrer un nouvelle donnée dans le tableau
// si user ok, on recommence,
//si user pas ok, on arrête et on affiche en console, le contenu du tableau

// déclarer un tableau 
//let tableau =[]
// Pour envoyer la donnée dans le tableau
//tableau.push(donnée)
//console.log(tableau)

let donnee;
let tableau = [];

function exotablo() {
    donnee = prompt(`Que voulez vous entrer dans le tableau?`);
    tableau.push(donnee);

    if (confirm(`Réentrer une donnée?`)) {
        exotablo();
    } else {
        alert(`Bye!`)
    }
}
exotablo()
console.log(tableau);