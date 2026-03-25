# Yboost - API Pokémons

API simple en Node.js/Express pour exposer une liste de Pokémons.

## Prérequis

- Node.js (version 18+ recommandée)
- npm

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm start
```

Le serveur démarre sur :

- `http://localhost:3000`

## Endpoints disponibles

### 1) Accueil

- **GET** `/`
- Réponse : message HTML de bienvenue

### 2) Liste des Pokémons

- **GET** `/api/pokemons`
- Réponse JSON :
  - `message`
  - `data` (tableau des Pokémons)

### 3) Un Pokémon par ID

- **GET** `/api/pokemons/:id`
- Exemple : `/api/pokemons/1`
- Réponse JSON :
  - succès : Pokémon trouvé
  - erreur : `404` si introuvable

### 4) Un Pokémon par ID + nom

- **GET** `/api/pokemons/:id/:name`
- Exemple : `/api/pokemons/1/Bulbizarre`
- Réponse JSON :
  - succès : Pokémon trouvé
  - erreur : `404` si introuvable

## Exemples de test (PowerShell)

```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/pokemons -Method Get | ConvertTo-Json -Depth 4
```

```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/pokemons/1 -Method Get | ConvertTo-Json -Depth 4
```

```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/pokemons/1/Bulbizarre -Method Get | ConvertTo-Json -Depth 4
```

## Structure du projet

- `index.js` : point d’entrée de l’application et routes API
- `db-pokemons.js` : base de données en mémoire
- `helper.js` : formatteur de réponse JSON
