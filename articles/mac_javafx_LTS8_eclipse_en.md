## Introduction

Ce tutoriel vise à vous apprendre à créer un fichier .dmg à partir d'un projet Java sur Eclipse.

Le tutoriel ce focalisera sur la version 8 de Java, et uniquement de celle-ci.

Pour la création d'un exécutable, nous utiliserons le plugin e(fx)clipse intégré à l'IDE Eclipse.

## E(fx)clipse

L’installation se fait depuis Eclipse. Rendez-vous dans l’onglet Help > Eclipse Marketplace

![Eclipse MarketPlace](https://i.ibb.co/syqjFM6/mac-eclipse-market.png)

Dans la barre de recherche, tapez « e(fx)clipse » et installez le plug-in.

![Search e(fx)clipse](https://i.ibb.co/gWWphpL/mac-search-efxclipse.png)

## Le fichier build.fxbuild

Pour la génération de notre executable, nous avons besoin du fichier build.fxbuild généré par le plug-in e(fx)clipse.

Si votre projet ne possède pas ce fichier, vous pouvez le copier/coller depuis un nouveau projet Eclipse : la procédure est décrite dans la partie suivante.

Si vous possédez déjà ce fichier, vous pouvez passer à la partie Génération d’un répertoire build.

## Créer un nouveau fichier build.fxbuild

Rendez-vous dans l’onglet File > New > Other… et sélectionnez JavaFX > JavaFX project.
Remplissez les champs comme bon vous semble, ce n’est pas important. Une fois le projet créé, vous verrez dans son arborescence un fichier build.fxbuild que vous pouvez copier/coller dans votre vrai projet.

![Create JavaFX project](https://i.ibb.co/rpNSZ7M/Capture-d-cran-2022-04-28-11-59-54.png)

![build.fxbuild file](https://i.ibb.co/F80mbMQ/Capture-d-cran-2022-04-28-12-00-03.png)

##Éditer le fichier build.fxbuild

Une fois le fichier build.fxbuild récupéré, vous devez remplir tous les champs avec une étoile. Attention à ne pas utiliser d’espace dans le titre de l’application.

![build.fxbuild edit](https://i.ibb.co/JQpxJ1q/mac-build-edit.png)

Enfin, pour une application Mac, nous voulons un Packaging Format en dmg.

## Génération du répertoire build

Nous allons maintenant générer le répertoire build. A droite sur le fichier build.fxbuild, cliquez sur Generate ant build.xml only.

![generate ant build](https://i.ibb.co/Kyd2qkr/generate-ant-build.png)

Un répertoire build est bien créé dans l’arborescence de votre projet.

## Inclure les ressources

Si vous utilisez un répertoire resources, il n’est pas automatiquement intégré.

Dans le répertoire build, créez un sous-répertoire dist dans lequel vous allez copier/coller votre dossier resources.

![dist folder](https://i.ibb.co/GsP9w38/mac-dist-folder.png)

## Exécuter build.xml

Dernière étape, clic droit sur le fichier build.xml du répertoire build puis Run As > 1 Ant Build.

![run as](https://i.ibb.co/ZV8fd46/mac-run-ant.png)

L’opération peut prendre un peu de temps. Vous devriez ensuite voir le répertoire build changer, avec à l’intérieur le fichier dmg à exécuter.

![dmg file](https://i.ibb.co/7QtCqbQ/mac-dmg-file.png)
