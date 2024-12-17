from django.urls import path
from .views import MusicListView

urlpatterns = [
    path('', MusicListView.as_view(), name='index'),
]