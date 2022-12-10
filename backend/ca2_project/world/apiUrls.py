from django.urls import path, include
from . import views
from . import viewsets

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    # path('', include("world.api")),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('map/add/', views.addMarkerEndPoint,
         name='add-marker-world-border-map-view'),
    path('map/add/selected', views.addMarkerEndPointSelected,
         name='add-marker-world-border-map-view-selected'),
    path('', include("world.api"))
]
