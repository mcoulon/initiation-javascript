let yolo = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

let d = new Date();
let jour = d.getDate();
let mois = d.getMonth() + 1;
if (jour < 10) {
    jour = '0' + jour;
}
if (mois < 10) {
    mois = '0' + mois;
}

function ex2() {
    d = new Date();
    document.write("<p>Nous sommes le " + jour + " " + mois + " " + d.getFullYear() + " </p>");
}

function ex3() {
    let div = document.getElementById("ex3");
    div.innerHTML = "<p>Nous sommes le " + jour + "/" + mois + "/" + d.getFullYear() + " </p>";
}

function ex4() {
    let div = document.getElementById('ex4');
    let p = div.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode("Nous sommes le " + jour + "/" + mois + "/" + d.getFullYear()));
}