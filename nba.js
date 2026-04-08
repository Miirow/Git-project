class Joueur {
  constructor(nom, prenom, numero, poste, poids, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.numero = numero;
    this.poste = poste;
    this.poids = poids;
    this.age = age;
  }
}

class Equipe {
  constructor(nom, manager, joueurs) {
    this.nom = nom;
    this.manager = manager;
    this.joueurs = joueurs;
  }
}
