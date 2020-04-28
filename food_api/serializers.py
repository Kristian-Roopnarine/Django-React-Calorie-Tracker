from rest_framework import serializers
from .models import Food,APIS

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

class APISSerializer(serializers.ModelSerializer):
    class Meta:
        model = APIS
        fields=['api_key']