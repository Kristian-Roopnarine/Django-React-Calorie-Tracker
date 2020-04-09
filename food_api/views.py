from django.shortcuts import render
from rest_framework import viewsets,permissions
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .serializers import FoodSerializer
from .models import Food
from user_api.models import Profile
from user_api.serializers import UserSerializer,ProfileSerializer
from django.utils import timezone
from datetime import datetime as dt,timedelta
# Create your views here.

class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


# need a view to return the food eaten on a certain day for a user
@api_view(['GET','POST'])
@permission_classes([permissions.IsAuthenticated,])
def daily_nutrition(request):
    """
    ** GET
    api/user-nutrition/

    json
    {"data":[
        {
            "name":"test",
            "total_calories":"500",
            "fat":"5",
            "protein:"10",
            "carbs":"15",
            "category":"S",
            "date_eaten":todays_date,
            "user":{
                "id":1,
                "username":"bob",
            }
        },
    ]}

    ** POST
    api/user-nutrition/

    json
    {"data":[
        {
            "name":"test", (optional)
            "total_calories":"500",
            "fat":"5",
            "protein:"10",
            "carbs":"15",
            "category":"S",
            "date_eaten":todays_date, (optional)
        },
    ]}
    """
    if request.method == 'GET':
        today = dt.now().date()
        tomorrow = today + timedelta(1)
        user_food = Food.objects.filter(user=request.user.profile.id,date_eaten__gt=today,date_eaten__lt=tomorrow)
        user_food = FoodSerializer(user_food,many=True)
        return Response({"message":"success","user_food":user_food.data})
    if request.method == 'POST':
        profile = Profile.objects.get(id=request.user.profile.id)
        serializer = FoodSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=profile)
        return Response({"message":"success","data":serializer.data})
