



let nb = Math.trunc(Math.random() * 100);
console.log(nb)

let result = document.getElementById("result");
let resultat = document.getElementById("choixJoueur");
let nb_coup = 0;

let button = document.getElementById("jeux");
button.addEventListener("click", function (){
    let choix = document.getElementById("choix");
    nb_coup ++;

    console.log(choix);
    choix = parseInt(choix.value);
    resultat.innerHTML += "vous avez deja essayer " + choix + "<br>";

    if(choix < nb) { // c'est plus
        result.innerHTML = "c'est plus";
        result.style.color = "green"
        document.getElementById('result').value ;
    }
    else if(choix > nb) { // c'est moins
        result.innerHTML ="c'est moins";
        result.style.color = "red";
        document.getElementById('result');
    }
    else if(choix === nb) {  //gagné
        result.innerHTML ="Bravo tu as Gagner";
    }

    if(nb_coup > 10){
        result.innerHTML = "trop de tentative tu as perdu !!";
    }

    console.log(choix.value);
})








