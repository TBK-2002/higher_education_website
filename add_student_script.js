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






