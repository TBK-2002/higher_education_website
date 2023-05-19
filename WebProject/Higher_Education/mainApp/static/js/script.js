
function home_page_navigate(){
  window.location.replace("../main_page");
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


  

