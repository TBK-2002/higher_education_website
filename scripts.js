class Student {
  constructor(university, department, status, courses) {
    this.university = university;
    this.department = department;
    this.status = status;
    this.courses = courses;
  }
}

  function home_page_navigate(){
    window.location.href = 'main_page.html';
  }


  function validateForm(){

  
    const dept = document.getElementById('dept');
    const status = document.getElementById('status');
    const course1 = doccument.getElementById('course1');
    const course2 = document.getElementById('course2');
    const course3 = document.getElementById('course3');

    if(dept == 0 || status == 0 || course1 == 0 || course2 == 0 || course3 == 0){
      window.alert('Please fill all the fields');
      return false;
    }
  
    return true;
  }