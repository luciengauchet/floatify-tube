javascript:(function(){
    var playerWindow = null;
    var ytplayer = document.getElementById("movie_player");
    var videoID = ytplayer.getVideoData()['video_id'];
    var currentTime = ytplayer.getCurrentTime();
    if (playerWindow && !playerWindow.closed) {
        playerWindow.focus();
    } else {
        playerWindow=window.open("data:text/html,
            <html>
                <body style='margin:0px !important'>
                    <div id='ytplayer' style='width:100% !important; height:100% !important'></div>
                    <script>
                        var tag = document.createElement('script');
                        tag.src = 'https://www.youtube.com/player_api';
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        var player;
                        function onYouTubePlayerAPIReady() {
                            player = new YT.Player('ytplayer', {
                                height: '390',
                                width: '640',
                                videoId: '"+videoID+"',
                                events: { 'onReady': onPlayerReady }
                            });
                        }
                        function onPlayerReady(event) {
                            event.target.playVideo();
                            event.target.seekTo("+currentTime+");
                        }
                        function stopVideo() {
                            player.stopVideo();
                        }
                    </script>
                </body>
            </html>",
            'Floatify-tube',
            "scrollbars=no,resizable=yes,width=480,height=270");
        ytplayer.pauseVideo();      
    };
})();
