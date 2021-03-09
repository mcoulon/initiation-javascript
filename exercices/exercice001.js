let nom = prompt("nom")
let prenom = prompt("prenom")
let age = prompt("age")
let adresse = prompt("adresse")
let cp = prompt("cp")
let ville = prompt("ville")
let taille = prompt("taille")
let poids = prompt("poids")
let resultat = Math.round(poids / taille ** 2);

function imc() {
    let div = document.getElementById("container");
    let p = div.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode(`Nom : ${nom} Prénom : ${prenom}`));
    let habitation = div.appendChild(document.createElement("p"));
    habitation.appendChild(document.createTextNode(`Adresse :${adresse}`));
    let habitation2 = div.appendChild(document.createElement("p"));
    habitation2.appendChild(document.createTextNode(`Code Postal : ${cp} - ${ville}`));
    let mesures = div.appendChild(document.createElement("p"));
    mesures.appendChild(document.createTextNode(`Age :${age} -  Taille :${taille} + Poids :${poids}`));
    let tgros = div.appendChild(document.createElement("p"));
    tgros.appendChild(document.createTextNode(`${resultat}`));
    return
}

imc();