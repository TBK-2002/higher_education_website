from django.http import HttpResponse
from django.template import loader

from .forms import AddCourseForm, DivErrorList , AddStudentForm
from .models import Course, Student

def home_page(request):
  template = loader.get_template('home_page.html')
  return HttpResponse(template.render())

def main_page(requeset):
  template = loader.get_template('main_page.html')
  return HttpResponse(template.render())

def courses_page(requeset):
  courses = Course.objects.all().values()
  template = loader.get_template('courses.html')
  context = {
    'courses': courses,
  }
  return HttpResponse(template.render(context, requeset))

def student_page(requeset):
    students = Student.objects.all().values()
    template = loader.get_template('students.html')
    context = {
        'students': students,
    }
    return HttpResponse(template.render(context, requeset))

def add_course_page(request):
  if request.method == "POST":
    form = AddCourseForm(request.POST, error_class=DivErrorList)
    if form.is_valid():
      name = form.cleaned_data['name']
      id = form.cleaned_data['id']
      department = form.cleaned_data['department']
      lecture_day = form.cleaned_data['lecture_day']
      hall_number = form.cleaned_data['hall_number']
      course = Course(course_name=name, course_id=id, course_department=department, course_day=lecture_day, course_hall=hall_number)
      course.save()
      return HttpResponse(courses_page(request))
    else:
      template = loader.get_template('add_new_course.html')
      context = {
        'form': form,
      }
      return HttpResponse(template.render(context, request))

  else:
    template = loader.get_template('add_new_course.html')
    form = AddCourseForm(error_class=DivErrorList)
    context = {
      'form': form,
    }
    return HttpResponse(template.render(context, request))
  
def add_student_page(request):
  if request.method == 'POST':
    form = AddStudentForm(request.POST, error_class=DivErrorList)
    if form.is_valid():
      fname = form.cleaned_data['fname']
      lname = form.cleaned_data['lname']
      university = form.cleaned_data['university']
      id = form.cleaned_data['id']
      gender = form.cleaned_data['gender']
      department = form.cleaned_data['department']
      status = form.cleaned_data['status']
      course1 = form.cleaned_data['course1']
      course2 = form.cleaned_data['course2']
      course3 = form.cleaned_data['course3']
      birth_date = form.cleaned_data['birth_date']
      student = Student(student_fname = fname , student_lname = lname , student_id = id , student_department = department , student_university = university ,student_gender = gender , student_status = status , student_birthdate = birth_date , student_courses = {course1 , course2 , course3} )  
      student.save()
      return HttpResponse(student_page(request))
    else:
      template = loader.get_template('add_new_student.html')
      context = {
        'form': form,
      }
      return HttpResponse(template.render(context, request))   
  else:
    template = loader.get_template('add_new_student.html')
    form = AddStudentForm(error_class=DivErrorList)
    context = {
      'form': form,
    }
    return HttpResponse(template.render(context, request))              
    




