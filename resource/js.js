var video = $('video')[0];
var audio = $('audio')[0];
video.src = './S01/S01E03.mkv';
audio.src = './S01/mp3/S01E03_自定义转码_纯音频输出.mp3';
$('video').click(function () {
    if (video.paused)
        video.play();
    else video.pause();
});
$('img').click(function () {
    switchi();
});
function switchi() {
    if(audio.paused)
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
    if (e.keyCode == 18) {
        alt = true;
    } else if (e.keyCode == 81) {
        video.currentTime = video.currentTime - 3;
    } else if (e.keyCode == 69) {
        video.currentTime = video.currentTime + 3;
    } else if (e.keyCode == 65) {
        audio.currentTime = audio.currentTime - 3;
    } else if (e.keyCode == 68) {
        audio.currentTime = audio.currentTime + 3;
    } else if (e.keyCode == 32) {
        switchi();
    } else if (e.keyCode == 49 && alt == true) {
        start = audio.currentTime;
        end = audio.duration;
        circle = true;
    } else if (e.keyCode == 50 && alt == true) {
        end = audio.currentTime;
        circle = true;
    } else if (e.keyCode == 51 && alt == true) {
        circle = false;
    }
    console.log(e.keyCode);
});
        setInterval(function () {
            if (audio.currentTime > end && circle == true)
                audio.currentTime = start;
        }, 200);
$(document).keyup(function (e) {
//            console.log(e.keyCode);
    if (e.keyCode == 18) {
        alt = false;
    }
});
