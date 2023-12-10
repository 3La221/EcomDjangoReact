from django.contrib import admin
from . models import Product,Order,OrderItem,ShippingAdress,Reviews
# Register your models here.

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAdress)
admin.site.register(Reviews)