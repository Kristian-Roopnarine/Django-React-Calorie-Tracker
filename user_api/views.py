from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProfileSerializer,UserSerializer
from .models import Profile,User
# Create your views here.

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer