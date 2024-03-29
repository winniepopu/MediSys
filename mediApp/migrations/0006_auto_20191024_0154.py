# Generated by Django 2.2.3 on 2019-10-23 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mediApp', '0005_auto_20191024_0124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicine',
            name='Alhour',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='medicine',
            name='Alminute',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='medicine',
            name='PerCost',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='medicine',
            name='SideE',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='medicine',
            name='TotalCost',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='medicine',
            name='intervalD',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='medicine',
            name='timePD',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='Division',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='HosDate',
            field=models.DateTimeField(null=True),
        ),
    ]
