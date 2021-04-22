let bye = document.querySelector('#a-supprimer');
bye.remove();

let header = document.createElement('header');
header.innerHTML = "<h1>Bienvenue</h1>";
header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.display = "Flex";
header.style.justifyContent = "center"
document.body.append(header);

let ssheader = document.createElement(`div`);
ssheader.innerHTML = "<a href=\"#\">Acceuil</a> / <a href=\"#\">Une autre page</a>"
ssheader.style.backgroundColor = '#f1d6ab';
document.body.append(ssheader);

let paragraphe = document.createElement('p');
paragraphe.innerHTML = "<p>Ceci est un paragraphe créé en Javascript !</p>";
document.body.append(paragraphe);