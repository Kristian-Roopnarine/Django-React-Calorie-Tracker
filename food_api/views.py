from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FoodSerializer
from .models import Food

# Create your views here.

class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer