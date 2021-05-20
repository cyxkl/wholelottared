$(".search-button").click(function() {
  let input = $(".search-term").val();
  let url = "https://api.soundcloud.com/tracks?q=" + input +"&client_id=5aa8e389ba4e24b6106af5159ab3e344"
  console.log(input);

      fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(songData) {
            console.log(songData);
        });
});