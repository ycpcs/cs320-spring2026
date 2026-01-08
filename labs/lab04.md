---
layout: default
title: "Lab 4: Web Applications II"
---

Your Task
===============

**NOTE: This lab will require a significant effort, and you should start on it as soon as possible.**

Download [CS320\_Lab04.zip](CS320_Lab04.zip) and extract the zip file into a folder named **CS320\_Lab04**

Start Intellij and select **Open** from the main screen and navigate to the **CS320\_Lab04** directory.

This lab assumes that you have completed Lab03 and builds upon the **AddNumbers** and **GuessingGame** examples from that lab.

Lab04 will "force" you to investigate, explore, and learn the structure of a standard WebApp, from **web.xml**, the servlets, the controllers, the model, all the way through the **jsp's**.  You will need to have this kind of familiarity with the WebApp architecture in order to get started on your team project, as well as to be able to make significant technical contributions to any and all aspects of your team project.  

**NOTE:** You must work individually on this lab.  It is imperative that everyone on your team be able to fully comprehend, design, implement, toubleshoot, and debug the complete architecture of a standard client-server application.

**NOTE:** You **are** allowed to use ChatGPT to assist you with this lab.  If you do use ChatGPT, **you must mention it prominently in your comments**.

**NOTE: This lab will require a significant effort, and you should start on it as soon as possible.**

You have six tasks:

* First, you'll need to copy the methods you implemented in **GuessingGameController** and the tests in **GuessingGameControllerTest** and **GuessingGameTest** from lab03. **DO NOT** simply copy the files as this lab uses a different Java package.

* As part of this exercise, implement a complete set of test cases for each of the controller and model classes.  Implement those test cases as you develop each of the following tasks.  A significant portion of the effort on your team project will be creating an extensive and comprehensive set of JUnit test cases - **WHILE YOU ARE DEVELOPING YOUR TEAM PROJECT**.

* Add a third number to the **AddNumbers** example, such that a third number field shows up on the **AddNumbers** web page, and the returned result is the sum of all three numbers.  Your code should check for the same errors as the existing **AddNumbers** example does.  This problem will require changes to the **AddNumbers** servlet, controller, and JSP. To run the new AddNumbers webapp, run **Main.java** (located in **src/main/java/edu.ycp.cs320/lab04/main**) as a Java application and enter the following URL in your web browser:

> [http://localhost:8081/lab04/addNumbers](http://localhost:8081/lab04/addNumbers)

* Create a new WebApp based on the **AddNumbers** example, called **MultiplyNumbers**.  This WebApp should accept two numbers from the user and return the product of those numbers.  It should check for all of the same errors that the existing **AddNumbers** example does.  This problem will require changes to **web.xml**, and the controller (modify the existing **AddNumbersController** and refactor it to **NumbersController**, rather than creating a new controller).  You will also need to create a new **MultiplyNumbers** servlet and new **MultiplyNumbers** jsp file, both of which can be based off the **AddNumbers** versions of those files. Be sure in **web.xml** to name the url route to the servlet **/multiplyNumbers**. To run the new MultiplyNumbers webapp, run **Main.java** (located in **src/main/java/edu.ycp.cs320/lab04/main**) as a Java application and enter the following URL in your web browser:

> [http://localhost:8081/lab04/multiplyNumbers](http://localhost:8081/lab04/multiplyNumbers)

* After you have modified **AddNumbers** and created **MultiplyNumbers** and have them both completely working, modify the existing **Index** jsp file so that you can access all three of the servlets (**AddNumbers**, **MultiplyNumbers**, and **GuessingGame**) from the **Index** page.  Implement this as a collection of three "submit" buttons, each labelled with one of the three functions.  Each button will result in **IndexServlet** issuing a **doGet** to the appropriate jsp. To run the webapp, run **Main.java** (located in **src/main/java/edu.ycp.cs320/lab04/main**) as a Java application and enter the following URL in your web browser:

> [http://localhost:8081/lab04/index](http://localhost:8081/lab04/index)

* After all of the above are working, create a common model class (**Numbers.java**) for **AddNumbers** and **MultiplyNumbers**, such that the numbers submitted through the HTTP request are stored in the model, along with the result.  You will need **get** and **set** accessor methods for all model fields, along with a constructor for the model class.  Look at the model for the **GuessingGame** WebApp as a template - and how that model is instantiated, initialized, and accessed.  The corresponding jsp's should pull the data directly from the **Numbers** model, rather than from the HTTP request.  Again you can look at the **GuessingGame** implementation to see how this is done.

**NOTE: I HIGHLY recommend that you save your work after you have each of the above steps working.**  To that point, I also highly recommend that you use this lab as a means for learning how to use **git** to store your changes on **GitHub**.

*	At a minimum, archive the project at each stage, and submit it to Marmoset.  That will provide a back-up in case you lose your work, or if you need to revert to a previous version of your work.
*	I still **strongly** suggest regularly uploading to Marmoset (preferably to GitHub) so that you can restore your work if your PC dies.

**NOTE:** You must work individually on this lab.  It is imperative that everyone on your team be able to fully comprehend, design, implement, toubleshoot, and debug the complete architecture of a standard client-server application.

Submitting
==========

**NOTE:** You **must** also get this lab signed off by a tutor/mentor or your instructor in order to get credit for it.  Simply submitting the lab to Marmoset without a lab sign-off will **NOT** result in any credit.  **You must get a lab sign-off**.

**[Here is the complete set of tests that will be used to sign-off on your lab.](lab04-signoff-criteria.html)**

Here is a [PDF version of the complete sign-off criteria](CS320-Lab04-WebApplicationsII-LabSignOff.pdf) that you can **download, print, and use as a checkoff list when you get the sign-off for the lab.**

Although you should strive to satisfy all of the above tests, a minimum passing submission must have the following:
* An **operational Index page** that links to all 3 applications
* The **Add Numbers page** must allow entry of three numbers
* A **Numbers.java** model file
* **AddNumbers.jsp** and **MultiplyNumbers.jsp** must pull their field data directly from **Numbers.java** and **NOT** from the original parameter values passed in through the HTTP POST received by the Servlet.
* There will be at least **some test cases** for the methods in **NumbersController.java** and **Numbers.java**

When you are done, submit the lab to the Marmoset server using the method below.

(Ensure you have the **Project to Zip** plugin installed).

Save the project (**CS320\_Lab04**) to a zip file by selecting

> **File &rarr; Export &rarr; Project to Zip File**

Make sure to choose an appropriate location and archive name before saving the archive, or you might unintentionally overwrite an archive that you previously saved.

From a web browser
------------------

Upload the saved zip file to the **Lab 4** project on the Marmoset server. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)


