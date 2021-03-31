var mots = [
    "bonjour"
]

let maxErreurs = 10;
let erreurs = 0;

var motSecret = mots[Math.floor(Math.random() * mots.length)];

var lettreMotSecret = motSecret;
var tableauReponses = [];
for (var i = 0; i < motSecret.length; i++) {
    tableauReponses[i] = "";
}

var nombrelettresManquantes = motSecret.length;

function pendu() {
    while (nombrelettresManquantes > 0) {


        alert(tableauReponses.join("_ "));

        var reponse = prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.");
        if (reponse === null) {
            erreurs++;
            console.log(erreurs);
            break;
        } else if (reponse.length !== 1) {
            alert("Tu dois saisir qu'une seule lettre.");
        } else if (reponse !== motSecret) {
            erreurs++;
            console.log(erreurs);
        }

        for (var j = 0; j < motSecret.length; j++) {
            if (lettreMotSecret[j] === reponse) {
                if (tableauReponses[j] === "") {
                    tableauReponses[j] = reponse;
                    nombrelettresManquantes--;
                }
            } else if (erreurs === maxErreurs) {
                alert(`Vous avez perdu !`);
                if (confirm(`Souhaitez vous deviner un autre mot?`)) {
                    pendu();
                } else {
                    alert(`Au revoir !`)
                }
            }
        }
    }
}

pendu();

//Terminer la partie
alert(tableauReponses.join("_ "));
alert("Félicitations ! Le mot secret est " + motSecret)
if (nombrelettresManquantes === 0) {
    if (confirm(`Souhaitez vous recommencer?`)) {
        pendu();
    } else
        alert(`Au revoir !`)
}