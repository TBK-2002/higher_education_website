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
    document.getElementsByName("course1")[0].innerHTML = "";
    document.getElementsByName("course2")[0].innerHTML = "";
    document.getElementsByName("course3")[0].innerHTML = "";

    for(crs in loadedCourses){
        if(loadedCourses[crs].course_department == document.getElementsByName("department")[0].value){
            const option = document.createElement("option");
            const optionText = document.createTextNode(loadedCourses[crs].course_name);
            option.appendChild(optionText);
            option.setAttribute("value", loadedCourses[crs].course_name);
            document.getElementsByName("course1")[0].appendChild(option);
            document.getElementsByName("course2")[0].appendChild(option.cloneNode(true));
            document.getElementsByName("course3")[0].appendChild(option.cloneNode(true));
        }
    }
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
    let course1 = document.getElementById("course1").value;
    let course2 = document.getElementById("course2").value;
    let course3 = document.getElementById("course3").value;
    if(course1 == course2 || course1 == course3 || course2 == course3){
        alert("Please enter different courses");
        return false;
    }
    else{
        return true;
    }
}


function validateForm(){
    return validFName() && validLName() && validUni() && validID() && validCourses();
}