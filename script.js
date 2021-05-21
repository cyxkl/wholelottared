/*<script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
<script>
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

var track_url = 'https://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
</script>*/

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
        $(".name").html(songData.user[]);
        
        });
});

$(".search-term").keyup(function(event) {
  if(event.keyCode === 13) {
    $(".search-button").click();
  }
});