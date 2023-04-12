function validFName(){
    let fName = document.getElementById("fname").value;
    let regex = /^[A-Z][a-z]*$/;
    if(!regex.test(fName)){
        window.alert("Enter first name that contains: " +
        "First letter upper and other lower" +
        "No symbols" +
        "No numbers"); 
    }
   
}
function validLName(){
    let lName = document.getElementById("lname").value;
    let regex = /^[A-Z][a-z]*$/;
    if(!regex.test(lName)){
       window.alert("Enter last name that contains: " +
        "First letter upper and other lower" +
        "No symbols" +
        "No numbers");
       }

}
function validUni(){
    let uName = document.getElementById("universty").value;
    let regex = /^^[a-zA-Z]{2,4}$/;
    if(!regex.test(uName)){
        alert("Enter the Universty abbreviation name: " +
        "No symbols" +
        "No numbers");
    }
    
}
function validID(){
    let id = (document.getElementById("stdID").value);
    let regex=/^\d{6}$/;
    if(regex.test(id)){
        if(loadedCourses[id] != null){
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
function createNewStudent(){
    if(document.getElementById("fname").value == 0 || document.getElementById("lname").value == 0 || document.getElementById("universty").value == 0 || document.getElementById("ID").value == 0 || document.getElementById("gender").value == 0 || document.getElementById("department").value == 0 || document.getElementById("status").value == 0 || document.getElementById("courses").value == 0 || document.getElementById("birthdate").value == 0){
        alert("Please fill all the fields");
        return;
    }
    else if(!validFName() || !validLName() || !validUni() || !validID())
        return;

}