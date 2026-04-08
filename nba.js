const nba = "nba";
console.log(nba);

class Joueur {
  constructor(nom, prenom, numero, poste) {
    this.nom = nom;
    this.equipe = prenom;
    this.numero = numero;
    this.poste = poste;
  }
}

class Equipe {
  constructor(nom, manager) {
    this.nom = nom;
    this.manager = manager;
  }
}
