from django.shortcuts import render


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