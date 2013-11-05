(function() {

	var echonest_api_key = "5KZM0TWV9BY8TUUGR";

	$(document).ready( function() {
		
			$("#search-button").click(search_clicked);
		
	});

	function search_clicked() {
	
		var echonest_url_head = "http://developer.echonest.com/api/v4/"
		
		get_artist_info(echonest_url_head, "radiohead");
	}
	
	function get_artist_info(url_head, artist)
	{
		var url = url_head + "artist/search?api_key=" + echonest_api_key + "&name=" + artist;
	
		$.getJSON(url, get_artist_info_callback);
	}
	
	function get_artist_info_callback(data)
	{
		console.log(data);
	}

})();