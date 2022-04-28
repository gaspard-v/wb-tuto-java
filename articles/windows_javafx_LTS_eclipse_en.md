## Introduction

This tutorial aims to teach you how to create a .jar file from a Java project on Eclipse.
The tutorial will focus on Java version 8, and only on this one.
The version 8 is particular because it integrates JavaFX, which is not the case of version 11 and 17.

## Contents

## Installation of the development environment

The first step is to download and install Java and Eclipse.

1. [Download the JRE 8](https://www.java.com/fr/download/manual.jsp)
   Then follow the instructions to install the JRE, normally the program will install java in the folder `C:\Program Files\Java\jre1.8.0_X` (replace X by the version of the JRE).

   ⚠️Attention⚠️: Eclispe and java handle spaces in paths badly, use the command `dir /x c:\` to get paths without spaces.
   For example `C:\Program Files\Java\jre1.8.0_X` can be replaced by `C:\PROGRA~1\Java\jre1.8.0_X`.

2. [Download Eclipse](https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/R/eclipse-java-luna-R-win32-x86_64.zip&mirror_id=101)
   Then install it.

3. Install Java on Eclipse
   Open the Eclipse preference window ('Windows' -> 'preferences') and click on "Java" -> "Installed JREs".
   ![Installed JREs](https://i.ibb.co/HPs8Tf5/installed-jre-ecplise.png)

   Select "Standard VM", then click on Next.

   And finally click on "Directory..." and select the directory where you unzipped the JRE (`C:\PROGRA~1\Java\jre1.8.0_X`).

   ![add jre](https://i.ibb.co/c1LzgHx/add-jre-eclipse.png)

## Compiling the javaFX project

We are going to compile a Java project using the JRE 17.

1. Open Eclipse and open the project.

2. Configure the project for JRE 8.
   Right click on your project, then "Properties" -> "Java Build Path" -> "Libraries".
   ![java build path](https://i.ibb.co/Cs43jdH/java-build-path-eclipse.png)

   Then delete all the libraries already added, we will add instead the JRE 8.

   For that click on "Add Library..." then on "JRE System Library" and finally click on "Alternate JRE".
   ![choice of JRE](https://i.ibb.co/vdWmWgg/use-jre8.png)

   and finally choose the version 8 of the JRE, then on "Finish".

3. Change the compliance of the project
   Right click on your project, then "Properties" -> "Java Compiler".
   Activate "Enable project specific settings", then change the "Compiler compliance level" to "1.8".
   ![compliance](https://i.ibb.co/WGp68C5/compliance-jre8.png)

   And finally click on "Apply and close".

**The project should now be ready to be compiled.**

You just have to click on "Run", and the project should start.

## Create a .jar

To do this, right click on the project, then "Export...".

Click on "Runnable Jar file", then on "Next".
![export jar file](https://i.ibb.co/FJ6mZh6/export-jar-eclipse.png)

Then select "Extract required libraries into generated JAR", and click on "Finish" without forgetting to put the name of the .jar file in "Export destination".

![finish export jar file](https://i.ibb.co/QFbG0SM/extract-libraries-eclipse.png)

**To finish, you can launch the program with the command `java -jar .\my-program.jar`**
**be careful to launch java 8 and not another version**.
