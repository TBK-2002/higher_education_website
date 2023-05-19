from django.urls import path
from . import views

urlpatterns = [
    path('home_page/', views.home_page, name='home_page'),
    path('main_page/', views.main_page, name='main_page'),
]