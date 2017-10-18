function searchForm() {
	var body = $('body');
	var search = $('#GIF-search').val();
	var $content = $('#content')

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=A3H0p6eePowjUTlOohUnEWnyDBLPkAH6");
	xhr.done(function(data) {
		var $image = data; 
		var $GIF = $image['data'][0]['images']['fixed_width']['url']//['images']['fixed_width']['mp4']

		var GIF_image = document.createElement('img');
		GIF_image.setAttribute('src', $GIF);
		GIF_image.setAttribute('id', 'GIF');

		$content.append(GIF_image);
	});
}
var $searchGIF = $('#search_GIF')
$searchGIF.on('click', searchForm);