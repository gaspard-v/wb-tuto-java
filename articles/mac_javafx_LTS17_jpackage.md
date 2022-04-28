## Introduction

Ce tutoriel se focalisera sur la création d'un exécutable d'un fichier jar à partir d'un projet Java et JavaFX sur la version 17 du JDK.

⚠️Le fichier jar devra être un fichier créer via un projet Ecplise ("Extract required libraries into generated JAR").

## Sommaire

## Vérification de l'installation

Pour transformer notre .jar en .dmg nous allons avoir besoin du programme `jpackage`, fournis avec l'installation du JDK.

Allez dans votre dossier d'installation Java `...\jdk-17.X.Y\Content/home/bin` et vérifiez que le programme `jpackage` est bien présent.
Si ce n'est pas le cas, alors installez (ou réinstallez) le JDK 17 via ce liens: [https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

## Installation des fichiers JMODS

Pour pouvoir fonctionner en exécutable, JavaFX a besoin de ses fichiers JMODS.
[Téléchargez JavaFX](https://gluonhq.com/products/javafx/) Attention, téléchargez bien les fichiers JMODs et non pas le SDK !!
Puis décompressez l'archive dans votre dossier d'installation Java `...\jdk-17.X.Y\Content/home`.

Votre dossier d'installation Java doit normalement contenir un dossier `javafx-jmods-17.X.Y` ou X et Y est la version précise de votre JDK (par exemple 17.0.2).

## Création d'un exécutable

Ouvrez un terminal CMD, puis allez dans le dossier ou vous avez mis votre fichier .jar.
`cd /Users/.../MyJar.jar`

ensuite exécutez cette commande `jpackage --input ./ \ --name App_Name \ --main-jar MyJar.jar \ --main-class hellofx.Main \ --type dmg \ --module-path "/Users/.../javafx-jmods-17.0.2" \ --add-modules javafx.controls,javafx.fxml \`

**liste des paramètres:**

- `--input ./` paramètre indiquant dans quel dossier se trouve le fichier .jar. Ici le dossier courant.`
- `--name App_Name` Nom de votre application tel qu'il sera affiché.
- `--main-jar MyJar.jar` Votre fichier .jar (obtenu grâce à Eclipse).
- `--main-class hellofx.Main` Indique la classe à exécuter.
- `--type dmg` Le type d'installateur souaité, ici dmg pour Mac.`
- `--module-path /Users/.../javafx-jmods-17.0.2` Chemin vers JMODS. Ajoute des modules dans l'exécutable final, pensez bien à vérifier ce que sont bien les fichiers JMODS et non pas les fichiers SDK, de plus vérifiez bien que la version correspond à votre JDK !
- `--add-modules javafx.controls,javafx.fxml` Paramètre nécéssaire pour JavaFX

Il existe d'autres paramètres, disponible sur ce [lien](https://docs.oracle.com/en/java/javase/14/docs/specs/man/jpackage.html)

## Lancer le programme

jpackage créé un installateur pour votre programme, lancez le.
Un fenêtre devrais apparaître:

![installation dmg](https://ibb.co/NYztgt1)

Glissez

Lancez le, votre programme devrait s'exécuter.
