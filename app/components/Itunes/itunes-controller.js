import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
  //console.log(songs)
  //YOUR CODING STARTS HERE

  let template = ''

  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];

    template += `
      
      <div id="info" class="col-sm-3">
      <p><strong>Song:</strong> ${song.title}</p>
      <img class="img-fluid" src="${song.albumArt}">
      <p><strong>Artist:</strong> ${song.artist}</p>
      <p><strong>Price:</strong> ${song.price}</p>
      <p><strong>Album Name:</strong> ${song.collection}</p>
      <audio class="audio" controls="controls" src="${song.preview}"</audio>
      </div>
      
      `
  }
  document.getElementById('songs').innerHTML = template
}
// found this as an option to pause the current audio when new audio starts
// but does not use only one audio tag - couldn't figure that out
document.addEventListener('play', function (e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true);




//PUBLIC
class ItunesController {
  constructor() {
    // drawSongs()
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
      $('#get-music-button').text('GET MORE MUSIC');
    })
  }


}


export default ItunesController