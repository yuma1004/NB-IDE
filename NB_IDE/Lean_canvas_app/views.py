from django.shortcuts import render


def index(req):
    return render(req, 'lean-canvas-app ver2/index.html')
