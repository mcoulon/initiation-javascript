// do {
//     nombre1 = parseInt(window.prompt("Choisissez votre premier nombre"));
//     nombre2 = parseInt(window.prompt("Choisissez votre deuxième nombre"));
// } while (isNaN(nombre1) == Number);
// while (isNaN(nombre2) == Number);

// try {
//     let operation = prompt('Choisissez une opération: addition, multiplication, division, soustraction ?');
//     let resultat
//     switch (operation) {
//         case 'addition':
//             resultat = nombre1 + nombre2;
//             break;
//         case 'soustraction':
//             resultat = nombre1 - nombre2;
//             break;
//         case 'multiplication':
//             resultat = nombre1 * nombre2;
//             break;
//         case 'division':
//             resultat = nombre1 / nombre2;
//             break;
//         default:
//             throw new Error(`l'opération choisie n'est pas bonne !`);
//     }
//     alert('Votre résultat est : ' + resultat);
// } catch (e) {
//     alert(e);
// };

let nombre1;
let nombre2;
let operation = null;
let resultat;

function calcul(nombre1, nombre2) {
    operation = document.getElementById("choix");
    nombre1 = parseInt(window.prompt("Choisissez votre premier nombre"));
    nombre2 = parseInt(window.prompt("Choisissez votre deuxième nombre"));
    if (operation === "1") return nombre1 + nombre2;
    if (operation === "2") return nombre1 - nombre2;
    if (operation === "3") return nombre1 * nombre2;
    if (operation === "4") return nombre1 / nombre2;
}


alert(`${nombre1} + ${nombre2} = ${resultat}`);