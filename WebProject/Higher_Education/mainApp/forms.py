from django import forms

class AddCourseForm(forms.Form):
    name = forms.CharField(required=True)
    id = forms.CharField(required=True)
    department = forms.CharField(required=True)
    lecture_day = forms.CharField(required=True)
    hall_number = forms.IntegerField(required=True)