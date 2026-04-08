class Joueur {
  constructor(nom, prenom, numero, poste, poids, age, taille) {
    this.nom = nom;
    this.prenom = prenom;
    this.numero = numero;
    this.poste = poste;
    this.poids = poids;
    this.age = age;
    this.taille = taille;
  }
}

class Equipe {
  constructor(nom, manager, joueurs) {
    this.nom = nom;
    this.manager = manager;
    this.joueurs = joueurs;
  }
}
