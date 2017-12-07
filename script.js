$.getJSON('./data/data.json', function (data) {
	var result = '<ul>'
	$.each(data, function (key, value) {
		result += '<li>';
		result += '<h2>' + value.name + '</h2>';
		result += '<p>' + value.bio + '</p>';
		result += '<img src="' + value.img + '" alt="' + value.name + ' image">';
		result += '</li>';
	})
	result+= '</ul>'
	$('#searchResults').html(result);
});