from django.http import HttpResponse
from django.template import loader
from .forms import AddCourseForm

from .forms import AddCourseForm, DivErrorList
from .models import Course

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