function Thermo() {
}
Thermo.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};
