


var $video = $("#my_video");
var $progress = $("#progress");
var $progressBar = $(".slider");
var $videoContainer = $("#video_player_box");

var $videoControls = $("#video_controls_bar");
var $buttonControls = $("#controls_wrap");


// Hide button controls when video is playing 
$videoContainer.on("mouseleave", function() {
	
		$buttonControls.hide();
		$videoControls.css("margin-top", "5%");	  
});

// Show button controls on hover
$videoContainer.on("mouseover", function() {
		$buttonControls.show();
		$videoControls.css("margin-top", "0");	  
});


//Progress Bar playback

$video.bind("timeupdate", videoTimeUpdateHandler);
$progress.mousedown(progressMouseDown);
        
        function videoTimeUpdateHandler(e) {
            var video = $video.get(0);
            var percent = video.currentTime / video.duration;
            updateProgressWidth(percent);
        }
        
        function progressMouseDown(e) {
            var $this = $(this);
            var x = e.pageX - $this.offset().left;
            var percent = x / $this.width();
            updateProgressWidth(percent);
            updateVideoTime(percent);
        }
        
        function updateProgressWidth(percent) {
            $progress.width((percent * 100) + '%');

        }
        
        function updateVideoTime(percent) {
            var video = $video.get(0);
            video.currentTime = percent * video.duration;
        }


// Highlight current span when video plays 
	$video.on("timeupdate", function() {
		var $videoTime = $video[0].currentTime;
		function addHighlight(n) {
			$('span[data-start]').removeClass("highlight");
			$('span[data-start="' + n + '"]').addClass("highlight");
		}

			if ($videoTime > -1 && $videoTime < 4.130) {
				addHighlight(0);
			} else if ($videoTime > 4.13 && $videoTime < 7.535) {
				addHighlight(4.13);
			} else if ($videoTime > 7.535 && $videoTime < 11.27) {
				addHighlight(7.535);
			} else if ($videoTime > 11.27 && $videoTime < 13.96) {
				addHighlight(11.27);
			} else if ($videoTime > 13.96 && $videoTime < 17.94) {
				addHighlight(13.96);
			} else if ($videoTime > 17.94 && $videoTime < 22.37) {
				addHighlight(17.94);
			} else if ($videoTime > 22.37 && $videoTime < 26.88) {
				addHighlight(22.37);
			} else if ($videoTime > 26.88 && $videoTime < 30.92) {
				addHighlight(26.88);
			} else if ($videoTime > 32.1 && $videoTime < 34.73) {
				addHighlight(32.1);
			} else if ($videoTime > 34.73 && $videoTime < 39.43) {
				addHighlight(34.73 );
			} else if ($videoTime > 39.43 && $videoTime < 41.19) {
				addHighlight(39.43);
			} else if ($videoTime > 42.35 && $videoTime < 46.3) {
				addHighlight(42.35);
			} else if ($videoTime > 46.3 && $videoTime < 49.27) {
				addHighlight(46.3);
			} else if ($videoTime > 49.27 && $videoTime < 53.76) {
				addHighlight(49.27);
			} else if ($videoTime > 53.76 && $videoTime < 57.78 ) {
				addHighlight(53.76);
			} else if ($videoTime > 57.78) {
				addHighlight(57.78);
			}

	});

// Click on transcript to be taken to that time in the video
$("span").click(function() {
	var transcriptTime = $(this).attr("data-start");
	$video[0].currentTime = transcriptTime;
});


