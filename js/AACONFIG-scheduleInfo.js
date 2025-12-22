// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 0: Course Overview", "lectures/lecture00.html", "Prep Exam", "CS320-Sp26-Prep-Exam.txt"),
	},
	{
		topic: new Topic("Lecture 1: Software Engineering Introduction, Calendar, Project", "lectures/lecture01.html"),
 		lab: new NumberedLab(0, "Using ChatGPT")
	},
 	{
 		topic: new Topic("Lecture 2: OOP and ChatGPT", "lectures/lecture02.html"),
 		lab: new NumberedLab(1, "HTML and CSS")
 	},
// 	{
// 		topic: new TripleTopic("Lecture 4: GUIs and MVC", "lectures/lecture04.html", "CS201_Lecture04_Gradle.zip", "examples/CS201_Lecture04_Gradle.zip", "CS201_GUIMVCDemo_Gradle.zip","examples/CS201_GUIMVCDemo_Gradle.zip"),
// 		lab: new NumberedLabGradle(4, "Drag and Drop GUI")
// 	},
// 	{
// 		topic: new DoubleTopic("Lecture 5: Overloading, JUnit", "lectures/lecture05.html", "CS201_Lecture05_Gradle.zip", "examples/CS201_Lecture05_Gradle.zip"),
// 		lab: new NumberedLabGradle(5, "Testing Overloaded Constructors")
// 	},
//  	{
//  		topic: new DoubleTopic("Lecture 6: File I/O, Exceptions", "lectures/lecture06.html", "CS201_Lecture06_Gradle.zip","examples/CS201_Lecture06_Gradle.zip"),
//  		reading: "2.5&ndash;2.6",
//  		lab: new NumberedLabGradle(6, "Text File I/O")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 7: Exceptions", "lectures/lecture07.html", "CS201_Lecture07_Gradle.zip", "examples/CS201_Lecture07_Gradle.zip"),
//  		reading: "2.5",
//  		lab: new NumberedLabGradle(7, "Exceptions")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 8: Inheritance", "lectures/lecture08.html", "CS201_Lecture08_Gradle.zip","examples/CS201_Lecture08_Gradle.zip"),
//  		reading: "4.1&ndash;4.2",
//  		lab: new NumberedLabGradle(8, "Inheritance and Polymorphism")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 9: Inheritance (continued)", "lectures/lecture09.html", "CS201_Lecture09_Gradle.zip","examples/CS201_Lecture09_Gradle.zip"),
//  		reading: "4.3&ndash;4.4",
//  		lab: new NumberedLabGradle(9, "Inheriting Fields and Methods")
//  	},
//  	{
//  		topic: new Topic("Exam 1 Review", "")
//  	},
//  	{
//  		topic: new Topic("** Exam 1", "")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 10: Type casts, instanceof, Object class, Interfaces", "lectures/lecture10.html", "CS201_Lecture10_Gradle.zip","examples/CS201_Lecture10_Gradle.zip"),
//  		lab: new NumberedLabGradle(10, "Comparable, Sorting")
//  	},
//  	{
//  		topic: new TripleTopic("Lecture 11: Generic methods and classes", "lectures/lecture11.html", "CS201_Lecture11_Gradle.zip","examples/CS201_Lecture11_Gradle.zip", "CS201_Lecture11_Gradle_Final.zip","examples/CS201_Lecture11_Gradle_Final.zip"),
//  		reading: "4.5&ndash;4.7",
//  		lab: new NumberedLabGradle(11, "Using Generic Containers and Algorithms")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 12: Generic methods, functors", "lectures/lecture12.html", "CS201_Lecture12_Gradle.zip","examples/CS201_Lecture12_Gradle.zip"),
//  		reading: "4.8",
//  		lab: new NumberedLabGradle(12, "Functors")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 13: Analysis of Algorithms", "lectures/lecture13.html", "Lecture 14: Big-O", "lectures/lecture14.html"),
//  		reading: "5.1&ndash;5.3",
//  		lab: new DoubleNumberedLabGradleNoFile(13, "Benchmarking ArrayList", 14, "Big-O")
//  	},
// //	{
// //		topic: new Topic("AWS Setup", ""),
// //		reading: "Canvas videos",
// //		lab: new NumberedLabGradle(7, "Inheritance AWS Test")
// //	},
// //	{
// //		topic: new Topic("Lecture 13: Big-O", "lectures/lecture13.html"),
// //		reading: "5.4&ndash;5.8",
// //		lab: new NumberedLabNoFile(13, "Big-O")
// //	},
//  	{
//  		topic: new DoubleTopic("Lecture 15: Collections, Iterators", "lectures/lecture15.html", "CS201_Lecture15_Gradle.zip","examples/CS201_Lecture15_Gradle.zip"),
//  		reading: "6.1-6.3",
//  		lab: new NumberedLabGradle(15, "Iterators, Interleaving")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 16: Generic Algorithms", "lectures/lecture16.html", "CS201_Lecture16_Gradle.zip","examples/CS201_Lecture16_Gradle.zip"),
//  		reading: "6.4",
//  		lab: new NumberedLabGradle(16, "Generic Algorithms")
//  	},
//  	{
//  		topic: new Topic("** SPARTAN DAY", "")
//  	},
//  	{
//  		topic: new Topic("Exam 2 Review", "")
//  	},
//  	{
//  		topic: new Topic("** Exam 2", "")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 18: Parallel Programming with Threads", "lectures/lecture18.html", "CS201_Lecture18_Gradle.zip","examples/CS201_Lecture18_Gradle.zip"),
//  		lab: new NumberedLabGradle(18, "Parallel Estimation of π")
//  	},
//  	{
//  		topic: new TripleTopic("Lecture 17: Lists", "lectures/lecture17.html","Lecture 19: Stacks and Queues", "lectures/lecture19.html", "CS201_Lecture19_Gradle.zip","examples/CS201_Lecture19_Gradle.zip"),
//  		reading: "6.5-6.6",
//  		lab: new DoubleNumberedLabGradle(17, "List Reversal", 19, "Palindromes")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 20: Sets and Maps", "lectures/lecture20.html", "CS201_Lecture20_Gradle.zip","examples/CS201_Lecture20_Gradle.zip"),
//  		reading: "6.7-6.8",
//  		lab: new NumberedLabGradle(20, "Word Count")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 21: Recursion", "lectures/lecture21.html", "CS201_Lecture21_Gradle.zip","examples/CS201_Lecture21_Gradle.zip"),
//  		reading: "7.1, 7.3",
//  		lab: new NumberedLabGradle(21, "Recursion")
//  	},
//  	{
//  		topic: new Topic("Lecture 22: Proof by Induction", "lectures/lecture22.html"),
//  		reading: "7.2",
//  		lab: new NumberedLabNoFile(22, "Proof by Induction")
//  	},
//  	{
//  		topic: new DoubleTopic("Lecture 23: Memoization and Dynamic Programming", "lectures/lecture23.html", "CS201_Lecture23_Gradle.zip","examples/CS201_Lecture23_Gradle.zip"),
//  		reading: "7.6",
//  		lab: new NumberedLabGradle(23, "Binomial Coefficient")
//  	},
// // 	{
// // 		topic: new Topic("Lecture 23: Merge and Quick Sort", "lectures/lecture23.html"),
// // 		reading: "8.5-8.6",
// // 		lab: new Lab("No lab", "")
// // 	},
//  	{
//  		topic: new Topic("Exam 3 Review", "")
//  	},
//  	{
//  		topic: new Topic("** Exam 3", "")
//  	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/10/2026 14:45:00")),
];

// vim:ts=2:
