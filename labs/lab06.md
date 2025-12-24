---
layout: default
title: "Lab 6: JDBC"
---

Getting Started
===============

Download [CS320\_Lab06.zip](CS320_Lab06.zip) and extract the zip file into a folder named **CS320\_Lab06**

Start Intellij and select **Open** from the main screen and navigate to the **CS320\_Lab06** directory.

The lab already contains a database called **test.db**, which is the [books database from Lecture 13](../lectures/lecture13.html), thus you should **not** need to recreate the database.

**NOTE:** You must work individually on this lab.  It is imperative that everyone on your team be able to construct SQL queries, to establish a connection between a Java program and a SQL database, and to write SQL queries embedded in Java code.

Task
====

In the **src/main/java/edu.ycp.cs320/lab06** directory you will find a program called **TitleQuery** which demonstrates basic JDBC tasks such as loading a driver, connecting to a database, creating and executing a prepared statement, and iterating through results returned from a query.

Using **TitleQuery** as a model, write your own programs (separate classes with main() methods) to do the following:

1. Create a class named **BooksByAuthorLastNameQuery** that finds all books written by the author whose last name is specified by the user. Return the books in the same form as the **TitleQuery** program, but sorted in *ascending order* by **Title**.

2. Create a class named **InsertNewBookWithAuthor**: For an existing author, given the full (first and last) name of an author, a title, an ISBN, and the year that the book was published, insert the new book into the database.  Your program must first retrieve the existing author's **author\_id** before inserting the new book entry into the **books** table.

3. Modify **InsertNewBookWithAuthor** to allow insertion of a new book for an author that is not already in the database.  In this case, the program must first add the new author to the **authors** table, and then retrieve the auto-generated **author\_id** for the new author, before inserting the new book into the **books** table.  Hint: This requires multiple steps: 

>   * Attempt to retrieve the **author\_id**. If the result set is empty, add the new author to the **authors** table

>   * Retrieve the **author\_id** that was automatically assigned for the new author

>   * Insert the new book into the **books** table using the SQL **insert** statement to insert the new tuple(s)

Submitting
==========

When you are done, submit the lab to the Marmoset server using the method below.

(Ensure you have the **Project to Zip** plugin installed).

Save the project (**CS320\_Lab06**) to a zip file by selecting

> **File &rarr; Export &rarr; Project to Zip File**

Make sure to choose an appropriate location and archive name before saving the archive, or you might unintentionally overwrite an archive that you previously saved.

From a web browser
------------------

Upload the saved zip file to the **Lab06** project on the Marmoset server. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)

