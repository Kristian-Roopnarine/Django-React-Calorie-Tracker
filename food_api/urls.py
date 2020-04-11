from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('api/food',views.FoodViewSet)

urlpatterns = [
    #path('',include(router.urls)),
    path('api/user-nutrition/',views.daily_nutrition),
    path('api/food/<pk>/',views.food_detail) 
]