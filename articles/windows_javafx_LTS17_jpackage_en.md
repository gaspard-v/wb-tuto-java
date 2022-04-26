## Introduction

This tutorial will focus on creating a jar file executable from a Java and JavaFX project on JDK version 17 (version 11 is also supported).

⚠️The jar file will have to be a file created via an Ecplise project ("Extract required libraries into generated JAR").

## Table of Contents

## Verification of the installation

To transform our .jar into an .exe we will need the `jpackage` program, provided with the JDK installation.

Go to `C:\PROGRA~1\Java\jdk-17.X.Y\bin` and check that the program `jpackage.exe` is present.
If it is not, then install (or reinstall) JDK 17 via this link: [https://www.oracle.com/java/technologies/downloads/#jdk17-windows](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)

## Installation of JMODS files

To be able to run as an executable, JavaFX needs its JMODS files.
[Download JavaFX](https://gluonhq.com/products/javafx/) Be careful, download the JMODs files and not the SDK !
Then unzip the archive into `C:\PROGRA~1\Java\`.

Your `C:\PROGRA~1\Java` folder should normally contain a `javafx-jmods-17.X.Y` folder where X and Y is the precise version of your JDK (for example 17.0.2).

## Installation of WiX Toolset

To work properly, jpackage needs the WiX Toolset.
Download it [here](https://github.com/wixtoolset/wix3/releases/download/wix3112rtm/wix311.exe), then install it.

You should see at the end of the installation:

![end Wix installation](https://i.ibb.co/S7TC5wb/wix-toolset.png)

## Creation of an executable

Open a CMD terminal, then go to the folder where you put your .jar file.
cd c:\path\to\your\jar\file`

then run this command `C:\PROGRA~1\Java\jdk-17.X.Y\bin\jpackage.exe --module-path C:\PROGRA~1\Java\javafx-jmods-17.X.Y --add-modules javafx.controls,javafx.fxml --name my_program_name --input . --main-jar .\mon-file.jar --main-class project.MainApp --win-menu --win-shortcut --win-shortcut-prompt`

**list of parameters:**

- C:\PROGRA~1\Java\jdk-17.X.Y\bin\jpackage.exe` is the path to the jpackage.exe program. Don't forget to change X and Y by your version !
- `---module-path C:\PROGRA~1\Java\javafx-jmods-17.X.Y` adds modules in the final executable, remember to check what are the JMODS files and not the SDK files, moreover do not forget to change X and Y by your version !
- `--add-modules javafx.controls,javafx.fxml` parameter needed for JavaFX
- `--name my_program_name` is the name of your program, change it as you wish.
- `--input .` parameter indicating in which folder the .jar file is located. The `.` assumes you are already in the folder where you put the .jar file.
- `--main-jar .\-my-file.jar` your .jar file (obtained through Eclipse).
- `--main-class project.MainApp` indicates the class to run, usually something like `challenge.MainApp` or `en.name.MainApp`.
- `--win-menu` adds a shortcut to the start menu.
- `--win-shortcut` adds a shortcut to the desktop.
- `--win-shortcut-prompt` asks the user whether or not he wants to add the shortcut.

There are other parameters, available at this [link](https://docs.oracle.com/en/java/javase/14/docs/specs/man/jpackage.html)

## Run the programme

jpackage create an installer for your program, run it.
A window should appear:

(example with the project 'Sallier')
![example installer](https://i.ibb.co/JkQWThs/setup-exe.png)

Install your program, it will be installed in the directory `C:\Program Files\my-program`.
Launch it, your program should run.

![program executed](https://i.ibb.co/y6PM4rt/sallier-succesfull.png)
