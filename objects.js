var playlist = {
  bSpears: 'Oops I Did It Again',
  nSync: 'Bye Bye Bye',
  bBoys: 'Back Street`s Back'
}

function updatePlaylist (playlist, artistName, songTitle) {
    return playlist.assign({}, playlistName, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.playlist;
  return playlist;
}