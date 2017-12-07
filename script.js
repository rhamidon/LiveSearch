$('#searchString').on('input propertychange paste', function() {
    var searchValue = $.trim($(this).val());
    var reg = new RegExp(searchValue, 'i');
    if (searchValue != '') {
        $.getJSON('./data/data.json', function(data) {
            var result = '<ul>'
            $.each(data, function(key, value) {
                if (value.name.match(reg)) {
                    result += '<li>';
                    result += '<h2>' + value.name + '</h2>';
                    result += '<img src="' + value.img + '" alt="' + value.name + ' image">';
                    result += '<p>' + value.bio + '</p>';
                    result += '</li>';
                }
            });
            result += '</ul>'
            $('#searchResults').html(result);

        });
    } else {
        result = '';
        $('#searchResults').html(result);
    }
});