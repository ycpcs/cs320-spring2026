---
layout: default
title: "Lab 3: Web Applications I"
---

Getting Started
===============

Download [CS320\_Lab03.zip](CS320_Lab03.zip) and extract the zip file into a folder named **CS320\_Lab03**

Start Intellij and select **Open** from the main screen and navigate to the **CS320\_Lab03** directory.

Open **AddNumbers.java**, **\_view/addNumbers.jsp**, and **AddNumbersServlet.java** to understand how the model, view, and servlet classes work for the AddNumbers example.

To run the AddNumbers webapp, run **Main.java** (located in **src/main/java/edu.ycp.cs320/lab03/main**) as a Java application and enter the following URL in your web browser:

> [http://localhost:8081/lab03/addNumbers](http://localhost:8081/lab03/addNumbers)

**DON'T FORGET TO STOP THE SERVER** before making changes and restarting it.

**NOTE:** You must work individually on this lab.  It is imperative that everyone on your team be able to fully comprehend, design, implement, troubleshoot, and debug the complete architecture of a standard client-server application.

<!--
**NOTE:** If you start the server and then run AddNumbers from your browser and get a mass of Java JSP compiler errors returned from the local host, go to the [Notes for Lab 3 Page](lab03_notes.html) for instructions on solving the problem.  There are also some additional notes at the bottom of that page for other problems that you might encounter.
-->

Your Task
=========

Implement the **GuessingGameController** class so that it implements a guessing game where the user thinks of a number between 1 and 100 and the web application tries to guess it.

See **GuessingGame.java**, **\_view/guessingGame.jsp**, and **GuessingGameServlet.java** to understand how the model, view, and servlet classes work.

To run the webapp, run **Main.java** as a Java application and enter the following URL in your web browser:

> [http://localhost:8081/lab03/guessingGame](http://localhost:8081/lab03/guessingGame)

Lastly, implement JUnit tests to test the **GuessingGame** and **GuessingGameController** classes.


Submitting
==========

When you are done, submit the lab to the Marmoset server using the method below.

(Ensure you have the **Project to Zip** plugin installed).

Save the project (**CS320\_Lab03**) to a zip file by selecting

> **File &rarr; Export &rarr; Project to Zip File**

Make sure to choose an appropriate location and archive name before saving the archive, or you might unintentionally overwrite an archive that you previously saved.

From a web browser
------------------

Upload the saved zip file to the **Lab 3** project on the Marmoset server. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)

