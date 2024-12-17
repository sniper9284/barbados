$(document).ready(function() {
    $('#search').on('keyup', function() {
        var searchTerm = $(this).val();
        $.ajax({
            url: window.location.pathname,
            data: {
                q: searchTerm
            },
            success: function(response) {
                $('tbody').html($(response).find('tbody').html());
            }
        });
    });
});