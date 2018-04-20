var playlist = {
  bSpears: 'Slowdive',
  nSync: 'My Bloody Valentine',
  bBoys: 'Phil Ochs'
}

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.playlist;
  return playlist;
}