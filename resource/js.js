var video = $('video')[0];
var audio = $('audio')[0];
video.src = '/Users/beretwood/Downloads/series/s1e3.mp4';
audio.src = '/Users/beretwood/Downloads/series/s1e3.m4a';
$('video,.shade').click(function () {
  if (video.paused)
    video.play();
  else video.pause();
});
$('img').click(function () {
  switchi();
});
function switchi() {
  if (audio.paused)
    audio.play();
  else
    audio.pause();
}
$('.red').click(function () {
  audio.currentTime = video.currentTime;
});
$('.blue').click(function () {
  video.currentTime = audio.currentTime;
});
//        alt 18
var alt = false;
var start;
var end;
var circle = false;
$(document).keydown(function (e) {
  //e.preventDefault();
  if (e.keyCode == 81) {       //q视频快退
    video.currentTime = video.currentTime - 3;
  } else if (e.keyCode == 69) {//e
    video.currentTime = video.currentTime + 3;
  } else if (e.keyCode == 65) {//a音频快退
    audio.currentTime = audio.currentTime - 3;
  } else if (e.keyCode == 68) {//d
    audio.currentTime = audio.currentTime + 3;
  } else if (e.keyCode == 32) {//
    switchi();
  } else if (e.keyCode == 49 && e.altKey == true) {//1
    start = audio.currentTime;
    end = audio.duration;
    circle = true;
  } else if (e.keyCode == 50 && e.altKey == true) {//2
    end = audio.currentTime;
    circle = true;
  } else if (e.keyCode == 51 && e.altKey == true) {//3清除
    circle = false;
  }
  console.log(e.keyCode)
});
setInterval(function () {
  if (audio.currentTime > end && circle == true)
    audio.currentTime = start;
}, 200);
