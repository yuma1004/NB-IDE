from django.urls import path
from . import views

app_name = 'Task_app'
urlpatterns = [
    path('', views.index)
]
