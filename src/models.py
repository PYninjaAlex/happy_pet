from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Purchases(models.Model):
    """Purchases data"""
    name = models.CharField('Your name', max_length=20)
    email = models.TextField('Your email', max_length=30)
    phone_number = PhoneNumberField(null=False, blank=False, unique=True)
    PETS = [
        ('Corgi', 'Корги'),
        ('Mein-cun', 'Мейн-кун'),
        ('American cat', 'Американский кот')
    ]
    status = models.CharField(max_length=20, choices=PETS)

    class Meta:
        db_table = 'mytable'
