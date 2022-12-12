# from django.views import generic  # django generic view

# # to get our longitude and latitude
# from django.contrib.gis.geos import fromstr, Point

# # distance between us and fav places
# from django.contrib.gis.db.models.functions import Distance

# from .models import Myplaces

# from django.http import HttpResponse

# from django.core.serializers import serialize


# longitude = -80.191788

# latitude = 25.761681


# # default location we will use gps geolocation in future totorials.
# my_location = Point(longitude, latitude, srid=4326)


# class Home(generic.ListView):
#     model = Myplaces
#     context_object_name = 'places'
#     queryset = Myplaces.objects.annotate(distance=Distance(
#         'location', my_location)).order_by('distance')[0:6]

#     template_name = 'home.html'

#     def places_dataset(request):
#         place = serialize('geojson', Myplaces.objects.all())
#         return HttpResponse(place, content_type='json')
import os
import sys
from . import forms
from . import models
from django.urls import reverse
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
import datetime
from django.views.generic.base import TemplateView
from django.contrib.gis.geos import Point
import json
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
# from django.http import JsonResponse
# from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from . import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from . import serializers
import overpy


class Home(TemplateView):
    template_name = 'home.html'


@method_decorator(login_required, name='dispatch')
class WorldBorderMapView(TemplateView):
    """Markers map view."""

    template_name = "map.html"


@method_decorator(login_required, name='dispatch')
class AddMarkerWorldBorderMapView(TemplateView):
    """Markers map view."""

    template_name = "addmapmarker.html"


# @login_required
def add_marker_world_border_map_view(request):
    # world_instance = get_object_or_404(models.WorldBorder)
    world_instance = models.WorldBorder()
    form = forms.AddMarkerForm(request.POST)

    # # If this is a POST request then process the Form data
    # if request.method == 'POST':
    #     is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'

    #     if is_ajax:
    #         # my_location = request.POST.get("point", None)
    #         # if not my_location:
    #         #     return JsonResponse({"message": "No location found."}, status=400)
    data = json.load(request)
    todo = data.get('payload')
    print(todo['lat'], os.getcwd())
    world_instance.name = "Current Location"
    pnt = Point(todo['lng'], todo['lat'])
    world_instance.location = pnt
    world_instance.adderuser = request.user
    world_instance.save()
    return JsonResponse({'status': 'Data added!'})

    # # Check if the form is valid:
    # if form.is_valid():
    #     # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
    #     world_instance.name = form.cleaned_data['name']
    #     pnt = Point(form.cleaned_data['lng'], form.cleaned_data['lat'])
    #     world_instance.location = pnt
    #     world_instance.adderuser = request.user
    #     world_instance.save()

    #     # redirect to a new URL:
    #     return redirect('/map')

    # # If this is a GET (or any other method) create the default form.
    # else:
    #     form = forms.AddMarkerForm()

    # return render(request, 'map.html', {'form': form, "world_instance": world_instance, })


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = serializers.MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = serializers.RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def addMarkerEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        # text = request.POST.get('text')
        # data = f'Congratulation your API just responded to POST request with text: {text}'
        # return Response({'response': data}, status=status.HTTP_200_OK)

        world_instance = models.WorldBorder()
        data = json.load(request)
        dataData = data.get('data')
        print(dataData, os.getcwd())
        payload = json.loads(dataData)
        print(payload.get('payload'), os.getcwd())
        todo = payload.get('payload')
        # print(todo, os.getcwd())
        print(todo['lat'], os.getcwd())
        world_instance.name = "Current Location"
        pnt = Point(todo['lng'], todo['lat'])
        world_instance.location = pnt
        world_instance.adderuser = request.user
        world_instance.nameandadderusercombined = str(
            todo['lng']) + str(todo['lat']) + "Current Location"
        world_instance.save()
        return JsonResponse({'status': 'Data added!'})

        # return Response({}, status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def addMarkerEndPointSelected(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        # text = request.POST.get('text')
        # data = f'Congratulation your API just responded to POST request with text: {text}'
        # return Response({'response': data}, status=status.HTTP_200_OK)

        world_instance = models.WorldBorder()
        data = json.load(request)
        dataData = data.get('data')
        print(dataData, os.getcwd())
        payload = json.loads(dataData)
        print(payload.get('payload'), os.getcwd())
        todo = payload.get('payload')
        # print(todo, os.getcwd())
        print(todo['lat'], os.getcwd())
        world_instance.name = "Current Location"
        pnt = Point(todo['lng'], todo['lat'])
        world_instance.location = pnt
        world_instance.adderuser = request.user
        world_instance.nameandadderusercombined = str(
            todo['lng']) + str(todo['lat']) + "Selected Location"
        world_instance.save()
        return JsonResponse({'status': 'Data added!'})


# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def getMarkers(request):
#     if request.method == 'GET':
#         # bbox_filter_field = "location"
#         # filter_backends = (filters.InBBoxFilter,)
#         #queryset = models.WorldBorder.objects.all()
#         queryset = models.WorldBorder.objects.get_queryset()
#         serializer_class = serializers.WorldBorderSerializer

#         def get_queryset(self):
#             """
#             This view should return a list of all the purchases
#             for the currently authenticated user.
#             """
#             user = self.request.user
#             return models.WorldBorder.objects.filter(adderuser=user)

