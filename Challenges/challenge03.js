let nom = "";
let prenom = "";


while (nom == "" || nom == null || prenom == "" || prenom == null) {
    nom = prompt("Quel est ton nom?");
    prenom = prompt("Quel est ton prenom?");
};

document.write(`Super tu t'appelles ${nom} ${prenom}`);