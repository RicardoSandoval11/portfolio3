from django.db import models


class HomeModel(models.Model):
    message_presentation = models.CharField(max_length=500)
    photo_presentation = models.ImageField(upload_to='presentation')
    my_description = models.CharField(max_length=600)

    class Meta:
        verbose_name = 'Important message'
        verbose_name_plural = 'Important messages'
    
    def __str__(self):
        return self.message_presentation


