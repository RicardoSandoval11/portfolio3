from django.db import models


class ProjectsDescriptionModel(models.Model):
    view_name = models.CharField(max_length=50)
    view_description = models.CharField(max_length=500)
    view_image = models.ImageField(upload_to='detailed_views')

    class Meta:
        verbose_name = 'description'
        verbose_name_plural = 'detailed descriptions'
    
    def __str__(self):
        return self.name

class TechonologiesModel(models.Model):
    technology = models.CharField(max_length=40)

    class Meta:
        verbose_name = 'techonology'
        verbose_name_plural = 'techonologies'
    
    def __str__(self):
        return self.technology

class ProjectsModel(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    project_image = models.ImageField(upload_to='projects')
    detailed_descriptions = models.ManyToManyField(ProjectsDescriptionModel)
    technologies = models.ManyToManyField(TechonologiesModel)
    project_url = models.URLField(max_length=300)

    class Meta:
        verbose_name = 'project'
        verbose_name_plural = 'projects'
    
    def __str__(self):
        return self.name

