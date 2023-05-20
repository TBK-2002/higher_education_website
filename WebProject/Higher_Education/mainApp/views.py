from django.http import HttpResponse
from django.template import loader

from .forms import AddCourseForm
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
  template = loader.get_template('add_new_course.html')
  form = AddCourseForm()
  context = {
    'form': form,
  }
  return HttpResponse(template.render(context, request))