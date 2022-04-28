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

Votre dossier `C:\PROGRA~1\Java` doit normalement contenir un dossier `javafx-jmods-17.X.Y` ou X et Y est la version précise de votre JDK (par exemple 17.0.2).

## Installation de WiX Toolset

Pour fonctionner correctement, jpackage a besoin de l'outil WiX Toolset.
Téléchargez le [ici](https://github.com/wixtoolset/wix3/releases/download/wix3112rtm/wix311.exe), puis installez-le.

Vous devriez voir à la fin de l'installation:

![fin installation Wix](https://i.ibb.co/S7TC5wb/wix-toolset.png)

## Création d'un exécutable

Ouvrez un terminal CMD, puis allez dans le dossier ou vous avez mis votre fichier .jar.
`cd c:\chemin\vers\le\fichier\jar`

ensuite exécutez cette commande `C:\PROGRA~1\Java\jdk-17.X.Y\bin\jpackage.exe --module-path C:\PROGRA~1\Java\javafx-jmods-17.X.Y --add-modules javafx.controls,javafx.fxml --name nom_de_mon_programme --input . --main-jar .\mon-fichier.jar --main-class projet.MainApp --win-menu --win-shortcut --win-shortcut-prompt`

**liste des paramètres:**

- `C:\PROGRA~1\Java\jdk-17.X.Y\bin\jpackage.exe` est le chemin vers le programme jpackage.exe. N'oubliez pas de changer X et Y par votre version !!
- `--module-path C:\PROGRA~1\Java\javafx-jmods-17.X.Y` ajoute des modules dans l'exécutable final, pensez bien à vérifier ce que sont bien les fichier JMODS et non pas les fichiers SDK, de plus n'oubliez pas de changer X et Y par votre version !
- `--add-modules javafx.controls,javafx.fxml` paramètre nécéssaire pour JavaFX
- `--name nom_de_mon_programme` désigne le nom de votre programme, changez le comme vous le souhaitez.
- `--input .` paramètre indiquant dans quel dossier se trouve le fichier .jar. le `.` suppose que vous vous trouvez deja dans le dossier ou vous avez mis le fichier .jar.
- `--main-jar .\mon-fichier.jar` votre fichier .jar (obtenu grâce à Eclipse).
- `--main-class projet.MainApp` indique le classe à exécuter, généralement quelque chose du genre `challenge.MainApp` ou `fr.nom.MainApp`.
- `--win-menu` ajoute un raccourci dans le menu démarrer.
- `--win-shortcut` ajoute un raccourci dans le bureau.
- `--win-shortcut-prompt` demande à l'utilisateur si, oui ou non il souhaite ajouter les raccourcis.

Il existe d'autres paramètres, disponible sur ce [lien](https://docs.oracle.com/en/java/javase/14/docs/specs/man/jpackage.html)

## Lancer le programme

jpackage créer un un installateur pour votre programme, lancez le.
Un fenêtre devrais apparaître:

(exemple avec le projet 'Sallier')
![exemple installateur](https://i.ibb.co/JkQWThs/setup-exe.png)

Installer votre programme, celui-ci sera installer dans le répertoire `C:\Program Files\mon-programme`.
Lancez le, votre programme devrait s'exécuter.

![programme exécuté](https://i.ibb.co/y6PM4rt/sallier-succesfull.png)
