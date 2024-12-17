from django.views.generic import ListView
from .models import Music


class MusicListView(ListView):
    model = Music
    template_name = 'index.html'  # Имя шаблона
    context_object_name = 'musics'
    paginate_by = 1000

    def get_queryset(self):
        query = self.request.GET.get('q')  # Получаем параметр q из GET-запроса
        if query:
            # Фильтруем записи по полю 'title' или 'artist'
            return Music.objects.filter(title__icontains=query) | Music.objects.filter(artist__icontains=query)
        else:
            return Music.objects.all()