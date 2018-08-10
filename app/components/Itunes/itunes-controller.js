import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
  console.log(songs)
 let template = '' 
 //YOUR CODING STARTS HERE
for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
  
  
      template += `
      <div class="col-3">
      <p>Song: ${song.title}</p>
      <p>Album Art: ${song.albumArt}</p>
      <p>Artist: ${song.artist}</p>
      <p>Artist: ${song.price}</p>
      <p>Album Name: ${song.collection}</p>
      <p>Preview: ${song.preview}</p>
  </div>
      `  
  }
  document.getElementById('songs').innerHTML = template
}





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