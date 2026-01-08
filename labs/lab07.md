---
layout: default
title: "Lab 7: ORM"
---

Getting Started
===============

Download [CS320\_Lab07.zip](CS320_Lab07.zip) and extract the zip file into a folder named **CS320\_Lab07**

Start Intellij and select **Open** from the main screen and navigate to the **CS320\_Lab07** directory.

Execute the **DerbyDatabase** class located in **src/main/edu.ycp.cs320/lab07/persist** as a Java application to create the **test.db** database (which is the [books database from Lecture 13](../lectures/lecture13.html)). You should see the following output:

    Creating tables...
    Loading initial data...
    Success!

If you refresh your **CS320_Lab07** project, you should see the **test.db** directory. **Note:** You **only** need to do this **once** (unless you corrupt your database).

**NOTE:** You must work individually on this lab.  It is imperative that everyone on your team be able to construct SQL queries, to establish a connection between a Java program and a SQL database, and to write SQL queries embedded in Java code.

**You will also automatically fail the course, as well as receive an Academic Integrity Violation, if you submit work that was completed by someone else, and/or submit any portion of code taken from the Library Example Project that I provide as part of the course.**

Task
====

In **src/main/edu.ycp.cs320/lab07** you will find a class called **TitleQuery** which demonstrates using an ORM interface to find all books that have the title entered by the user (along with the author information).

Your task is very similar to [Lab 6](lab06.html), except that rather than directly executing database queries/statements, you will add methods to the **IDatabase** interface and implement them in **BOTH** **FakeDatabase** and **DerbyDatabase**. **Note:** Having an *interface* to the persistence layer allows for different implementations of the database **without** affecting the application code.

Using **TitleQuery** as a model, write your own programs (separate classes with main() methods) to do the following:

1. Create a class named **BooksByAuthorLastNameQuery** that finds all books written by the author whose last name is specified by the user. Return the books in the same form as the **TitleQuery** program, but sorted in *ascending order by* **Title**.  This is the same SQL query as **problem 1** from [Lab 6](lab06.html).  You are welcome to use code from the JDBC lab (Lab06) solution that I posted, or reuse your code from your own solution.

2. Create a class named **InsertNewBookWithAuthor** where given the full (first and last) name of an author, a title, an ISBN, and a publish year, inserts the book into the database. The program should add a new tuple to the **authors** table if the author doesn't already exist. If the author already exists, the program should use that author's **author\_id**.  Use the SQL **insert** statement to insert the new tuple(s).  **NOTE:**  This is the same set of SQL queries as **problem 3** from [Lab 6](lab06.html).  You are welcome to use code from the JDBC lab (Lab06) solution that I posted, or reuse your code from your own solution.

## Hints

For the first task, add the following method to **IDatabase**:

    public List<Pair<Author, Book>> findAuthorAndBookByAuthorLastName(String lastname);

Implement it in **FakeDatabase** and **DerbyDatabase**.  Start by implementing the method in **FakeDatabase** (just have the method in **DerbyDatabase** throw an **UnsupportedOperationException**.) to test your query.

For the second task, first do a query to see if the author exists.  If the author doesn't exist, insert the new author into the **authors** table.  (Note: you will want to allow the database to automatically assign an **author\_id**).  Then, retrieve the **author\_id** so that you can insert a new tuple into the **books** relation (again, the database will automatically assign a **book\_id**).  Note that the entire operation should be executed as part of a **single transaction**.

Submitting
==========

When you are done, submit the lab to the Marmoset server using the method below.

(Ensure you have the **Project to Zip** plugin installed).

Save the project (**CS320\_Lab07**) to a zip file by selecting

> **File &rarr; Export &rarr; Project to Zip File**

Make sure to choose an appropriate location and archive name before saving the archive, or you might unintentionally overwrite an archive that you previously saved.

From a web browser
------------------

Upload the saved zip file to the **Lab 7** project on the Marmoset server. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)
