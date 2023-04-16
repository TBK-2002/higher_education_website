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
      if((std_lname == null && std_lname == null)||(loadedStudents[i].fname.toLowerCase().includes(std_fname) || loadedStudents[i].lname.toLowerCase().includes(std_lname)) ||  (loadedStudents[i].fname.toLowerCase() == std_fname && loadStudents[i].lname.toLowerCase() == std_lname)){        
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
 
}}
  
content += "</tr>";
document.getElementById("students").innerHTML = content;




}
