var playlist = {
  bSpears: 'Oops I Did It Again',
  nSync: 'Bye Bye Bye',
  bBoys: 'Back Street`s Back'
}

function updatePlaylist (playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.playlist;
  return playlist;
}