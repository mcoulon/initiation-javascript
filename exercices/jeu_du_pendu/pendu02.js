function game() {
    let mots_7 = ["abeille"];

    let mot = "";
    let tableauLettre = [];
    let score = 10;
    let lettreJoueur = "";
    let trouvé = false;
    let reponse = 0;

    function newGame() {
        let hasard = parseInt(Math.random() * (mots_7.length - 0) + 0);
        mot = mots_7[hasard];

        for (i = 0; i < mot.length; i++) {
            tableauLettre[i] = "_"
        }
        choisirLettre();
    }

    function choisirLettre() {
        do {
            lettreJoueur = prompt(`le mot a trouver est ${tableauLettre.join(" ")}
            \nIl vous reste ${score} essais, 
            \nChoisissez votre lettre`);
        } while (lettreJoueur.length > 1 || lettreJoueur == "" || !isNaN(lettreJoueur)) {
            verifierLettres(lettreJoueur);
        }
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
            confirm(`Voulez vous rejouer?`) ? game() : alert(`Au revoir !`)
        } else {
            for (i = 0; i < tableauLettre.length; i++) {
                if (tableauLettre[i] != "_")
                    reponse++;
            }
            if (reponse == mot.length) {
                alert(`Bravo, vous avez gagné, le mot a trouver était bien ${mot}`);
                confirm(`Voulez vous rejouer?`) ? game() : alert(`Au revoir !`)
            } else {
                choisirLettre();
            }
        }
    }

    newGame();

}
game();