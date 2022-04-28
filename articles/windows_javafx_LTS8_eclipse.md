## Introduction

Ce tutoriel vise à vous apprendre à créer un fichier .jar à partir d'un projet Java sur Eclipse.
Le tutoriel ce focalisera sur la version 8 de Java, et uniquement de celle-ci.
La verion 8 est particulière car celle ci intègre JavaFX, ce qui n'est pas le cas des version 11 et 17.

## Sommaire

## Installation de l'environnement de développement

La première étape consiste à télécharger et installer Java et Eclipse.

1. [Télécharger le JDK 8](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html)
   Puis suivre les instructions pour installer le JDK, normalement le programme va installer java dans le dossier `C:\Program Files\Java\JDK1.8.0_X` (remplacer X par la version du JDK).

   ⚠️Attention⚠️ : Eclispe et java gèrent mal les espace dans les chemins, utiliser la commande `dir /x c:\` pour récupérer les chemins sans espace.
   Par exemple `C:\Program Files\Java\JDK1.8.0_X` peut être remplacé par `C:\PROGRA~1\Java\JDK1.8.0_X`.

2. [Télécharger Eclipse](https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/R/eclipse-java-luna-R-win32-x86_64.zip&mirror_id=101)
   Puis installez le.

3. Installer Java sur Eclipse
   Ouvrir la fenêtre préférence de Eclipse ('Windows' -> 'preferences') et cliquer sur "Java" -> "Installed JDKs".
   ![Installed JDKs](https://i.ibb.co/HPs8Tf5/installed-jre-ecplise.png)

   Selectionner "Standard VM", puis cliquez sur Next.

   Et enfin cliquez sur "Directory..." et selectionner le répertoire où vous avez décompressez le JDK (`C:\PROGRA~1\Java\JDK1.8.0_X`).

   ![add JDK](https://i.ibb.co/c1LzgHx/add-jre-eclipse.png)

## Compilation du projet javaFX

Nous allons compiler un projet Java en utilisant le JDK 8.

1. Ouvrir Eclipse et ouvrir le projet.

2. Configurer le projet pour JDK 8.
   Faites clique droit sur votre projet, puis "Properties" -> "Java Build Path" -> "Libraries".
   ![java build path](https://i.ibb.co/Cs43jdH/java-build-path-eclipse.png)

   Puis supprimez toutes les libraries déjà ajoutées, nous allons ajouté à la place le JDK 8.

   Pour cela cliquez sur "Add Library..." puis sur "JDK System Library" et enfin cliquez sur "Alternate JDK"
   ![choix du JDK](https://i.ibb.co/vdWmWgg/use-jre8.png)

   et enfin choisissez la version 8 du JDK, puis sur "Finish".

3. changer la compliance du projet
   Faites clique droit sur votre projet, puis "Properties" -> "Java Compiler".
   Activer "Enable project specific settings", puis changer le "Compiler compliance level" à "1.8".
   ![compliance](https://i.ibb.co/WGp68C5/compliance-jre8.png)

   Et enfin cliquez sur "Apply and close".

**Le projet devrait maintenant être prêt à être compilé.**

il ne reste plus qu'a cliquer sur "Run", et le projet doit normalement se lancer.

## Créer un .jar

Pour cela, faites click droit sur le projet, puis "Export...".

Cliquez sur "Runnable Jar file", puis sur "Next".
![export jar file](https://i.ibb.co/FJ6mZh6/export-jar-eclipse.png)

Ensuite selectionnez "Extract required libraries into generated JAR", et cliquez sur "Finish" sans oublier de mettre le nom du fichier .jar dans "Export destination".

![finish export jar file](https://i.ibb.co/QFbG0SM/extract-libraries-eclipse.png)

**Pour finir, vous pouvez lancer le programme par la commande `java -jar .\mon-programme.jar`**
**faites attention de bien lancer java 8 et pas une autre version**
