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