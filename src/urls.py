from django.urls import path
from .views import *


urlpatterns = [
    path('', loading),
    path('main-page', main),
    path('main-page/catalog', catalog),
    path('main-page/animals-catalog', animals_catalog)
]
