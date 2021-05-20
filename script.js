$(".searchButton").click(function() {
  let api_url = "https://api.soundcloud.com/tracks?q=test&client_id=5aa8e389ba4e24b6106af5159ab3e344"
  fetch(api_url)
  
  .then(function(response) {
    return response.json();
  })
  .then(function(songData) {
    console.log(songData);
  });
});