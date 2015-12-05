//$("#main").append("mitiu");

/*


//console.log(bio.skills);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLemail.replace("%data%", bio.contact);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelc = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skill);
*/

//work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description

var work = {
	"jobs" : [
		{
			"employer" : "Tecnodinamica",
			"title" : "Capo Officina",
			"city" : "Farra",
			"dates" : "2006-2009",
			"desrciption" : "dicevo cosa fare"
		},
		{
			"employer" : "IKS",
			"title" : "Consulente",
			"city" : "Padova",
			"dates" : "2013-attuale",
			"desrciption" : "Mi stresso per la maggior parte de tempo"			
		}
	]
}

//education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.

var education = {
	"schools": [{
		"name": "IPSIA",
		"city": "Conajan",
		"degree": "Diploma",
		"dates" : "2000-2004",
		"major": ["OM", "TIM"],
		"URL" : "http://www.ipsiaconegliano.gov.it/"
	}, {
		"name": "Unipd",
		"city": "Padova",
		"degree": "Laurea Triennale",
		"dates" : "2009-2013",
		"major": ["CompSci"],
		"URL" : "http://www.unipd.it/"
	}],
	"onlineCourses" : [
		{
			"title" : "Intro to Computer Science",
			"school" : "Udacity",
			"dates" : "2015",
			"URL" : "https://www.udacity.com/course/viewer#!/c-cs101/"
		},
		{
			"title" : "Intro to Computer Science",
			"school" : "Udacity",
			"dates" : "2015",
			"URL" : "https://www.udacity.com/course/viewer#!/c-ud304/"
		}
	]
}


//bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location

//var skills = ["a", "b", "c"];
//[0]+' '+skills[1]+' '+skills[3]


var bio = {
	"name" : "Mitiu",
	"role" : "Consultant",
	"pic" : "images/fry.jpg",
	"welcome" : "Hello!",
	"contacts" : 
		{
			"mobile" : "3331234567",
			"email" : "contact@me.com",
			"github" : "mitiu",
			"twitter" : "Twitter",
			"city" : "Colfrancui"
		},
	"skills" : [
		"a", 
		"b", 
		"c"
	]
}

//projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images

var projects = {
	"title" : "Migrazione Benetton",
	"dates" : "2013",
	"description" : "Abbiamo migrato i firewall di Benetton",
	"images" : [
		"https://it.wikipedia.org/wiki/Benetton_(azienda)#/media/File:Logo_Benetton.svg",
		"http://www.interoute.com/sites/default/files/images/Press%20Release%20Content/CheckPointSoftwareTechnologies.jpg"
	]
}


/*

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContact);
$("#header").append(formattedPic);
$("#header").append(formattedWelc);
$("#header").append(formattedSkills);



*/


/*
This is empty on purpose! Your code to build the resume will go here.
 */