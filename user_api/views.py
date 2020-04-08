from django.shortcuts import render,get_object_or_404
from rest_framework import viewsets,generics
from .serializers import ProfileSerializer,UserSerializer,RegisterSerializer
from rest_framework.response import Response
from knox.models import AuthToken
from .models import Profile,User
from rest_framework.decorators import api_view
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


