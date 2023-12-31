from django.urls import path
from . import views



urlpatterns = [
     path('users/login/', views.MyTkonObtainPariView.as_view(), name='token_obtain_pair'),
     path('users/register/', views.registerUser, name='user-register'),
     path('users/', views.getUsers, name='users'),
     path('users/profile', views.getUserProfile, name='user-profile'),
     path('products/',views.getProducts,name="products"),
     path('products/<str:pk>',views.getProduct,name="product")
]
