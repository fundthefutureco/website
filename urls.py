from django.urls import path
from .views.event_views import EventView

urlpatterns = [
    path('events/', EventView.as_view(), name='events'),
] 