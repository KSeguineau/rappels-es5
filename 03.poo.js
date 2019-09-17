var Personne = function (nom,prenom,pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
};

var jules = new Personne("LEMAIRE","Jules","jules77");
var paul = new  Personne("LEMAIRE","Paul","paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};

console.log(jules.getInitiales());

var robert = {
    prenom:"Robert",
    nom:"LEPREFET",
    pseudo:"robert77",
    getNomComplet: function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
};

afficherPersonne(robert);

var Client = function (nom,prenom,pseudo,numeroClient) {
    Personne.call(this,nom,prenom,pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return this.nom +" "+this.prenom+" "+this.pseudo+" "+this.numeroClient;
    }
};

var steve = new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());