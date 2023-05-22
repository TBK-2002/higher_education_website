from django import forms
from django.core.validators import RegexValidator
from django.forms.utils import ErrorList
from .models import Course


nameValidator = RegexValidator(r'^[a-zA-Z]+$', 'Only letters are allowed.')
idValidator = RegexValidator(r'^[a-zA-Z]{2}[0-9]{3}$', 'ID must be 2 letters followed by 3 numbers.')
departemntChoices = (('CS', 'CS'), ('DS', 'DS'), ('IS', 'IS'), ('IT', 'IT'), ('AI', 'AI'))
genderChoices = (('Male' , 'Male') ,  ('Female' , 'Female'))
weekDays = (('Saturday', 'Saturday'), ('Sunday', 'Sunday'), ('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'))


class DivErrorList(ErrorList):
     def __str__(self):
         return self.as_divs()

     def as_divs(self):
         if not self: return ''
         return ''.join(['<script>alert(\"%s\")</script>' % e for e in self])
               
class AddCourseForm(forms.Form):
    name = forms.CharField(
        required=True, 
        max_length=50,
        validators=[nameValidator])
    id = forms.CharField(
        required=True,
        max_length=5,
        validators=[idValidator])
    department = forms.ChoiceField(choices=departemntChoices, required=True)
    lecture_day = forms.ChoiceField(choices=weekDays, required=True)
    hall_number = forms.IntegerField(required=True, min_value=1, max_value=20)

class AddStudentForm(forms.Form):
    First_Name = forms.CharField(
        required=True,
        max_length=50,
        validators=[nameValidator])
    Last_Name = forms.CharField(
        required=True,
        max_length=50,
        validators=[nameValidator])
    University = forms.CharField(
        required=True,
        max_length=50,
        validators=[nameValidator])
    
    Department = forms.ChoiceField(
        choices=departemntChoices, 
        required=True)
    # id = forms.IntegerField(required=True, min_value=1, max_value=99999999)
    Gender = forms.ChoiceField(choices = genderChoices , required=True)
    Status = forms.ChoiceField(choices = (('Active' , 'Active') , ('Inactive' , 'Inactive')) , required=True)
    # Courses = forms.ModelMultipleChoiceField(queryset=Course.objects.get(course_department=department), required=True)
    # courses.course1 = forms.ModelChoiceField(queryset=None, required=True)
    # courses.course2 = forms.ModelChoiceField(queryset=None, required=True)
    # courses.course3 = forms.ModelChoiceField(queryset=None, required=True)
    birth_date = forms.DateField(required=True)
    
  
    