import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  for (let i = 0; i < results.length; i++) {
      const song = results[i];
      template += `
      <div class="col-3">
      <p>Song: ${song.trackName}</p>
      <p>Album Art: ${song.artworkUrl60}</p>
      <p>Artist: ${song.artistName}</p>
      <p>Artist: ${song.collectionPrice}</p>
      <p>Album Name: ${song.collectionName}</p>
      <p>Preview: ${song.previewUrl}</p>
  </div>
      `  
  }
  document.getElementById('songs').innerHTML = template
}
drawSongs()




//PUBLIC
class ItunesController {
  constructor() {
    drawSongs()
  }
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController