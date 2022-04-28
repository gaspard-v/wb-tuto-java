## Introduction

This tutorial will focus on creating a jar file executable from a Java and JavaFX project on JDK version 17.

⚠️The jar file will have to be a file created via an Ecplise project ("Extract required libraries into generated JAR").

## Table of Contents

## Verification of the installation

To transform our .jar into an .dmg we will need the `jpackage` program, provided with the JDK installation.

Go to `...\jdk-17.X.Y\Content/home/bin` and check that the program `jpackage` is present.
If it is not, then install (or reinstall) JDK 17 via this link: [https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

## Installation of JMODS files

To be able to run as an executable, JavaFX needs its JMODS files.
[Download JavaFX](https://gluonhq.com/products/javafx/) Be careful, download the JMODs files and not the SDK !
Then unzip the archive into your Java installation folder `...\jdk-17.X.Y\Content/home/`..

Your `javafx-jmods-17.X.Y` folder should normally contain a `javafx-jmods-17.X.Y` folder where X and Y is the precise version of your JDK (for example 17.0.2).

## Creation of an executable

Open a CMD terminal, then go to the folder where you put your .jar file.
`cd /Users/.../MyJar.jar`

then run this command `jpackage --input ./ \ --name App_Name \ --main-jar MyJar.jar \ --main-class hellofx.Main \ --type dmg \ --module-path "/Users/.../javafx-jmods-17.0.2" \ --add-modules javafx.controls,javafx.fxml \`

**list of parameters:**

- `--input ./` paramètre indiquant dans quel dossier se trouve le fichier .jar. Ici le dossier courant.`
- `--name App_Name` Nom de votre application tel qu'il sera affiché.
- `--main-jar MyJar.jar` Votre fichier .jar (obtenu grâce à Eclipse).
- `--main-class hellofx.Main` Indique la classe à exécuter.
- `--type dmg` Le type d'installateur souaité, ici dmg pour Mac.`
- `--module-path /Users/.../javafx-jmods-17.0.2` Chemin vers JMODS. Ajoute des modules dans l'exécutable final, pensez bien à vérifier ce que sont bien les fichiers JMODS et non pas les fichiers SDK, de plus vérifiez bien que la version correspond à votre JDK !
- `--add-modules javafx.controls,javafx.fxml` Paramètre nécéssaire pour JavaFX

There are other parameters, available at this [link](https://docs.oracle.com/en/java/javase/14/docs/specs/man/jpackage.html)

## Run the programme

jpackage create an installer for your program, run it.
A window should appear:

![installation dmg](https://ibb.co/NYztgt1)

Drag and drop.

Launch it.
