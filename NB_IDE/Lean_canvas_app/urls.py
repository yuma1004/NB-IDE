from django.urls import path
from . import views

app_name = 'Lean_canvas_app'
urlpatterns = [
    path('', views.index)
]
