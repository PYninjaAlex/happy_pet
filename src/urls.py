from django.urls import path
from .views import *


urlpatterns = [
    path('', loading),
    path('main-page', main),
    path('main-page/catalog', catalog),
    path('main-page/animals-catalog', animals_catalog),
    path('main-page/about-service', about_service),
    path('main-page/animals-catalog/cats', cats),
    path('main-page/animals-catalog/dogs', dogs),
    path('main-page/animals-catalog/parrots', parrots),
    path('main-page/animals-catalog/hamsters', hamsters),
    path('main-page/animals-catalog/orders', orders),
    path('main-page/animals-catalog/purchase', purchase),
]
