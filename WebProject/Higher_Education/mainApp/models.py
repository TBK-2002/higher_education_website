from django.db import models

class Course(models.Model):
    course_name = models.CharField(max_length=200)
    course_id = models.IntegerField(default=0)
    course_department = models.CharField(max_length=200)
    course_hours = models.IntegerField(default=0)
    course_day = models.CharField(max_length=200)
    course_hall = models.IntegerField(default=0)
    course_students_count = models.IntegerField(default=0)
    def __str__(self):
        return self.course_name
    