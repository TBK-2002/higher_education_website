from django.db import models

class Course(models.Model):
    course_name = models.CharField(max_length=200)
    course_id = models.CharField(max_length=20)
    course_department = models.CharField(max_length=200)
    course_hours = models.IntegerField(default=0)
    course_day = models.CharField(max_length=200)
    course_hall = models.IntegerField(default=0)
    course_students_count = models.IntegerField(default=0)
    def __str__(self):
        return self.course_name
    
class Student(models.Model):
    student_fname = models.CharField(max_length=20)
    student_lname = models.CharField(max_length=20)
    student_id = models.CharField(max_length=20)
    student_department = models.CharField(max_length=15)
    student_university = models.CharField(max_length=20)
    student_gender = models.CharField(max_length=10)
    student_status = models.CharField(max_length=10)
    student_birthdate = models.DateField()
    student_courses = models.ManyToManyField(Course)

    def __str__(self):
        return self.student_id
    