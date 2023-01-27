from django.contrib import admin
from .models import ProjectsDescriptionModel, ProjectsModel, TechonologiesModel

# Register your models here.
admin.site.register(ProjectsModel)
admin.site.register(ProjectsDescriptionModel)
admin.site.register(TechonologiesModel)

