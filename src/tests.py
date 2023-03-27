from django.test import TestCase


class ViewsTests(TestCase):
    def test_loading(self):
        response = self.client.get("")
        self.assertEqual(response.status_code, 200)

    def test_main(self):
        response = self.client.get("/main-page")
        self.assertEqual(response.status_code, 200)

    def test_catalog(self):
        response = self.client.get("/main-page/catalog")
        self.assertEqual(response.status_code, 200)

    def test_animals_catalog(self):
        response = self.client.get("/main-page/animals-catalog")
        self.assertEqual(response.status_code, 200)

    def test_about_service(self):
        response = self.client.get("/main-page/about-service")
        self.assertEqual(response.status_code, 200)

    def test_cats(self):
        response = self.client.get("/main-page/animals-catalog/cats")
        self.assertEqual(response.status_code, 200)

    def test_dogs(self):
        response = self.client.get("/main-page/animals-catalog/dogs")
        self.assertEqual(response.status_code, 200)

    def test_parrots(self):
        response = self.client.get("/main-page/animals-catalog/parrots")
        self.assertEqual(response.status_code, 200)

    def test_hamsters(self):
        response = self.client.get("/main-page/animals-catalog/hamsters")
        self.assertEqual(response.status_code, 200)

    def test_orders(self):
        response = self.client.get("/main-page/animals-catalog/orders")
        self.assertEqual(response.status_code, 200)
