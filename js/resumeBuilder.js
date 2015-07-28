var bio = {
  "name": "Don Petersen",
  "role": "Front-end Web Developer",
  "welcomeMessage": "Hello, I'm Don and I web development",
  "contacts": {
    "mobile": "(707)410-6746",
    "email": "don.jess.petersen@gmail.com",
    "github": "Howlinmad",
    "twitter": "@dizzymono",
    "location": "Sacramento, CA"
  },
  "bioPic": "images/DJ_BEACH.jpg",
  "skills": ["JS", "HTML", "CSS", "C#", "C++", "Visual Studio"],
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(" "));
      $("#skills").append(formattedSkill);
    }
  }
};

var work = {
    "jobs": [ {        
        "employer": "Applebee's",
        "title": "Server",
        "location": "Sacramento, Ca",
        "dates": "March, 2007 - September 2010",
        "description": "Ensure that guests have an enjoyable dining experience by providing quality customer service."
    },{
        "employer": "Red Lobster",
        "title": "Server",
        "location": "Sacramento, Ca",
        "dates": "August, 2005 - January, 2007",
        "description": "Ensure that guests have an enjoyable dining experience by providing quality customer service."
    },{
        "employer": "State of California Commission on Teacher Credentialing",
        "title": "Student Assistant",
        "location": "Sacramento, Ca",
        "dates": "October, 2005 - May, 2006",
        "description": "Assist in office duties."
    },{
        "employer": "Hungry Hunter",
        "title": "Server",
        "location": "Fairfield, Ca",
        "dates": "January, 2005 - August, 2005",
        "description": "Ensure that guests have an enjoyable dining experience by providing quality customer service."
    },{
        "employer": "Brenden Theater",
        "title": "Attendant",
        "location": "Vacaville, Ca",
        "dates": "October, 2004 - January, 2005",
        "description": "Assist patrons at entertainment events collecting admission tickets and passes from patrons, handling and preparing food/beverages, and assisting in finding seats."
    },{
        "employer": "Total Vending",
        "title": "Driver",
        "location": "Fairfield, Ca",
        "dates": "August, 2001 - October, 2004",
        "description": "Maintain and collect money from various vending machines in the California Bay Area."
    },{
        "employer": "Scandia Family Fun Center",
        "title": "Attendant",
        "location": "Fairfield, Ca",
        "dates": "Novermber, 1999 - August, 2001",
        "description": "Assist patrons at park attractions by collecting admission tickets and passes from patrons, handling and preparing food/beverages,  groundskeeping, and basic machine maintenance."
} ],
  display: function() {
    for (var e in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[e].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[e].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[e].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var education = {
  "schools": [{
    "name": "Baker College",
    "location": "Flint, MI",
    "degree": "Bachelors",
    "majors": ["Computer Science"],
    "graduation": "Dec 2015",
    "url": "www.baker.edu"
  },{
    "name": "American River Community College",
    "location": "Sacramento, Ca",
    "degree": "Associates in Liberal Arts",
    "majors": ["General Studies"],
    "graduation": "May, 2010",
    "url": "http://www.arc.losrios.edu/"
  }],
  "onlineCourses": [
 {
        "title": "Into to HTML and CSS",
        "school": "Udacity", 
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
    },{
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity", 
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
    },{
        "title": "Responsive Images",
        "school": "Udacity", 
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd"
    },{
        "title": "Version Control with Git and GitHub",
        "school": "Udacity", 
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
    },{
        "title": "JavaScript Basics",
        "school": "Udacity", 
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
    } ],
  displaySchools: function() {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
    }
  },
  displayOnlinCourses: function() {
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
      }
    }
  }
};

var project = {
  "projects": [{
    "title": "Portfolio Website",
    "url": "https://github.com/howlinmad/Portfolio-Project",
    "dates": "June, 2015",
    "description": "Website showcasing my portfolion of projects",
    "image": ["images/portfolio_pic.jpg"]
  },{
    "title": "Resume Website",
    "url": "https://github.com/howlinmad",
    "dates": "July, 2015",
    "description": "Website showcasting my Resume",
    "image": ["images/resume_pic.jpg"]
  }],
  display: function() {
    for (var e in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
      formattedTitle = formattedTitle.replace("%url%", project.projects[e].url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[e].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  }
};

//puts locations of jobs in work objects into an array
function locationizer(work_obj) {
    var locArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locArray.push(newLocation);
    }
    return locArray;
}    

//Function from Internationalizer Uppercase Name Generator Section of JS Course
//function inName() {
//    var name1 = bio.name.trim().split(" ");
//    name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
//    name1[1] = name1[1].toUpperCase();
//    return name1[0] + " " + name1[1];
//}

//displays the pixel x,y values of click in the DOM
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;    
    logClicks(x,y);
});


// Calls display functions in each section
bio.display();
project.display();
work.display();
education.displaySchools();
education.displayOnlinCourses();

$("#mapDiv").append(googleMap);