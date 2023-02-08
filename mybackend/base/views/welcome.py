from urllib import response
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse("<em>Welcome to index view</em>")