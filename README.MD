# Projet NBA en JavaScript

Ce projet modélise des objets NBA en JavaScript, avec une structure simple autour de deux classes :

- `Joueur` : informations d'un joueur (nom, prenom, numero, poste, poids, age, taille)
- `Equipe` : informations d'une equipe (nom, manager, liste de joueurs)

L'objectif est de pratiquer la programmation orientee objet et les bonnes pratiques Git/GitHub.

## Structure du projet

- `nba.js` : classes principales et exemples d'instances
- `eslint.config.js` : regles de lint
- `.github/workflows/lint.yml` : verification automatique en CI

## Prerequis

- Node.js 20+
- npm
- Git

## Installation

```bash
npm install
```

## Execution

```bash
node nba.js
```

## Lint

```bash
npm run lint
```

## Exemple d'utilisation

Le fichier `nba.js` contient un exemple avec :

- creation d'un joueur (`joueur1`)
- creation d'une equipe (`equipe1`) contenant une liste de joueurs

## Commits et qualite

Le projet utilise :

- Husky pour lancer les hooks Git
- ESLint avant commit (`pre-commit`)
- Commitlint pour valider les messages de commit (`commit-msg`)

Les messages de commit doivent suivre le format Conventional Commits, par exemple :

- `feat: ajoute la classe equipe`
- `fix: corrige l'attribut joueur`
- `docs: met a jour le readme`

## CI GitHub Actions

La CI verifie automatiquement :

- le lint du code
- le format des messages de commit

## Contribution

Consulte le guide dans `.github/CONTRIBUTING.md`.

## Code de conduite

Consulte `.github/CODE_OF_CONDUCT.md`.
