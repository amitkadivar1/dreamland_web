# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-04-28 23:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searcher', '0011_auto_20180428_2313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='damage',
            field=models.IntegerField(default=0),
        ),
    ]
