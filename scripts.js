class Student {
  constructor(id,name, department, status, courses) {
    this.id = id;
    this.name = name;
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
    const course1 = document.getElementById('course1');
    const course2 = document.getElementById('course1');
    const course3 = document.getElementById('course3');

    if(dept.value == 0 || status.value == 0 || course1.value == 0 || course2.value == 0 || course3.value == 0){
      window.alert('Please fill all the fields');

    }
    else if(dept.value == 1 && (course1.value != 6 && course1.value!= 7) || (course2.value != 6 && course2.value!= 7) || (course3.value != 6 && course3.value!= 7)){
      window.alert('Please select a course from the list of courses offered by the department');
    }
    else if(dept.value == 2 && (course1.value !=1 && course1.value!=4 && course1.value!=5) || (course2.value !=1 && course2.value!=4 && course2.value!=5) || (course3.value !=1 && course3.value!=4 && course3.value!=5)){
      window.alert('Please select a course from the list of courses offered by the department');
    }
    else if(dept.value == 3 && (course1.value !=3 && course1.value!=4 && course1.value!=7) || (course2.value !=3 && course2.value!=4 && course2.value!=7) || (course3.value !=3 && course3.value!=4 && course3.value!=7)){
      window.alert('Please select a course from the list of courses offered by the department');
    }
    else if(dept.value == 4 && (course1.value !=2 && course1.value!=4) || (course2.value !=2 && course2.value!=4) || (course3.value !=2 && course3.value!=4 )){
      window.alert('Please select a course from the list of courses offered by the department');
    }
    else if(dept.value == 5 && (course1.value !=5) || (course2.value!=5) ||  (course3.value !=5)){
      window.alert('Please select a course from the list of courses offered by the department');
    }

    else{
      window.alert('Form submitted successfully');
      if(status.value == 1){
        window.location.href = 'students.html';
      }
      else{
        window.location.href = 'inactive_students.html';
      }
    }
  }

