let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let position = monTexte.indexOf("i");
document.getElementById("position").innerHTML = position;

let myVar = monTexte.toUpperCase();
document.getElementById("chaineMaj").innerHTML = myVar;

for (i = 0; i <monTexte.length; i++) {
        if (monTexte.includes("a")) {
            alert("lettre a trouvée")
        }
}





