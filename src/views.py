from django.shortcuts import render
from django.shortcuts import HttpResponse


def loading(request):
    """
    Loading page.
    :param request:
    :return:
    """
    return render(request, "loading.html")


def main(request):
    """
        Main page.
        :param request:
        :return:
    """
    return render(request, "main_page.html")


def orders(request):
    """
        Main page.
        :param request:
        :return:
    """
    return HttpResponse("<h1>NotImplemented</h1> TODO")


def catalog(request):
    """
        Catalog
        :param request:
        :return:
    """
    return render(request, "catalog.html")


def animals_catalog(request):
    """
        Animals catalog.
        :param request:
        :return:
    """
    return render(request, "animals-catalog.html")


def about_service(request):
    """
        About service.
        :param request:
        :return:
    """
    return HttpResponse("<h1>NotImplemented</h1> TODO")


def cats(request):
    """
        Cats page.
        :param request:
        :return:
    """
    return render(request, "animals/cats.html")


def dogs(request):
    """
        Dogs page.
        :param request:
        :return:
    """
    return render(request, "animals/dogs.html")


def parrots(request):
    """
        Parrots page.
        :param request:
        :return:
    """
    return HttpResponse("<h1>NotImplemented</h1> TODO")


def hamsters(request):
    """
        Hamsters page.
        :param request:
        :return:
    """
    return HttpResponse("<h1>NotImplemented</h1> TODO")
