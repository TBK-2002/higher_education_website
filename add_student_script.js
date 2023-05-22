class Student {
    constructor(id,fname,lname,university, gender , department, status , course1 ,course2 , course3, birthdate ) {
      this.id = id;
      this.fname = fname;
      this.lname = lname;
      this.university = university;
      this.gender = gender;
      this.department = department;
      this.stat = status;
      this.course1 = course1;
      this.course2 = course2;
      this.course3 = course3;
      this.birthdate = birthdate;

    }
  }


function loadStudents(){
    let loadedstudents = {};
    if(localStorage.students){
        loadedstudents = JSON.parse(localStorage.students);
    }
    return loadedstudents;
}

function saveCourse(){
    if(document.getElementById("confirmID").value == ""){
        alert("Please select a student first");
        return;
    }
    let crs1 = document.getElementById("crs1").value;
    let crs2 = document.getElementById("crs2").value;
    let crs3 = document.getElementById("crs3").value;
    if(crs1 == crs2 || crs1 == crs3 || crs2 == crs3){
        alert("Courses must be different");
        return;
    }
    let loadedStudents = loadStudents();
    loadedStudents[document.getElementById("confirmID").value].course1 = document.getElementById("crs1").value;
    loadedStudents[document.getElementById("confirmID").value].course2 = document.getElementById("crs2").value;
    loadedStudents[document.getElementById("confirmID").value].course3 = document.getElementById("crs3").value;
    localStorage.setItem("students", JSON.stringify(loadedStudents));
    alert("Student courses updated successfully! ");
    window.location.href="students.html";
}

function display_students(){
  let loadedStudents = loadStudents();
  let content = "";
  std_name = document.getElementById("std-name").value;
  std_name = std_name.toLowerCase();
  std_fname = std_name.split(" ")[0];
  std_lname = std_name.split(" ")[1];
  

        content += "<tr>";
        let cnt = 0;
        for(var i in loadedStudents){
            if(loadedStudents[i].stat == "Inactive")
                continue;
      if((std_fname == null && std_lname == null)||(loadedStudents[i].fname.toLowerCase().includes(std_fname) || loadedStudents[i].lname.toLowerCase().includes(std_lname)) ||  (loadedStudents[i].fname.toLowerCase() == std_fname && loadStudents[i].lname.toLowerCase() == std_lname)){
       if((document.getElementById('filter_dept').value == loadedStudents[i].department || document.getElementById('filter_dept').value == 0)){  
            content+="<td>";
            content+="<div class = 'card'>";
            content+="<h2>" + loadedStudents[i].fname + " "+loadedStudents[i].lname +"</h2>";
            content+="<p>University: " + loadedStudents[i].university + "</p>";
            content+="<p> ID: "+ loadedStudents[i].id +"</p>";
            content+="<p>Department: " + loadedStudents[i].department + "</p>";
            content+="<p>gender: "+loadedStudents[i].gender +"</p>";
            content+="<div style='margin: 24px 0;'>";   
            content+="</div>";
            content+="<button><a href=\"edit_student.html\">Edit</a></button>";
            content+="<button><a href=\"edit_courses.html\">Edit Courses</a></button>";
            content+="</div>";
            content+="</td>";
            if((cnt+1)%2 == 0){
                content += "</tr>";
                content += "<tr>";
            }
            cnt++;
        }
 
}
        }
  
content += "</tr>";
document.getElementById("students").innerHTML = content;


}

function display_inactive_students(){
  let loadedStudents = loadStudents();
  let content = "";
  std_name = document.getElementById("inactive_search").value;
  std_name = std_name.toLowerCase();
  std_fname = std_name.split(" ")[0];
  std_lname = std_name.split(" ")[1];
  

        content += "<tr>";
        let cnt = 0;
        for(var i in loadedStudents){
            if(loadedStudents[i].stat == "Active")
                continue;
      if((std_fname == null && std_lname == null)||(loadedStudents[i].fname.toLowerCase().includes(std_fname) || loadedStudents[i].lname.toLowerCase().includes(std_lname)) ||  (loadedStudents[i].fname.toLowerCase() == std_fname && loadStudents[i].lname.toLowerCase() == std_lname)){        
       if((document.getElementById("inactive_filter").value == loadedStudents[i].department || document.getElementById("inactive_filter").value == 0)){  
            content+="<td>";
            content+="<div class = 'inactive_card'>";
            content+="<h2>" + loadedStudents[i].fname + " "+loadedStudents[i].lname +"</h2>";
            content+="<p>University: " + loadedStudents[i].university + "</p>";
            content+="<p> ID: "+ loadedStudents[i].id +"</p>";
            content+="<p>Department: " + loadedStudents[i].department + "</p>";
            content+="<p>gender: "+loadedStudents[i].gender +"</p>";
            content+="<div sstyle='margin: 24px 0;'>";   
            content+="</div>";
            content+="<button><a href=\"edit_student.html\">Edit</a></button>";
            content+="<button><a href=\"edit_courses.html\">Edit Courses</a></button>";
            content+="</div>";
            content+="</td>";
            if((cnt+1)%2 == 0){
                content += "</tr>";
                content += "<tr>";
            }
            cnt++;
        }
 
}}
  
content += "</tr>";
document.getElementById("inactive_students").innerHTML = content;

}

