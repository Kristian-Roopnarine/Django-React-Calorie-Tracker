from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from knox import views as knox_views


urlpatterns = [
    path('api/auth',include('knox.urls')),
    path('api/auth/register',views.RegistrationAPI.as_view()),
    path('api/profile/<pk>/', views.profile_detail),
]