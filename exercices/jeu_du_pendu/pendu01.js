// LES VARIABLES DU JEU

let mot = "bonjour";
let tableauLettre = ['_', '_', '_', '_', '_', '_', '_'];
let score = 10;
let lettreJoueur = "";
let trouvé = false;

function choisirLettre() {
    lettreJoueur = prompt(`le mot a trouver est ${tableauLettre.join(" ")}
    \nIl vous reste ${score} essais, 
    \nChoisissez votre lettre`);
    verifierLettres(lettreJoueur);
}

function verifierLettres(x) {

    for (i = 0; i <= 6; i++) {
        if (mot[i] == x) {
            trouvé = true;
            tableauLettre[i] = x;
        }
    }
    if (trouvé == false) {
        score--;
    }
    checkTableau();
}

function checkTableau() {
    console.log(`j'entre dans check`)
    trouvé = false;
    if (score == 0) {
        alert(`vous avez perdu, le mot à trouver était ${mot}`);
    } else {
        let reponse = 0;
        for (i = 0; i < tableauLettre.length; i++) {
            if (tableauLettre[i] != "_")
                reponse++;
        }
        if (reponse == mot.length) {
            alert(`Bravo, vous avez gagné, le mot a trouver était bien ${mot}`);
        } else {
            choisirLettre();
        }
    }
}

choisirLettre();

// for (i = 0; i <= 6; i++) {
//     console.log(mot[i]);
//     console.log(tableauLettre[i]);
//     if (mot[i] === lettreJoueur) {
//         tableauLettre[i] = lettreJoueur;
//     }
//     console.log(tableauLettre);
// }