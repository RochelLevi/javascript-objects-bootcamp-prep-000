var playlist = {
  bSpears: 'Oops I Did It Again',
  nSync: 'Bye Bye Bye',
  bBoys: 'Back Street`s Back'
}

function updatePlaylist (playlist, artistName, songTitle) {
    return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}