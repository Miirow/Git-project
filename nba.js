const nba = "nba";
console.log(nba);

class Joueur {
  constructor(nom, prenom) {
    this.nom = nom;
    this.equipe = prenom;
  }
}

class Equipe {
  constructor(nom, manager) {
    this.nom = nom;
    this.manager = manager;
  }
}
