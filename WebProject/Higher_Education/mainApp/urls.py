from django.urls import path
from . import views

urlpatterns = [
    path('home_page/', views.home_page, name='home_page'),
    path('main_page/', views.main_page, name='main_page'),
    path('courses_page/', views.courses_page, name='courses_page'),
    path('add_course_page/', views.add_course_page, name='add_course_page'),
]