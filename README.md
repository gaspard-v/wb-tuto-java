# Site web du projet Java et JavaFX

Le site web est un site web uniquement statique, il n'y a besoin d'aucune backend ou de base de données.

## Architecture

le site web est construit avec ReactJS et Material UI, ainsi que webpack et babel pour la génération des fichiers JS.

### data.json

1.  Le site web récupère les informations qu'il doit afficher en faisant
    une requête XHR vers `json/data.json`. Ce fichier contient toutes les
    informations concernant les différents articles.
2.  **Si vous devez modifier un article ou en rajouter un, veuillez ne modifier que ce `json/data.json`**
3.  Vous pouvez (devez ...) utiliser du **markdown** [(exemple de markdown)](https://markdown-it.github.io/, 'exemple') lorsque vous écrivez dans le champs `content` (le contenu d'un article)
4.  ⚠️la partie `content` d'un article **doit** être encodé en **base64**, enfin d'éviter des problèmes de charactère d'échappement dans le JSON ⚠️

### Répertoires

`src/` : Dossier des fichiers JS sources
`css/` : Dossier des fichiers statiques CSS
`images/`: Dossier des fichiers statiques images
`json/`: Dossier des fichiers JSON, en particulier le fichier `data.json` qui contient les articles
`build/`: Dossier qui est créer lors de la génération du projet

## Installation du projet

### ⚠️ veuillez faire cette partie avant de générer le projet

1.  récupérer le projet (avec git via `git clone https://github.com/gaspard-v/wb-tuto-java.git`)
2.  Installer [Node JS](https://nodejs.org/en/, 'Node.js (nodejs.org)')
3.  Installer les dépendances du projet avec `npm i`

#### ⚠️ Dans le cas ou les fichiers ne sont pas à la racine du serveur

par exemple dans le cas ou vous mettez les fichiers dans un sous répertoire _exemple_: `https://mon-server.com/javafx`

vous **devez** modifier le fichier `index.html` et modifier `var BASENAME = '';` en spécifiant le sous dossier, dans l'exemple on mettra `var BASENAME = 'javafx';`.

_vous pouvez aussi activer la recherche automatique de basename en activant `var ENABLE_AUTO_BASENAME = true;` et en laissant `BASENAME` vide, ==cependant ce n'est pas forcement fiable==_

### version de production

1.  créer les fichiers de production en utilisant `npm run build`, un
    dossier `build/` seras créer.
2.  copier les dossiers `build/`, `images/`, `css/`, `json/` et le fichier `index.html` dans le répertoire de votre serveur

### version de développement

1.  créer les fichiers de production en utilisant `npm run start`, vous devriez avoir accès à votre serveur de développement à l'adresse `http://localhost:8000`
