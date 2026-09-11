# Déploiement Automatique via GitHub Actions — 2HM Finance

Ce guide explique comment déployer automatiquement le site **2HM Finance** sur l'hébergement **LWS** à chaque push sur la branche `main`, sans aucune manipulation FTP manuelle.

---

## Comment ça fonctionne ?

À chaque fois que vous envoyez du code sur la branche `main` avec `git push`, GitHub Actions fait automatiquement :

1. **Checkout** — Récupère la dernière version du code
2. **Install** — Installe les dépendances Node.js (`npm ci`)
3. **Build** — Compile le projet avec Vite (`npm run build`) → génère le dossier `dist/`
4. **Deploy** — Téléverse le contenu de `dist/` sur le serveur FTP LWS

```
git push origin main
       │
       ▼
GitHub Actions déclenché
       │
       ├── npm ci
       ├── npm run build  →  dist/
       └── FTP Upload  →  LWS htdocs/
```

---

## Configuration initiale (à faire une seule fois)

### Étape 1 — Ajouter les secrets GitHub

Les informations de connexion FTP **ne doivent jamais** être écrites dans le code. GitHub les stocke de façon chiffrée dans les **Secrets du dépôt**.

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (onglet en haut)
3. Dans le menu gauche → **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret** et ajoutez les 3 secrets suivants :

| Nom du secret | Valeur | Où la trouver |
|---|---|---|
| `FTP_SERVER` | Adresse du serveur FTP | Espace client LWS → Hébergements → Accès FTP |
| `FTP_USERNAME` | Identifiant FTP | Même endroit |
| `FTP_PASSWORD` | Mot de passe FTP | Même endroit |

> **Exemple de valeurs LWS :**
> - `FTP_SERVER` : `ftp.cluster0XX.lws-hosting.com`
> - `FTP_USERNAME` : `votre_login_ftp`
> - `FTP_PASSWORD` : `votre_mot_de_passe`

---

### Étape 2 — Vérifier le dossier cible sur LWS

Dans le fichier `.github/workflows/deploy.yml`, la ligne `server-dir` indique dans quel dossier les fichiers seront déposés sur le serveur :

```yaml
server-dir: /htdocs/
```

Sur LWS, le dossier public de votre hébergement est généralement `htdocs/`. Si vos fichiers doivent aller dans un sous-dossier (ex : pour un domaine secondaire), modifiez cette ligne :

```yaml
server-dir: /htdocs/mon-sous-dossier/
```

---

### Étape 3 — S'assurer que le dépôt est bien connecté

```bash
# Vérifier que le remote GitHub est bien configuré
git remote -v

# Résultat attendu :
# origin  https://github.com/VOTRE_COMPTE/site-web-2hm-finance.git (fetch)
# origin  https://github.com/VOTRE_COMPTE/site-web-2hm-finance.git (push)
```

Si ce n'est pas le cas :
```bash
git remote add origin https://github.com/VOTRE_COMPTE/site-web-2hm-finance.git
```

---

## Déployer une mise à jour

Une fois la configuration initiale terminée, chaque déploiement se fait en **3 commandes** :

```bash
# 1. Ajouter les fichiers modifiés
git add .

# 2. Créer un commit avec un message descriptif
git commit -m "feat: description de la modification"

# 3. Pousser sur GitHub → déclenche automatiquement le déploiement
git push origin main
```

C'est tout. GitHub Actions s'occupe du reste. ✅

---

## Surveiller un déploiement en cours

1. Allez sur votre dépôt GitHub
2. Cliquez sur l'onglet **Actions** (en haut)
3. Vous verrez le workflow `🚀 Deploy 2HM Finance — FTP LWS` en cours d'exécution
4. Cliquez dessus pour voir les logs en temps réel

**Statut :**
- 🟡 **En cours** — le workflow tourne
- ✅ **Succès** — le site est en ligne
- ❌ **Erreur** — cliquez sur l'étape rouge pour lire le message d'erreur

---

## Activer / Désactiver le mode maintenance avant un déploiement

Pour mettre le site en maintenance le temps d'une mise à jour importante :

```jsx
// src/App.jsx — ligne 15
const IS_MAINTENANCE_MODE = true;  // ← Activer avant le push
```

```bash
git add .
git commit -m "chore: activation mode maintenance"
git push origin main
# → Le site affiche la page de maintenance

# ... faire les modifications ...

# Puis désactiver :
# IS_MAINTENANCE_MODE = false
git add .
git commit -m "chore: désactivation mode maintenance"
git push origin main
# → Le site est de nouveau accessible normalement
```

---

## Structure du fichier workflow

Le fichier se trouve dans `.github/workflows/deploy.yml` :

```yaml
name: 🚀 Deploy 2HM Finance — FTP LWS

on:
  push:
    branches:
      - main        # Déploiement automatique sur push

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci          # Installation propre des dépendances
      - run: npm run build   # Génération du dossier dist/

      - uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/     # ← Contenu à envoyer
          server-dir: /htdocs/   # ← Destination sur LWS
```

---

## Problèmes fréquents

| Symptôme | Cause probable | Solution |
|---|---|---|
| Workflow ❌ `Auth failed` | Mauvais identifiants FTP | Vérifier les secrets dans GitHub Settings |
| Workflow ❌ `Connection refused` | Mauvais serveur FTP ou port bloqué | Vérifier `FTP_SERVER` dans l'espace client LWS |
| Page blanche après déploiement | `base` manquant dans `vite.config.js` | S'assurer que `base: './'` est présent |
| Workflow ne se déclenche pas | Push sur la mauvaise branche | Pousser sur `main` et non `master` ou autre |
| Fichier `.htaccess` absent sur le serveur | Ignoré par le client FTP | Vérifier que `public/.htaccess` existe dans le projet |
