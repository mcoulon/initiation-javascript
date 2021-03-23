let age = prompt("Quel est votre age?");

if (age >= "16" && age <= "18") {
    document.write("VOus êtes mineurs bla bla blavoiture");
} else if (age < "18") {
    document.write("Vous êtes mineur !");
} else if (age >= 18 && age <= 20) {
    document.write("Majeur en europe");
} else if (age > 20) {
    document.write("Drogue et alcool");
}