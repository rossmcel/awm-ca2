from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_gis import serializers
from rest_framework import serializers as rest_serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import string

from . import models


class WorldBorderSerializer(serializers.GeoFeatureModelSerializer):
    """Marker GeoJSON serializer."""

    class Meta:
        """Marker serializer meta class."""

        fields = ("id", "name")
        geo_field = "location"
        model = models.WorldBorder


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = rest_serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = rest_serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise rest_serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class OverpassSerializer(rest_serializers.Serializer):
    """
    Serializer to take in a query data to be passed on to the Overpass API.
    """
    query = rest_serializers.CharField(required=True)
    bbox = rest_serializers.CharField(required=True)

    def to_internal_value(self, data):
        """
        Converts incoming JSON strings into appropriate Python representation. Especially important for the
        'bbox' (bounding box) object which becomes a list with floats.
        :param data: JSON incoming
        :return: Dict of appropriate types
        """

        # In this section we parse the query and get rid of any 'stop words' and punctuation.
        STOPWORDS = ('and', 'or', 'amenity', '=', '==')
        internal_rep = {}
        if data.get("query", None):
            query = data["query"]
            mod_query = ""
            for char in query:
                if char in string.punctuation:
                    mod_query += " "
                else:
                    mod_query += char
            mod_query = mod_query.split()
            query = []
            for word in mod_query:
                if word.lower() not in STOPWORDS:
                    query.append(word)

            internal_rep["query"] = query
        if data.get("bbox", None):
            bbox = data["bbox"].split(",")
            # When dealing with Geo data there can be inconsistencies in how coordinates are handled. We generally
            # say 'Lat, Lon' in common usage but the 'x' axis more correctly corresponds to Lon, not Lat, hence GEOS
            # objects like Point() expect data in Lon, Lat sequence. Overpass, however, expects Lat, Lon.
            # So, leaflet gives us a bounding box as ({west}, {south}, {north}, {east}) but Overpass needs it to be
            # ({south},{west},{north},{east}). Therefore, we shuffle the numbers.
            shuffled_bbox = [bbox[1], bbox[0], bbox[3], bbox[2]]
            mod_bbox = [float(item) for item in shuffled_bbox]
            internal_rep["bbox"] = mod_bbox

        return internal_rep
