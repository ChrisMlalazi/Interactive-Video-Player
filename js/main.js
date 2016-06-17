var vid, playbtn, seekslider;

function initializePlayer () {
	//Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	//add event listemners
	playbtn.addEventListener("click", playPause, false);
	seekslider.addEventListener("change", vidSeek, false);
	vid.addEventListener("timeupdate", seektimeupdate, false);
}

window.onload = initializePlayer;

function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.innerHTML = "Pause";
	} else {
		vid.pause();
		playbtn.innerHTML = "Play";
	}
}

function vidSeek() {
   var seekto = vid.duration * (seekslider.value / 100);
   vid.currentTime = seekto;

}

function seektimeupdate() {
 		var nt = vid.currentTime * (100 / vid.duration);
 		seekslider.value = nt;

}