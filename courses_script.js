function loadCourses(){
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     localStorage.courses = this.responseText;
    //   }
    //   let content = "";
    //   content += "<tr>";
    //   let tmp = JSON.parse(localStorage.courses);
    //   for(let i = 0; i < tmp.length; i++){
    //     content+="<td>";
    //     content+="<div class = 'card'>";
    //     content+="<h2>" + tmp[i].name + "</h2>";
    //     content+="<p class='title1'>" + tmp[i].id + "</p>";
    //     content+="<p>Barvard University</p>";
    //     content+="<p>Number of Students: " + tmp[i].noStudents + "</p>";
    //     content+="<p>Department: " + tmp[i].department + "</p>";
    //     content+="<div style='margin: 24px 0;'>";
    //     content+="</div>";
    //     content+="</div>";
    //     content+="</td>";
    //     if((i+1)%3 == 0){
    //       content += "</tr>";
    //       content += "<tr>";
    //     }
    //   }
    //   content += "</tr>";
    //   document.getElementsByClassName("cards")[0].innerHTML = content;
    // };
    // xhttp.open("GET", "/courses.json", true);
    // xhttp.send();

    let loadedCourses = {};
    if(localStorage.courses){
      loadedCourses = JSON.parse(localStorage.courses);
    }
    return loadedCourses;
}

function display_courses(){
  let loadedCourses = loadCourses();
  let content = "";
    crs_name = document.getElementById("course-name").value;
    crs_name = crs_name.toLowerCase();
    crs_fname = crs_name.split(" ")[0];
    crs_lname = crs_name.split(" ")[1];
  content += "<tr>";
  let cnt = 0;
  for(var i in loadedCourses){
if((crs_lname == null && crs_lname == null)||(loadedCourses[i].fname.toLowerCase().includes(crs_fname) || loadedCourses[i].lname.toLowerCase().includes(crs_lname)) ||  (loadedCourses[i].fname.toLowerCase() == crs_fname && loadedCourses[i].lname.toLowerCase() == crs_lname)){
    if(document.getElementById("course-name").value == loadedCourses[i].department || document.getElementById("course-name").value == 0){
        content+="<td>";
        content+="<div class = 'card'>";
        content+="<h2>" + loadedCourses[i].name + "</h2>";
        content+="<p class='title1'>" + loadedCourses[i].id + "</p>";
        content+="<p>Barvard University</p>";
        content+="<p>Number of Students: " + loadedCourses[i].studentsCount + "</p>";
        content+="<p>Department: " + loadedCourses[i].department + "</p>";
        content+="<div style='margin: 24px 0;'>";
        content+="</div>";
        content+="</div>";
        content+="</td>";
        if((cnt+1)%3 == 0){
            content += "</tr>";
            content += "<tr>";
        }
        cnt++;
    }


    }
}
    content += "</tr>";
    document.getElementsByClassName("cards")[0].innerHTML = content;

};

/*
content+="<td>";
    content+="<div class = 'card'>";
    content+="<h2>" + loadedCourses[i].name + "</h2>";
    content+="<p class='title1'>" + loadedCourses[i].id + "</p>";
    content+="<p>Barvard University</p>";
    content+="<p>Number of Students: " + loadedCourses[i].studentsCount + "</p>";
    content+="<p>Department: " + loadedCourses[i].department + "</p>";
    content+="<div style='margin: 24px 0;'>";
    content+="</div>";
    content+="</div>";
    content+="</td>";
    if((cnt+1)%3 == 0){
        content += "</tr>";
        content += "<tr>";
    }
    cnt++;
  }
  content += "</tr>";
  document.getElementsByClassName("cards")[0].innerHTML = content;
 */