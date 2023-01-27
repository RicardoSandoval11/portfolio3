from django.db import models


class FrontEndSkills(models.Model):
    skill_name = models.CharField(max_length=50)
    description = models.TextField(max_length=300)
    logo = models.ImageField(upload_to='logos')

    class Meta:
        verbose_name = 'Front end skill'
        verbose_name_plural = 'Front end skills'
    
    def __str__(self):
        return self.skill_name

class BackEndSkills(models.Model):
    skill_name = models.CharField(max_length=50)
    description = models.TextField(max_length=300)
    logo = models.ImageField(upload_to='logos')

    class Meta:
        verbose_name = 'Back end skill'
        verbose_name_plural = 'Back end skills'
    
    def __str__(self):
        return self.skill_name
