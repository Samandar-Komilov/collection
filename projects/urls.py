from django.urls import path
from . import views

urlpatterns = [
    path('colorflipper', views.ColorFlipper, name='ColorFlipper')
]