#     elif request.method == 'POST':
#         text = request.POST.get('text')
#         data = f'Congratulation your API just responded to POST request with text: {text}'
#         return Response({'response': data}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def QueryOverpass(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        """
        Query Overpass (OpenStreetMap) API

        This class-based view accepts a request containing a free-form query and the bounding box of the visible map
        viewport. It assumes that the request has a valid user (i.e. is authenticated). The associated serializer ensures
        that the data iss in a correct form before being handled by this view.

        The view uses a Python library called OverPy (Python Overpass API) -
        https://python-overpy.readthedocs.io/en/latest/index.html

        The view process a POST request only.
        """
        # permission_classes = [IsAuthenticated, ]
        serializer_class = serializers.OverpassSerializer

        # def post(self, request, *args, **kwargs):
        #     try:
        # Create overpass API object
        api = overpy.Overpass()

        # Overpass has its own somewhat arcane query language. Fortunately we can make some assumptions and creat
        # a shell which can be 'filled in'. Thus we make a beginning, middle and end of the query. The middle part
        # will be modified to get the details of our query.
        api_query_top = \
            """
            [out:json][timeout:25];
            (
            """

        api_query_bottom = \
            """
            );
            out body;
            >;
            out skel qt;
            """

        api_middle = ""

        # Run our incoming data through the serializer to validate and pre-process it.
        my_serializer = serializers.OverpassSerializer(
            data=request.data.get('data'))
        if my_serializer.is_valid():
            # print("bbox is ", os.getcwd())
            # print(request.data, os.getcwd())
            # data = request.data
            # print("data is ", os.getcwd())
            # print(data.get('data'), os.getcwd())
            # dataData = data.get('data')
            # print("bbox 2 is ", os.getcwd())
            # print(dataData.get('bbox'), os.getcwd())
            # bbox = dataData.get('bbox')
            # query = dataData.get('query')

            # print(dataData, os.getcwd())
            # print(json.load(my_serializer.data), os.getcwd())
            # data = json.load(request)
            # dataData = data.get('data')
            # print(dataData, os.getcwd())
            # payload = json.loads(dataData)
            # print(payload.get('bbox'), os.getcwd())
            bbox = my_serializer.validated_data["bbox"]
            for item in my_serializer.validated_data["query"]:
                if item == "*":
                    api_middle += f'node["amenity"]{tuple(bbox)};\nway["amenity"]{tuple(bbox)};\nrelation["amenity"]{tuple(bbox)};'
                    break
                else:
                    api_middle += f'node["amenity"="{item}"]{tuple(bbox)};\nway["amenity"="{item}"]{tuple(bbox)};\nrelation["amenity"="{item}"]{tuple(bbox)};'

            # OpenStreetMap stores its data as 'Nodes' (Point objects), 'Ways' (Linestring or Polygon objects) or
            # 'Relations' (Used to define logical or geographic relationships between different objects,
            # for example a lake and its island, or several roads for a bus route. In this qquery type I'm focusing
            # on objects tagged as 'amenity' in the database such as cafes, bars, pubs, restaurants etc. You could
            # easily modify this for other types. A result which is a node will have a single point whereas a result
            # which is a way could be a polygon (e.g. the footprint of a pub). For this we need a single point so we
            # compute the centroid of the polygon and use it.
            api_query = f"{api_query_top}\n{api_middle}\n{api_query_bottom}\n"
            result = api.query(api_query)

            # The result should be returned as GeoJSON. A Python dictionarry with a list of 'features' can be easily
            # serialized as GeoJSON
            geojson_result = {
                "type": "FeatureCollection",
                "features": [],
            }

            # This next section iterates thriugh each 'way' and gets its centroid. It also keeps a record of the
            # points in the so that they are not duplicated when we process the 'nodes'
            nodes_in_way = []

            for way in result.ways:
                geojson_feature = None
                geojson_feature = {
                    "type": "Feature",
                    "id": "",
                    "geometry": "",
                    "properties": {}
                }
                poly = []
                for node in way.nodes:
                    # Record the nodes and make the polygon
                    nodes_in_way.append(node.id)
                    poly.append([float(node.lon), float(node.lat)])
                # Make a poly out of the nodes in way.
                # Some ways are badly made so, if we can't succeed just ignore the way and move on.
                try:
                    poly = Polygon(poly)
                except:
                    continue
                geojson_feature["id"] = f"way_{way.id}"
                geojson_feature["geometry"] = json.loads(
                    poly.centroid.geojson)
                geojson_feature["properties"] = {}
                for k, v in way.tags.items():
                    geojson_feature["properties"][k] = v

                geojson_result["features"].append(geojson_feature)

            # Process results that are 'nodes'
            for node in result.nodes:
                # Ignore nodes which are also in a 'way' as we will have already processed the 'way'.
                if node.id in nodes_in_way:
                    continue
                geojson_feature = None
                geojson_feature = {
                    "type": "Feature",
                    "id": "",
                    "geometry": "",
                    "properties": {}
                }
                point = Point([float(node.lon), float(node.lat)])
                geojson_feature["id"] = f"node_{node.id}"
                geojson_feature["geometry"] = json.loads(point.geojson)
                geojson_feature["properties"] = {}
                for k, v in node.tags.items():
                    geojson_feature["properties"][k] = v

                geojson_result["features"].append(geojson_feature)

            # Return the complete GeoJSON structure.
            return Response(geojson_result, status=status.HTTP_200_OK)
            # except Exception as e:
            #     return Response({"message": f"Error: {e}."}, status=status.HTTP_400_BAD_REQUEST)
