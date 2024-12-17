from import_export import resources
from django.db import models


class Music(models.Model):
    number = models.IntegerField('Номер')
    title = models.CharField('Название', max_length=255)
    artist = models.CharField('Исполнитель', max_length=255)
    back = models.TextField('Бэк', blank=True)
    type = models.CharField('Тип', max_length=50)

    def __str__(self):
        return f'{self.number}. {self.title} ({self.artist})'

    class Meta:
        verbose_name = 'Запись'
        verbose_name_plural = 'Записи'

# Ресурс для импорта-экспорта
class MusicResource(resources.ModelResource):
    class Meta:
        model = Music
        fields = ('id', 'number', 'title', 'artist', 'back', 'type')