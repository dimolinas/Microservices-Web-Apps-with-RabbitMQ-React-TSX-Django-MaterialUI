from django.urls import path

from .views import HouseViewSet
from .views import CheckerAPIView

# Defining the URL paths and CRUD actions:
urlpatterns = [
    path('houses', HouseViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('houses/<str:pk>', HouseViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),

    path('checker', CheckerAPIView.as_view())
]