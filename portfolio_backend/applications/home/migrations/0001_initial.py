# Generated by Django 4.1.5 on 2023-01-27 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomeModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message_presentation', models.CharField(max_length=500)),
                ('photo_presentation', models.ImageField(upload_to='presentation')),
                ('my_description', models.CharField(max_length=600)),
            ],
            options={
                'verbose_name': 'Important message',
                'verbose_name_plural': 'Important messages',
            },
        ),
    ]