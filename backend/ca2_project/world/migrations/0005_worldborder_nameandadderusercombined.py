# Generated by Django 4.1.3 on 2022-12-10 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('world', '0004_worldborder_adderuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='worldborder',
            name='nameandadderusercombined',
            field=models.CharField(max_length=510, null=True, unique=True),
        ),
    ]
