from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
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
  students = Student.objects.all().values()
  template = loader.get_template('courses.html')
  for course, c in enumerate(courses):
    c['course_students_count'] = 0
    for student, s in enumerate(students):
      if c['course_name'] == s['student_course1'] or c['course_name'] == s['student_course2'] or c['course_name'] == s['student_course3']:
        c['course_students_count'] += 1
        
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
    # form = AddStudentForm(request.POST, error_class=DivErrorList)
    fname = request.POST['fname']
    lname = request.POST['lname']
    university = request.POST['universty']
    id = request.POST['stdID']
    gender = request.POST.get('gender')
    department = request.POST.get('department')
    status = request.POST.get('status')
    course1 = request.POST.get('course1')
    course2 = request.POST.get('course2')
    course3 = request.POST.get('course3')
    birth_date = request.POST.get('birthday')
    student = Student(student_fname = fname , student_lname = lname , student_id = id , student_department = department , student_university = university ,student_gender = gender , student_status = status, student_birthdate = birth_date   )  
    student.save()
    return HttpResponse(student_page(request))

  else:
    template = loader.get_template('add_new_student.html')
    form = AddStudentForm(error_class=DivErrorList)
    context = {
      'form': form,
    }
    return HttpResponse(template.render(context, request))              
    

def hatStudents(request):
    if(request.method == 'GET'):
      students = Student.objects.all().values()
      return JsonResponse({'students': list(students)})
    
def hatCourses(request):
    if(request.method == 'GET'):
      courses = Course.objects.all().values()
      return JsonResponse({'courses': list(courses)})
    
def departments_page(request):
    template = loader.get_template('departments.html')
    return HttpResponse(template.render())

def inactive_students_page(request):
    students = Student.objects.all().values()
    template = loader.get_template('inactive_students.html')
    context = {
        'students': students,
    }
    return HttpResponse(template.render(context, request))

def edit_student_page(request, student_id):
    if request.method == 'POST':
      print(request.POST['fname'])
      fname = request.POST['fname']
      lname = request.POST['lname']
      university = request.POST['universty']
      gender = request.POST.get('gender')
      department = request.POST.get('department')
      status = request.POST.get('status')
      course1 = request.POST.get('course1')
      course2 = request.POST.get('course2')
      course3 = request.POST.get('course3')
      birth_date = request.POST.get('birthday')
      student = Student.objects.all()[student_id-1]
      student.student_fname = fname
      student.student_lname = lname
      student.student_university = university
      student.student_gender = gender
      student.student_department = department
      print(student.student_department)
      print(department)
      student.student_status = status
      student.student_course1 = course1
      student.student_course2 = course2
      student.student_course3 = course3
      student.student_birthdate = birth_date
      student.save()
      return HttpResponse(student_page(request))
    
    else:
      template = loader.get_template('edit_student.html')
      student = Student.objects.all().filter(id=student_id)

      date_str = student[0].student_birthdate.strftime('%Y-%m-%d')

      context = {
          'idd': student_id,
          'fname': student[0].student_fname,
          'lname': student[0].student_lname,
          'university': student[0].student_university,
          'id': student[0].student_id,
          'gender': student[0].student_gender,
          'department': student[0].student_department,
          'birthdate': date_str,
          'status': student[0].student_status,
          'course1': student[0].student_course1,
          'course2': student[0].student_course2,
          'course3': student[0].student_course3,
      }
      return HttpResponse(template.render(context, request))

def delete_student(request, student_id):
  student = Student.objects.all().filter(id=student_id)
  student[0].delete()
  return redirect('/student_page/')
   
