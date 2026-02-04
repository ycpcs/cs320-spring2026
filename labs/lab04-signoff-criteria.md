---
layout: default
title: "Lab04: Web Applications II Lab Sign-Off"
---

Tests for Web Applications II Lab Sign-Off
===============

☐ Pull up **Lab04** in Intellij

☐ Pull up **Index page**: Verify that the there are links/buttons for **AddNumbers**, **MultiplyNumbers**, and **GuessingGame**.

☐ Go to **Add Numbers** from **Index page**: **AddNumbers** page appears, with three number fields.

☐ Enter **three numbers**: Get correct sum.
 
☐ Delete **third number**: Get correct error message: **"Please enter 3 numbers"** (required), fields have original values (extra credit).
 
☐ Replace **third number** with **"abc"**: Get correct error message: **"Invalid double"** (required), fields have original values (extra credit).

☐ Go back to the **Index Page**.

☐ Go to **Multiply Numbers**: **MultiplyNumbers** page appears, with two number fields.
 
☐ Enter **two numbers**: Get correct product.
 
☐ Delete **first number**: Get correct error message: **"Please enter 2 numbers"** (required), all fields have original values (extra credit).

☐ Replace **first number** with **"abc"**: Get correct error message: **"Invalid double"** (required), all fields have original values (extra credit).

☐ Go back to **Index Page**.

☐ Go to **Guessing Game**: **GuessingGame** page appears, **"Start Game"** displayed.

☐ Use **33** as the number: Press correct buttons, application eventually guesses 33.  Sequence of guesses: **50** -> **25** -> **37** -> **31** -> **34** -> **32** -> **33**.

☐ Pull up **Numbers.java**: Verify encapsulation.  Model attributes are private, and public constructor(s), getters, setters have been provided.

☐ Pull up **addNumbersServlet.java**: Verify **ONLY** **error message** and **model** parameters are being set in the HTTP request.

☐ In **addNumbersServlet.java**: Verify MVC is followed.  **NO** direct calls to **Numbers** model setter methods.  Only controller methods used to change **Numbers** model attributes.

☐ In **multiplyNumbersServlet.java**: Verify MVC is followed.  **NO** direct calls to **Numbers** model setter methods.  Only controller methods used to change **Numbers** attributes.

☐ Pull up **addNumbers.jsp**: Verify it **ONLY** pulls model data directly from **Numbers** model parameter.

☐ Run JUnit tests for **NumbersControllerTests.java** and **NumbersTests.java** methods: Test cases exist and pass.  Complete test cases cover **constructor**(s), **getter**(s), **setter**(s), and **add** and **multiply** methods.