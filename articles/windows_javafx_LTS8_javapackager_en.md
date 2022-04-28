## Introduction

This tutorial will focus on creating an executable of a jar file from a Java and JavaFX project on JDK version 8.

⚠️The jar file will have to be a file created via an Ecplise project ("Extract required libraries into generated JAR").

## Table of Contents

## Checking the installation

To transform our .jar into .exe we will need the `javapackager` program, provided with the JDK installation.

Go to `C:\PROGRA~1\Java\jdk1.8.0_X\bin` and check that the `javapackager.exe` program is present.
If it is not, then install (or reinstall) JDK 8 via this link: [https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html)

## Installing InnoSetup

`javapackager` needs InnoSetup to work.

Download the latest version of InnoSetup from [https://jrsoftware.org/isdl.php](https://jrsoftware.org/isdl.php), then install it.

## Creating an executable

Open a CMD terminal, then go to the folder where you put your .jar file.
`cd c:\chemin\vers\lefichier\jar`

then execute this command `C:\PROGRA~1\Java\jdk1.8.0_321\bin\javapackager.exe -deploy -native exe -appclass project.MainApp -name "my-program" -srcfiles .\my-file.jar -outfile my_program_name -outdir .`

**list of parameters:**

- `-deploy` create a production executable
- `-native exe` indicates what type of executable to create (`exe` for creating an .exe)
- `-appclass project.MainApp` indicates which class to run (the "main")
- `name "my-program" ` name of the final executable
- `-srcfiles .my-file.jar` your .jar file (obtained from Eclispe)
- `outfile my-program_name` name of the installation executable
- `outdir .` folder where the executable will be created

[full list of parameters](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javapackager.html)

Your terminal should display something like this:

```
PS C:\Users\Gaspard\Sallier> C:\PROGRA~1\Java\jdk1.8.0_321\bin\javapackager.exe -deploy -native exe -appclass challenge.MainApp -name "sallier" -srcfiles .\sallier.jar -outfile sallier -outdir .
No base JDK. Package will use system JRE.
No base JDK. Package will use system JRE.
Installer (.exe) saved to: C:\Users\Gaspard\Sallier\.\bundles
```

## Run the program

The javapackager has created a new `.\bundles' folder in which there is an executable file `my-program-1.0.exe'.

This program is an installer. Run it, a window should open.

(example with the 'Sallier' project)
![example installer](https://i.ibb.co/30Z9SXp/javapackager-start.png)

Install your program, it will be installed in the directory `C:\Users\USER\AppData\Local\my-program`.
Launch it, your program should run.

![executed program](https://i.ibb.co/y6PM4rt/sallier-succesfull.png)
