## Introduction

this tutorial aims to help you to create a jar file from a JavaFX project under Windows, via the Eclipse IDE.
This document will focus on the LTS 17 version of Java, but version 11 is also supported.

## Table of Contents

## Installation of the development environment

The first step is to download and install Java and Eclipse.

1. [Download the JDK 17](https://www.oracle.com/java/technologies/downloads/#java17)
   Then follow the instructions to install the JDK, normally the program will install java in the folder `C:\Program Files\Java\jdk-17.X.Y` (replace X and Y with the JDK version).

   ⚠️Attention⚠️: Eclispe and java handle spaces in paths badly, use the command `dir /x c:\` to get paths without spaces.
   For example `C:\Program Files\Java\jdk-17.X.Y` can be replaced by `C:\PROGRA~1\Java\jdk-17.X.Y`.

2. [Download Eclipse](https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/R/eclipse-java-luna-R-win32-x86_64.zip&mirror_id=101)
   Then install it.

3. [Download JavaFX for JDK 17](https://gluonhq.com/products/javafx/) attention some versions are paying ...
   Download JavaFX in SDK version (⚠️be careful to take the SDK) then unzip the archive in `C:\PROGRA~1\Java\`.

4. Install JavaFX on Eclipse.
   Open the Eclipse preference window ('Windows' -> 'preferences') then type "library" in the search bar.
   ![ecplise preference](https://i.ibb.co/86HD1Dz/preferences-eclipse1.png)

   Go to the section "User libraries" and click on "New...", then enter the name of the library (I advise to put "JavaFX", or "JavaFX17" because we use the version 17 of the JDK).

   ![eclipse library](https://i.ibb.co/yVKzmQC/user-libraries-eclipse.png)
   and finally click on "Add External Jars...", go to the directory where you have unzipped the JavaFX archive (normally `C:\PROGRA~1\Java\javafx-sdk-17.X.Y`) and select all the .jar files.

5. Install Java on Eclipse
   Open the preference window of Eclipse ('Windows' -> 'preferences') and click on "Java" -> "Installed JREs".
   ![Installed JREs](https://i.ibb.co/HPs8Tf5/installed-jre-ecplise.png)

   Select "Standard VM", then click on Next.

   And finally click on "Directory..." and select the directory where you unzipped the JDK (`C:\PROGRA~1\Java\jdk-17.X.Y`).

   ![add jre](https://i.ibb.co/c1LzgHx/add-jre-eclipse.png)

## Compilation of the javaFX project

We will compile a Java project using JDK 17.

1. Open Eclipse and open the project.

2. Configure the project for JDK 17.
   Right click on your project, then "Properties" -> "Java Build Path" -> "Libraries".
   ![java build path](https://i.ibb.co/Cs43jdH/java-build-path-eclipse.png)

   Then delete all the libraries already added, we will add instead the JDK 17.

   For that click on "Add Library..." then on "JRE System Library" and finally click on "Alternate JRE".
   ![choice of JRE](https://i.ibb.co/ygHVm1K/jre-choices-17.png)

   and finally choose the JDK version 17, then on "Finish".

3. Configure the project for JavaFX.
   Right click on your project, then "Properties" -> "Java Build Path" -> "Libraries".

   We are going to add the JavaFX library. Click on "Add Library..." then on "JRE System Library" and finally click on "User Library".
   Then select "JavaFX", and finally click on "Finish".
   ![javafx](https://i.ibb.co/gPzX2x6/user-library-javafx.png)

4. Set the Java options

   Still in the "properties" window of the project, go to "Run/Debug Settings", select your App, then click on "Edit...".
   ![edit run settings](https://i.ibb.co/6WcbbqK/run-debug-setting-eclipse.png)

   Go to the "Arguments" tab, and add in "VM arguments" `--module-path C:\PROGRA~1\Java\javafx-sdk-17.X.Y\lib --add-modules=javafx.controls,javafx.fxml`.

   ⚠️ATTENTION⚠️ think well to put the location of your javaFX.
   ![argument setup](https://i.ibb.co/25hqvKh/edit-configuration-eclipse.png)

**The project should now be ready to be compiled.**

you just have to click on "Run", and the project should normally start.

## Create a .jar

To do this, right click on the project, then "Export...".

Click on "Runnable Jar file", then on "Next".
![export jar file](https://i.ibb.co/FJ6mZh6/export-jar-eclipse.png)

Then select "Extract required libraries into generated JAR", and click on "Finish" without forgetting to put the name of the .jar file in "Export destination".

![finish export jar file](https://i.ibb.co/QFbG0SM/extract-libraries-eclipse.png)

**To finish, you can launch the program with the command `java --module-path C:\PROGRA~1\Java\javafx-sdk-17.X.Y\lib --add-modules=javafx.controls,javafx.fxml -jar .\my-program.jar`**
