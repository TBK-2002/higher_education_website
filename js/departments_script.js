function loadDepartment(){
    if(!localStorage.dep){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200)
        localStorage.dep = this.responseText;
      }
      xhttp.open("GET", "/departments.json", true);
      xhttp.send();
    }
    let loadDepart = {};
    if(localStorage.dep){
        loadDepart = JSON.parse(localStorage.dep);
    }
    return loadDepart;
};

function showOptions(){
    let courses = loadCourses();
    let departments = loadDepartment();
    let dept = document.getElementById("dep").value;
    let content = "";
    content+= "<option value='0'>Select Course 1:</option>";
    for(let i in departments[dept].courses){
        content+= "<option value='"+departments[dept].courses[i]+"'>"+courses[departments[dept].courses[i]].name+"</option>";
    }
    document.getElementById("course1").innerHTML = content;
    document.getElementById("course2").innerHTML = content;
    document.getElementById("course3").innerHTML = content;
};

function showOptions_editCourse(){
    let courses = loadCourses();
    let departments = loadDepartment();
    let dept = document.getElementById("dep").value;
    let content = "";
    content+= "<option value='0'>Select Course 1:</option>";
    for(let i in departments[dept].courses){
        content+= "<option value='"+departments[dept].courses[i]+"'>"+courses[departments[dept].courses[i]].name+"</option>";
    }
    document.getElementById("crs1").innerHTML = content;
    document.getElementById("crs2").innerHTML = content;
    document.getElementById("crs3").innerHTML = content;
};
