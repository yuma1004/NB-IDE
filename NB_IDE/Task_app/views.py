from django.shortcuts import render

def index(req):
    return render(req, 'task-app ver2/index.html')
