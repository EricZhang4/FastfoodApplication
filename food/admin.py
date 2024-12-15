from django.contrib import admin

from .models import Pizza, Burger, Beverage, Order, Item


class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
    
admin.site.register(Pizza, PizzaAdmin)

# Register your models here.

class BurgerAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
    
admin.site.register(Burger, BurgerAdmin)

class BeverageAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
    
admin.site.register(Beverage, BeverageAdmin)

admin.site.register(Order)
admin.site.register(Item)

