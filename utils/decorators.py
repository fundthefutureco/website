from functools import wraps
from django.core.exceptions import PermissionDenied

def admin_required(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if not request.user.is_authenticated:
            raise PermissionDenied("You must be logged in to perform this action.")
        if not request.user.is_admin:
            raise PermissionDenied("You must be an administrator to perform this action.")
        return view_func(request, *args, **kwargs)
    return _wrapped_view 