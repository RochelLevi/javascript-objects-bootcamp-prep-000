var playlist = {
  bSpears: 'Oops I Did It Again',
  nSync: 'Bye Bye Bye',
  bBoys: 'Back Street`s Back'
}

function updatePlaylist (playlist, artistName, songTitle) {
    return Object.assign({}, playlist, { [cAguilera]: Dirrty })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.bSpears;
  return playlist;
}