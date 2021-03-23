let mot = "bonjour";
let entreeUser = "o";
let lettresTrouvees = [];

for (i = 0; i <= (mot.length - 1); i++) {
    lettresTrouvees.push('_');
}

for (i = 0; i <= (mot.length - 1); i++) {
    console.log(mot[i]);
    if (entreeUser === mot[i]) {
        lettresTrouvees[i] = entreeUser;
    }
}