function loadStudents(){
    let loadedstudents = {};
    if(localStorage.students){
        loadedstudents = JSON.parse(localStorage.students);
    }
    return loadedstudents;
}