function loadDepartment(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200)
        localStorage.dep = this.responseText;
      }
    xhttp.open("GET", "/departments.json", true);
    xhttp.send();
    let loadDepart = {};
    if(localStorage.dep){
        loadDepart = JSON.parse(localStorage.dep);
    }
    return loadDepart;
};