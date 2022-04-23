# Création d'un exécutable d'un fichier jar à partir d'un projet Java et JavaFX.

## Introduction

Ce tutoriel se focalisera sur la création d'un exécutable d'un fichier jar à partir d'un projet Java et JavaFX sur la version 17 du JDK (la version 11 est aussi supportée).

⚠️Le fichier jar devra être un fichier créer via un projet Ecplise ("Extract required libraries into generated JAR").

## Sommaire

## Vérification de l'installation

Pour transformer notre .jar en .exe nous allons avoir besoin du programme `jpackage`, fournis avec l'installation du JDK.

Allez dans `C:\PROGRA~1\Java\jdk-17.X.Y\bin` et vérifiez que le programme `jpackage.exe` est bien présent.
Si ce n'est pas le cas, alors installez (ou réinstallez) le JDK 17 via ce liens: [https://www.oracle.com/java/technologies/downloads/#jdk17-windows](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)

## Installation des fichiers JMODS

Pour pouvoir fonctionner en exécutable, JavaFX a besoin de ses fichiers JMODS.
[Téléchargez JavaFX](https://gluonhq.com/products/javafx/) Attention, téléchargez bien les fichiers JMODs et non pas le SDK !!
Puis décompressez l'archive dans `C:\PROGRA~1\Java\`.

## Création d'un exécutable
