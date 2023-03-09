from django.shortcuts import render


def loading(request):
    return render(request, "loading.html")


def main(request):
    return render(request, "main_page.html")


def catalog(request):
    return render(request, "catalog.html")


def animals_catalog(request):
    return render(request, "animals-catalog.html")