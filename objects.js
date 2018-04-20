var playlist = {
  bSpears: 'Oops I Did It Again',
  nSync: 'Bye Bye Bye',
  bBoys: 'Back Street`s Back'
}

function updatePlaylist (playlist, artistName, songTitle) {
    playlist.artistName = [songTitle];
    return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}