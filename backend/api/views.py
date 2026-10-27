from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def home(request):
	return Response({
		"message": "Hello from Django Framework!",
		"status" : "success",
})

@api_view(["GET"])
def about(request):
	return Response({
		"message" : "Hello About Page!",
		"status" : "success",
	})