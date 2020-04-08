from django.shortcuts import render,get_object_or_404
from rest_framework import viewsets,generics
from .serializers import ProfileSerializer,UserSerializer,RegisterSerializer,LoginSerializer
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Profile,User
from rest_framework.decorators import api_view
from rest_framework import permissions
# Create your views here.

@api_view(['GET'])
def profile_detail(request,pk):
    profile = Profile.objects.get(id=pk)
    serializer = ProfileSerializer(profile)
    return Response(serializer.data)


class RegistrationAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self,request,*args,**kwargs):
        # all data is going to be in the request argument
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":token
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":token
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user