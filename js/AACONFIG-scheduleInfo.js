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
 	{
 		topic: new DoubleTopic("Lecture 3: HTML and CSS", "lectures/lecture03.html","Individual Project Introduction","assign/assignI01.html"),
 		lab: new NumberedLab(1, "HTML and CSS")
 	},
 	{
 		topic: new Topic("Team Project Introduction", "assign/assignT01.html"),
 	},
  	{
  		topic: new Topic("Lecture 4: Git for Designers", "https://web.archive.org/web/20150301060509/http://hoth.entp.com/output/git_for_designers.html"),
  		lab: new NumberedLab(2, "Git Lab, Part I")
  	},
  	{
  		topic: new Topic("Review ChatGPT and HTML/CSS Labs", ""),
  	},
  	{
  		topic: new Topic("Lecture 5: Web Applications I", "lectures/lecture05.html"),
  		lab: new NumberedLab(3, "Web Applications I")
  	},
  	{
  		topic: new Topic("Lecture 5: Web Applications, cont.", "lectures/lecture05.html"), 
  		lab: new NumberedLab(4, "Web Applications II")
  	},
  	{
  		topic: new DoubleTopic("Lecture 6: Software Development Processes", "lectures/lecture06.html", "Lecture 7: Agile Process", "lectures/lecture07.html"),
  		reading: "UD: Chap 2 <br> Scrum Guide"
  	},
  	{
  		topic: new Topic("Lecture 8: Requirements", "lectures/lecture08.html"),
  		reading: "UD: Chap 9"
  	},
  	{
  		topic: new Topic("Lecture 9: Use Cases", "lectures/lecture09.html"),
  		reading: "UD: Chap 9"
  	},
  	{
  		topic: new DoubleTopic("Lecture 10: OOA", "lectures/lecture10.html", "Lecture 11: UML Diagrams","lectures/lecture11.html"),
  		reading: "UD: Chap 3"
  	},
  	{
  		topic: new Topic("** Individual MS1 Presentations", ""),
  	},
  	{
  		topic: new Topic("Team Work Session: Analysis and Design", ""),
  	},
  	{
  		topic: new DoubleTopic("Lecture 12: OO Design, OCP, LSP, Design Principles and Patterns", "lectures/lecture12.html", "Team Work Session: Analysis and Design", ""),
  	},
	{
		topic: new Topic("Team Work Session: Analysis and Design, Git Set-up", ""),
	},
	{
		topic: new Topic("Team Work Session: Analysis and Design, UML", ""),
	},
	{
		topic: new Topic("Team Work Session: Analysis and Design", ""),
	},
	{
		topic: new Topic("Team Work Session: Analysis and Design", ""),
	},
	{
		topic: new Topic("Team Work Session: Prep for MS1", ""),
	},
	{
		topic: new Topic("Team Work Session: Prep for MS1", ""),
	},
	{
		topic: new Topic("** TEAM MS1 PRESENTATIONS", ""),
	},
  	{
  		topic: new Topic("** Individual MS2 Presentations", ""),
  	},
  	{
  		topic: new Topic("Lecture 13: Relational Databases", "lectures/lecture13.html"),
  		lab: new NumberedLab(5, "SQL")
  	},
  	{
  		topic: new Topic("Lecture 14: DB Applications, JDBC", "lectures/lecture14.html"),
  		lab: new NumberedLab(6, "JDBC")
  	},
  	{
  		topic: new Topic("Lecture 15: ORM", "lectures/lecture15.html"),
  		lab: new NumberedLab(7, "ORM")
  	},
  	{
  		topic: new Topic("Team Work Session: Prep for MS2", "")
  	},
  	{
  		topic: new Topic("** TEAM MS2 PRESENTATIONS", "")
  	},
  	{
  		topic: new Topic("ORM Review", ""),
  	},
  	{
  		topic: new Topic("Lecture 16: DB Testing", "lectures/lecture16.html"),
  	},
  	{
  		topic: new Topic("Lecture 17: Quality Assurance", "lectures/lecture17.html"),
  	},
  	{
  		topic: new Topic("** Individual MS3 Presentations", ""),
  	},
  	{
  		topic: new Topic("Library Example Project", ""),
  	},
  	{
  		topic: new Topic("Team Work Session: Prep for MS3", "")
  	},
  	{
  		topic: new Topic("** TEAM MS3 PRESENTATIONS", "")
  	},
  	{
  		topic: new Topic("Team Work Session", "")
  	},
  	{
  		topic: new Topic("Team Work Session", "")
  	},
  	{
  		topic: new Topic("Team Work Session", "")
  	},
  	{
  		topic: new Topic("Team Work Session", "")
  	},
  	{
  		topic: new Topic("Team Work Session", "")
  	},
  	{
  		topic: new Topic("Team Work Session", "")
  	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("Final Presentations", new Date("05/04/2026 14:45:00")),
];

// vim:ts=2:
