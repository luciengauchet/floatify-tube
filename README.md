# floatify-tube
A popup video player bookmarklet to keep watching a video while working on something else

## Bookmarklets
Just add the bookmarklet below to your bookmarks bar.

- Youtube only:
```javascript
javascript:(function(){var e=null,t=document.getElementById("movie_player"),a=t.getVideoData().video_id,r=t.getCurrentTime();e&&!e.closed?e.focus():(e=window.open("data:text/html,<html><body style='margin:0px !important'><div id='ytplayer' style='width:100% !important; height:100% !important'></div><script>var tag = document.createElement('script');tag.src = 'https://www.youtube.com/player_api';var firstScriptTag = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);var player;function onYouTubePlayerAPIReady() {player = new YT.Player('ytplayer', {height: '390',width: '640',videoId: '"+a+"',events: { 'onReady': onPlayerReady }});}function onPlayerReady(event) {event.target.playVideo();event.target.seekTo("+r+");}function stopVideo() {player.stopVideo();}</script></body></html>","Floatify-tube","scrollbars=no,resizable=yes,width=480,height=270"),t.pauseVideo())})();
```

- Dailymotion only:
```javascript
javascript:(function(){var playerWindow = null;var videoID=DM_CurrentVideoXID;var currentTimeHMS= document.querySelector(".dmp_TimeInfo-time").innerHTML;var p = currentTimeHMS.split(':'),s = 0, m = 1;while (p.length > 0) {s += m * parseInt(p.pop(), 10);m *= 60;};var currentTime=s;if (playerWindow && !playerWindow.closed) {playerWindow.focus();} else {playerWindow=window.open('http://www.dailymotion.com/embed/video/'+videoID+'?autoPlay=1&start='+currentTime,'Floatify-tube',"scrollbars=no,resizable=yes,width=480,height=270");};})();
```

- Vimeo only:
```javascript
javascript:(function(){var playerWindow = null;var videoID=vimeo.clip_page_config.clip.id; var currentTime=vimeo.active_player.currentTime;if (playerWindow && !playerWindow.closed) {playerWindow.focus();} else {playerWindow=window.open('https://player.vimeo.com/video/'+videoID+'#t='+currentTime+'?api=1&autoplay=1&title=0&byline=0','Floatify-tube','scrollbars=no,resizable=yes,width=480,height=270');};})();
```

## Usage
Click the bookmarklet icon while on the youtube video page you are watching. The floating video player will popup and will continue playing your video starting from the current time. Original youtube player will be paused.