let loadedStudents = loadStudents();   
function validFName(){
let fName = document.getElementById("fname").value;
let regex = /^[A-Z][a-z]*$/;
if(!regex.test(fName)){
    window.alert("Enter first name that contains: " + '\n'+
    "First letter upper and other lower" + '\n'+
    "No symbols" + '\n'+
    "No numbers");
    return false;
}
return true;

}
function validLName(){
    let lName = document.getElementById("lname").value;
    let regex = /^[A-Z][a-z]*$/;
    if(!regex.test(lName)){
    window.alert("Enter last name that contains: "  + '\n'+
        "First letter upper and other lower" +  '\n'+
        "No symbols" + '\n'+
        "No numbers");
    return false;
    }
    return true;

}
function validUni(){
    let uName = document.getElementById("universty").value;
    let regex = /^[a-zA-Z]{2,4}$/;
    if(!regex.test(uName)){
        alert("Enter the Universty abbreviation name: " + '\n'+
        "No symbols" + '\n'+
        "No numbers");
        return false;
    }
    return true;
    
}
function validID(){
    let id = (document.getElementById("stdID").value);
    let regex=/^[0-9]{8}$/;
    if(regex.test(id)){
        if(loadedStudents[id] != null){
            alert("ID already exists");
            return false;
        }
        else{
            return true;
        }
    }
    else{
        alert("Please enter a valid ID");
        return false;
    }
}

function validCourses(){
    let course1 = document.getElementById("course1").value;
    let course2 = document.getElementById("course2").value;
    let course3 = document.getElementById("course3").value;
    if(course1 == course2 || course1 == course3 || course2 == course3){
        alert("Please enter different courses");
        return false;
    }
    else{
        return true;
    }
}


function createNewStudent(){
    let loadedCourses = loadCourses();
    if(document.getElementById("fname").value == 0 || document.getElementById("lname").value == 0 || document.getElementById("universty").value == 0 || document.getElementById("stdID").value == 0 || document.getElementById("gender").value == 0 || document.getElementById("dep").value == 0 || document.getElementById("status").value == 0 || document.getElementById("course1").value == 0 ||document.getElementById("course2").value == 0 || document.getElementById("course3").value == 0 || document.getElementById("birthday").value == 0){
        alert("Please fill all the fields");
    }
    else if(!validID() || !validFName()|| !validLName()|| !validUni() || !validCourses()){
        return;
    }
    else{
        window.alert("Student added successfully");
        loadedStudents[document.getElementById("stdID").value] = new Student (
            id = document.getElementById("stdID").value,
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            university =  document.getElementById("universty").value,
            gender = document.getElementById("gender").value,
            department = document.getElementById("dep").value,
            stat = document.getElementById("status").value,
            course1 = document.getElementById("course1").value,
            course2 = document.getElementById("course2").value,
            course3 = document.getElementById("course3").value,
            birthdate = document.getElementById("birthday").value
        );
        loadedCourses[document.getElementById("course1").value].studentsCount++;
        loadedCourses[document.getElementById("course2").value].studentsCount++;
        loadedCourses[document.getElementById("course3").value].studentsCount++;
        localStorage.setItem("courses", JSON.stringify(loadedCourses));
        localStorage.setItem("students", JSON.stringify(loadedStudents));
        if(document.getElementById("status").value == "Active"){
            window.location.href = "students.html";
        }
        else{
            window.location.href = "inactive_students.html";
        }
        window.alert("Student added successfully");
    }

}
