(function() {

	var echonest_url_head = "http://developer.echonest.com/api/v4/";
	var echonest_api_key = "5KZM0TWV9BY8TUUGR";

	$(document).ready( function() {
		
			$("#search-button").click(search_clicked);
		
	});

	function search_clicked() {
	
		var echonest_url_head = "http://developer.echonest.com/api/v4/"
		
		get_song_info("karma%20police", "radiohead");
	
	}
	
	function get_song_info(title, artist)
	{
		//The 'tracks' bucket will list album art for each song in the array
		var url = echonest_url_head + "song/search?api_key=" + echonest_api_key + "&artist=" + artist + "&title=" + title + "&bucket=id:7digital-US" + "&bucket=tracks";
	
		$.getJSON(url, get_song_info_callback);
	}
	
	function get_song_info_callback(data)
	{
		//Assume the first result returned is correct for our test
		var song = data.response.songs[0];
		
		if (song.foreign_ids)
		{
			var sevenDigitalId = song.foreign_ids[0].foreign_id;
		}
		else
		{
			console.log("7Digital ID not found!");
		}
		
	}

})();