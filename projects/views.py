from django.shortcuts import render

def ColorFlipper(request):
  return render(request, 'projects/colorflipper/index.html')

def counter(request):
  return render(request, 'projects/counter/index.html')