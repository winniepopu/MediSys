# Generated by Django 2.2.6 on 2019-11-15 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mediApp', '0008_auto_20191115_1718'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='PharmacyID',
            field=models.CharField(default='2', max_length=100),
        ),
        migrations.AlterField(
            model_name='post',
            name='PharmacyID',
            field=models.CharField(default='2', max_length=100),
        ),
    ]