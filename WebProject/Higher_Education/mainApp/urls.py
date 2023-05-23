from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('main_page/', views.main_page, name='main_page'),
    path('courses_page/', views.courses_page, name='courses_page'),
    path('add_course_page/', views.add_course_page, name='add_course_page'),
    path('add_student_page/', views.add_student_page, name='add_student_page'),
    path('student_page/', views.student_page, name='student_page'),
    path('hatStudents', views.hatStudents, name='hatStudents'),
    path('hatCourses', views.hatCourses, name='hatCourses'),
    path('departments_page' , views.departments_page , name='departments_page'),
    path('inactive_students_page' , views.inactive_students_page , name='inactive_students_page'),
    path('edit_student_page/<int:student_id>', views.edit_student_page, name='edit_student_page'),
    path('delete_student/<int:student_id>', views.delete_student, name='delete_student'),
]