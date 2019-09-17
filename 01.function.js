console.log("01 - Fonctions");
var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1,nb2) {
    return nb1 + nb2;
}

resultat1 = additionner(nombre1,nombre2);
console.log(resultat1);

var somme = additionner;
var resultat2 = somme(nombre1,nombre2);

console.log(resultat2);

var multiplication = function (nb1,nb2) {
    return nb1 * nb2;
};

var resultat3 = multiplication(nombre1,nombre2);

console.log(resultat3);

var afficherOperation = function (nomOperation,operation,nb1,nb2) {

    return nomOperation+"("+nb1+","+nb2+") = "+operation(nb1,nb2);
};

console.log(afficherOperation("somme",somme,20,40));
console.log(afficherOperation("multiplication",multiplication,nombre1,nombre2));
console.log(afficherOperation("soustraction",function (a,b){return a-b},15,5));








