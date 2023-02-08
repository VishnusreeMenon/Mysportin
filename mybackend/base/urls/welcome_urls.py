from django.urls import path
from base.views import welcome as views


urlpatterns = [
    path('', views.index, name='register'),

   
]
