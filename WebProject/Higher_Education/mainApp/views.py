from django.http import HttpResponse
from django.template import loader

def home_page(request):
  template = loader.get_template('home_page.html')
  return HttpResponse(template.render())

def main_page(requeset):
  template = loader.get_template('main_page.html')
  return HttpResponse(template.render())