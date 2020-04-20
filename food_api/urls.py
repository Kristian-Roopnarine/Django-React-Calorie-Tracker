from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('api/food',views.FoodViewSet)

urlpatterns = [
    #path('',include(router.urls)),
    path('api/user-nutrition/',views.daily_nutrition),
    path('api/food/<pk>/',views.food_detail),

    # react component URLS
    path('api/breakfast',views.breakfast_list),
    path('api/lunch',views.lunch_list),
    path('api/dinner',views.dinner_list), 
    path('api/snacks',views.snack_list),   
    path('api/cheat',views.cheat_list), 
]