# Création d'un executable à partir d'un projet JavaFX sous Windows

## Introduction

ce tutoriel a pour but de vous aider à créer un executable à partir d'un projet JavaFX sous Windows, via l'IDE Eclipse.
ce document ce focalisera sur la version LTS 17 de Java, néanmoins la version 11 est aussi supportée.

## Sommaire

## Installation de l'environnement de développement

La première étape consiste à télécharger et installer Java et Eclipse.

1. [Télécharger le JDK 17](https://www.oracle.com/java/technologies/downloads/#java17)
   Puis suivre les instructions pour installer le JDK, normalement le programme va installer java dans le dossier `C:\Program Files\Java\jdk-17.X.Y` (remplacer X et Y par la version du JDK).

   ⚠️Attention⚠️ : Eclispe et java gèrent mal les espace dans les chemins, utiliser la commande `dir /x c:\` pour récupérer les chemins sans espace.
   Par exemple `C:\Program Files\Java\jdk-17.X.Y` peut être remplacé par `C:\PROGRA~1\Java\jdk-17.X.Y`.

2. [Télécharger Eclipse](https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/R/eclipse-java-luna-R-win32-x86_64.zip&mirror_id=101)
   Puis installez le.

3. [Télécharger JavaFX pour JDK 17](https://gluonhq.com/products/javafx/) attention certaines versions sont payante ...
