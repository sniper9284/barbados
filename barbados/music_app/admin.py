from django.contrib import admin
from .models import Music, MusicResource
from import_export.admin import ImportExportModelAdmin

@admin.register(Music)
class MusicAdmin(ImportExportModelAdmin):
    resource_class = MusicResource
    list_display = ('id','number', 'title', 'artist', 'type')