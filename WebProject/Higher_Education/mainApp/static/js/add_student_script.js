function getStudents(){
    let students = {};
    $.ajax({
        url: "/hatStudents",
        type: "GET",
        success: function(data){
            for(std in data['students']){
                students[data["students"][std].student_id] = data["students"][std];
            }
        },
        error: function(error){
            console.log(error);
        }
    })
    return students;
}

function getCourses(){
    let courses = {};
    $.ajax({
        url: "/hatCourses",
        type: "GET",
        success: function(data){
            for(course in data['courses']){
                courses[data["courses"][course].course_id] = data["courses"][course];
            }
        },
        error: function(error){
            console.log(error);
        }
    })
    return courses;
}


loadedStudents = getStudents();
loadedCourses = getCourses();

function showoptions(){
    // clear previous options
    console.log(document.getElementsByName("department")[0].value);
    document.getElementsByName("course1")[0].innerHTML = "";
    document.getElementsByName("course2")[0].innerHTML = "";
    document.getElementsByName("course3")[0].innerHTML = "";
    let courses = {};
    $.ajax({
        url: "/hatCourses",
        type: "GET",
        success: function(data){
            for(course in data['courses']){
                courses[data["courses"][course].course_id] = data["courses"][course];
            }
            for(crs in courses){
                if(courses[crs].course_department == document.getElementsByName("department")[0].value){
                    const option = document.createElement("option");
                    const optionText = document.createTextNode(courses[crs].course_name);
                    option.appendChild(optionText);
                    option.setAttribute("value", courses[crs].course_name);
                    document.getElementsByName("course1")[0].appendChild(option);
                    document.getElementsByName("course2")[0].appendChild(option.cloneNode(true));
                    document.getElementsByName("course3")[0].appendChild(option.cloneNode(true));
                }
            }
        },
        error: function(error){
            console.log(error);
        }
    })
}

function validFName(){
    let fName = document.getElementById("fname").value;
    let regex = /^[A-Z][a-z]*$/;
    if(!regex.test(fName)){
        window.alert("Enter first name that contains: " + '\n'+
        "First letter upper and other lower" + '\n'+
        "No symbols" + '\n'+
        "No numbers");
        return false;
    }
    return true;
}
function validLName(){
    let lName = document.getElementById("lname").value;
    let regex = /^[A-Z][a-z]*$/;
    if(!regex.test(lName)){
    window.alert("Enter last name that contains: "  + '\n'+
        "First letter upper and other lower" +  '\n'+
        "No symbols" + '\n'+
        "No numbers");
    return false;
    }
    return true;

}
function validUni(){
    let uName = document.getElementById("universty").value;
    let regex = /^[a-zA-Z]{2,4}$/;
    if(!regex.test(uName)){
        alert("Enter the Universty abbreviation name: " + '\n'+
        "No symbols" + '\n'+
        "No numbers");
        return false;
    }
    return true;
    
}
function validID(){
    let id = (document.getElementById("stdID").value);
    let regex=/^[0-9]{8}$/;
    if(regex.test(id)){
        if(loadedStudents[id] != null){
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

function validCourses(){
    let course1 = document.getElementsByName("course1")[0].value;
    let course2 = document.getElementsByName("course2")[0].value;
    let course3 = document.getElementsByName("course3")[0].value;
    if(course1 == course2 || course1 == course3 || course2 == course3){
        alert("Please enter different courses");
        return false;
    }
    else{
        return true;
    }
}


function validateForm(){
    if(document.getElementById("fname").value == 0 || document.getElementById("lname").value == 0 || document.getElementById("universty").value == 0 || document.getElementById("stdID").value == 0 || document.getElementById("gender").value == 0 || document.getElementById("dep").value == 0 || document.getElementById("status").value == 0 || document.getElementById("course1").value == 0 ||document.getElementById("course2").value == 0 || document.getElementById("course3").value == 0 || document.getElementById("birthday").value == 0){
        alert("Please fill all the fields");
        return false;
    }
    return validFName() && validLName() && validUni() && validID() && validCourses();
}

function validateEditForm(){
    if(document.getElementById("fname").value == 0 || document.getElementById("lname").value == 0 || document.getElementById("universty").value == 0 || document.getElementById("stdID").value == 0 || document.getElementById("gender").value == 0 || document.getElementById("dep").value == 0 || document.getElementById("status").value == 0 || document.getElementById("course1").value == 0 ||document.getElementById("course2").value == 0 || document.getElementById("course3").value == 0 || document.getElementById("birthday").value == 0){
        alert("Please fill all the fields");
        return false;
    }
    return validFName() && validLName() && validUni() && validCourses();
}
