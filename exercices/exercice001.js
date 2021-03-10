let nom = prompt("Quel est votre nom?")
let prenom = prompt("Quel est votre prénom?")
let age = prompt("Quel est votre âge?")
let adresse = prompt("Quel est votre adresse?")
let cp = prompt("Quel est votre code postal?")
let ville = prompt("Dans quelle ville habitez vous?")
let taille = prompt("Quel est votre taille?")
let poids = prompt("Quel est votre poids?")
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
    tgros.appendChild(document.createTextNode(`Indice de masse corporelle : ${resultat}`));
    return
}

imc();