from django.views import View
from django.http import JsonResponse
from ..utils.decorators import admin_required
from ..models import Event
import json

class EventView(View):
    def get(self, request):
        # Anyone can view events
        events = Event.objects.all()
        return JsonResponse({'events': list(events.values())})

    @admin_required
    def post(self, request):
        # Only admins can create events
        data = json.loads(request.body)
        event = Event.objects.create(
            title=data['title'],
            description=data.get('description', ''),
            start_date=data['start_date'],
            end_date=data['end_date'],
            created_by=request.user
        )
        return JsonResponse({'event': {
            'id': event.id,
            'title': event.title,
            'description': event.description,
            'start_date': event.start_date,
            'end_date': event.end_date
        }}) 