# floatify-tube
A popup video player bookmarklet to keep watching a video while working on something else

## Bookmarklet
Just add the bookmarklet below to your bookmarks bar.

```javascript
javascript:(function(){var e=null,t=document.getElementById("movie_player"),a=t.getVideoData().video_id,r=t.getCurrentTime();e&&!e.closed?e.focus():(e=window.open("data:text/html,<html><body style='margin:0px !important'><div id='ytplayer' style='width:100% !important; height:100% !important'></div><script>var tag = document.createElement('script');tag.src = 'https://www.youtube.com/player_api';var firstScriptTag = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);var player;function onYouTubePlayerAPIReady() {player = new YT.Player('ytplayer', {height: '390',width: '640',videoId: '"+a+"',events: { 'onReady': onPlayerReady }});}function onPlayerReady(event) {event.target.playVideo();event.target.seekTo("+r+");}function stopVideo() {player.stopVideo();}</script></body></html>","Floatify-tube","scrollbars=no,resizable=yes,width=480,height=270"),t.pauseVideo())})();
```
