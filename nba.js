const nba = "nba";
console.log(nba);

class Joueur {
  constructor(nom, prenom, numero) {
    this.nom = nom;
    this.equipe = prenom;
    this.numero = numero;
  }
}

class Equipe {
  constructor(nom, manager) {
    this.nom = nom;
    this.manager = manager;
  }
}
