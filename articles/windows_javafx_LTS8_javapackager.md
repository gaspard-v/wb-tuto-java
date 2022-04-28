## Introduction

Ce tutoriel se focalisera sur la création d'un exécutable d'un fichier jar à partir d'un projet Java et JavaFX sur la version 8 du JDK.

⚠️Le fichier jar devra être un fichier créer via un projet Ecplise ("Extract required libraries into generated JAR").

## Sommaire

## Vérification de l'installation

Pour transformer notre .jar en .exe nous allons avoir besoin du programme `javapackager`, fournis avec l'installation du JDK.

Allez dans `C:\PROGRA~1\Java\jdk1.8.0_X\bin` et vérifiez que le programme `javapackager.exe` est bien présent.
Si ce n'est pas le cas, alors installez (ou réinstallez) le JDK 8 via ce liens: [https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html)

## Installation de InnoSetup

`javapackager` a besoin de InnoSetup pour fonctionner.

Téléchargez la dernière version de InnoSetup sur le site [https://jrsoftware.org/isdl.php](https://jrsoftware.org/isdl.php), puis installez le.

## Création d'un exécutable

Ouvrez un terminal CMD, puis allez dans le dossier ou vous avez mis votre fichier .jar.
`cd c:\chemin\vers\le\fichier\jar`

ensuite exécutez cette commande `C:\PROGRA~1\Java\jdk1.8.0_321\bin\javapackager.exe -deploy -native exe -appclass projet.MainApp -name "mon-programme" -srcfiles .\mon-fichier.jar -outfile nom_de_mon_programme -outdir .`

**liste des paramètres:**

- `-deploy` créer un exécutable de production
- `-native exe` indique quel type d'exécutable créer (`exe` pour créé un .exe)
- `-appclass projet.MainApp` indique quel est la classe à exécuter (le "main")
- `-name "mon-programme"` nom de l'exécutable final
- `-srcfiles .\mon-fichier.jar` votre fichier .jar (obtenu sur Eclispe)
- `-outfile nom_de_mon_programme` nom de l'exécutable d'installation
- `-outdir .` dossier ou l'exécutable sera créé

Votre terminal devrait afficher quelque chose du genre:

```
PS C:\Users\Gaspard\Sallier> C:\PROGRA~1\Java\jdk1.8.0_321\bin\javapackager.exe -deploy -native exe -appclass challenge.MainApp -name "sallier" -srcfiles .\sallier.jar -outfile sallier -outdir .
No base JDK. Package will use system JRE.
No base JDK. Package will use system JRE.
Installer (.exe) saved to: C:\Users\Gaspard\Sallier\.\bundles
```
