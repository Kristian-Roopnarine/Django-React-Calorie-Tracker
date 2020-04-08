from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['id','daily_calories','weight','goal_weight','user']


# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
        extra_kwargs = {'password':{'write_only':True}}


    def create(self,validated_data):
        user = User.objects.create_user(username=validated_data['username'],password=validated_data['password'])
        return user


# Login serializer