# Projet Git

Projet d'apprentissage Git/GitHub avec bonnes pratiques de collaboration :

- gestion des issues et des pull requests
- conventions de commit
- lint local et en CI
- templates de contribution

## Prérequis

- Node.js 20+
- npm
- Git

## Installation

```bash
npm install
```

## Lancer les vérifications

```bash
npm run lint
```

## Convention de commits

Le projet suit Conventional Commits. Exemples valides :

- `feat: add login form`
- `fix: handle null response`
- `docs: update readme`

Un hook Git `commit-msg` refuse automatiquement les messages invalides.

## Hooks Git

Le projet utilise Husky avec deux hooks :

- `pre-commit` : exécute le lint
- `commit-msg` : vérifie le message de commit avec commitlint

## CI GitHub Actions

La CI vérifie :

- le lint du code
- le format des messages de commits

## Contribution

Consulte le guide de contribution dans `.github/CONTRIBUTING.md`.

## Code de conduite

Consulte `.github/CODE_OF_CONDUCT.md`.
