from django.http import HttpResponse, JsonResponse
from django.template import loader
from .forms import AddCourseForm

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