## Introduction

ce tutoriel a pour but de vous aider à créer un fichier jar à partir d'un projet JavaFX sous Windows, via l'IDE Eclipse.
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
   Télécharger JavaFX en version SDK (⚠️faites attention de bien prendre le SDK) puis décompresser l'archive dans `C:\PROGRA~1\Java\`.

4. Installer JavaFX sur Eclipse.
   Ouvrir la fenêtre préférence de Eclipse ('Windows' -> 'preferences') puis taper "library" dans la barre de recherche.
   ![préférence ecplise](https://i.ibb.co/86HD1Dz/preferences-eclipse1.png)

   Aller dans la section "User libraries" et cliquer sur "New...", puis entrez le nom de la librarie (je conseille de mettre "JavaFX", ou "JavaFX17" car on utilise la version 17 du JDK).

   ![librarie eclipse](https://i.ibb.co/yVKzmQC/user-libraries-eclipse.png)
   et enfin cliquez sur "Add External Jars...", allez dans le répertoire ou vous avez décompressez l'archive JavaFX (normalement `C:\PROGRA~1\Java\javafx-sdk-17.X.Y`) et sélectionnez tous les fichiers .jar.

5. Installer Java sur Eclipse
   Ouvrir la fenêtre préférence de Eclipse ('Windows' -> 'preferences') et cliquer sur "Java" -> "Installed JREs".
   ![Installed JREs](https://i.ibb.co/HPs8Tf5/installed-jre-ecplise.png)

   Selectionner "Standard VM", puis cliquez sur Next.

   Et enfin cliquez sur "Directory..." et selectionner le répertoire où vous avez décompressez le JDK (`C:\PROGRA~1\Java\jdk-17.X.Y`).

   ![add jre](https://i.ibb.co/c1LzgHx/add-jre-eclipse.png)

## Compilation du projet javaFX

Nous allons compiler un projet Java en utilisant le JDK 17.

1. Ouvrir Eclipse et ouvrir le projet.

2. Configurer le projet pour JDK 17.
   Faites clique droit sur votre projet, puis "Properties" -> "Java Build Path" -> "Libraries".
   ![java build path](https://i.ibb.co/Cs43jdH/java-build-path-eclipse.png)

   Puis supprimez toutes les libraries déjà ajoutées, nous allons ajouté à la place le JDK 17.

   Pour cela cliquez sur "Add Library..." puis sur "JRE System Library" et enfin cliquez sur "Alternate JRE"
   ![choix du JRE](https://i.ibb.co/ygHVm1K/jre-choices-17.png)

   et enfin choisissez la version 17 du JDK, puis sur "Finish".

3. Configurer le projet pour JavaFX.
   Faites clique droit sur votre projet, puis "Properties" -> "Java Build Path" -> "Libraries".

   Nous allons ajouter la librarie JavaFX. cliquez sur "Add Library..." puis sur "JRE System Library" et enfin cliquez sur "User Library".
   Puis sélectionnez "JavaFX", et enfin cliquez sur "Finish".
   ![javafx](https://i.ibb.co/gPzX2x6/user-library-javafx.png)

4. Paramétrer les options de Java

   Toujours dans la fenètre "properties" du projet, allez dans "Run/Debug Settings", sélectionner votre App, puis cliquez sur "Edit...".
   ![edit run settings](https://i.ibb.co/6WcbbqK/run-debug-setting-eclipse.png)

   Allez dans l'onglet "Arguments", et ajouter dans "VM arguments" `--module-path C:\PROGRA~1\Java\javafx-sdk-17.X.Y\lib --add-modules=javafx.controls,javafx.fxml`.

   ⚠️ATTENTION⚠️ pensais bien à mettre l'emplacement de votre javaFX.
   ![configuration des arguments](https://i.ibb.co/25hqvKh/edit-configuration-eclipse.png)

**Le projet devrait maintenant être prêt à être compilé.**

il ne reste plus qu'a cliquer sur "Run", et le projet doit normalement se lancer.

## Créer un .jar

Pour cela, faites click droit sur le projet, puis "Export...".

Cliquez sur "Runnable Jar file", puis sur "Next".
![export jar file](https://i.ibb.co/FJ6mZh6/export-jar-eclipse.png)

Ensuite selectionnez "Extract required libraries into generated JAR", et cliquez sur "Finish" sans oublier de mettre le nom du fichier .jar dans "Export destination".

![finish export jar file](https://i.ibb.co/QFbG0SM/extract-libraries-eclipse.png)

**Pour finir, vous pouvez lancer le programme par la commande `java --module-path C:\PROGRA~1\Java\javafx-sdk-17.X.Y\lib --add-modules=javafx.controls,javafx.fxml -jar .\mon-programme.jar`**
