// ==UserScript==
// @name        Floatify Tube
// @namespace   lucien.gauchet@gmail.com
// @description A floating-tube popout video player
// @version     1.1.1
// @include *www.youtube.*
// @include *www.dailymotion.*
// @include *vimeo.com*
// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(" \
.player-api:hover .floatify-tube-button { \
  display:block !important; \
} \
");

(function() {
var createFloatifyPopupYT = "javascript:(function(){var e=null,t=document.getElementById('movie_player'),a=t.getVideoData().video_id,r=Math.floor(t.getCurrentTime());e&&!e.closed?e.focus():(e=window.open('https://www.youtube.com/embed/'+a+'?autoplay=1&start='+r,'Floatify-tube','scrollbars=no,resizable=yes,width=480,height=270'),t.pauseVideo())})();";
var createFloatifyPopupDM = "javascript:(function(){var playerWindow = null;var videoID=DM_CurrentVideoXID;var currentTimeHMS= document.querySelector('.dmp_TimeInfo-time').innerHTML;var p = currentTimeHMS.split(':'),s = 0, m = 1;while (p.length > 0) {s += m * parseInt(p.pop(), 10);m *= 60;};var currentTime=s;if (playerWindow && !playerWindow.closed) {playerWindow.focus();} else {playerWindow=window.open('http://www.dailymotion.com/embed/video/'+videoID+'?autoPlay=1&start='+currentTime,'Floatify-tube','scrollbars=no,resizable=yes,width=480,height=270');};})();"
var createFloatifyPopupVM = "javascript:(function(){var playerWindow = null;var videoID=vimeo.clip_page_config.clip.id; if (vimeo.active_player) {var currentTime=vimeo.active_player.currentTime} else {var currentTime=0};if (playerWindow && !playerWindow.closed) {playerWindow.focus();} else {playerWindow=window.open('https://player.vimeo.com/video/'+videoID+'#t='+currentTime+'?api=1&autoplay=1&title=0&byline=0','Floatify-tube','scrollbars=no,resizable=yes,width=480,height=270');};})();";

switch (document.location.host) {
    case "www.youtube.com":
        var videoPlayer = document.querySelectorAll('.player-api');
        var createFloatifyPopup = createFloatifyPopupYT;
        break;
    case "www.dailymotion.com":
        var videoPlayer = document.querySelectorAll('.player-container');
        var createFloatifyPopup = createFloatifyPopupDM;
        break;
    case "vimeo.com":
        var videoPlayer = document.querySelectorAll('.player_container');
        var createFloatifyPopup = createFloatifyPopupVM;
        break;
};

for (var i = 0; i < videoPlayer.length; i++) {
    var ftbutton = document.createElement('a');
    ftbutton.className = 'floatify-tube-button';
    ftbutton.setAttribute("onClick", createFloatifyPopup);
    ftbutton.setAttribute("style", "display:none !important; font-family:sans !important;"+
                     "text-shadow:1px 1px 0px rgba(0,0,0,0.2) !important; color:#ffffff !important;"+
                     "font-size:9pt !important; font-weight:700 !important;text-decoration: none !important;" +
                     "box-shadow:0px 1px 2px 0px rgba(0,0,0,0.3) !important; padding:0px !important;" +
                     "position:absolute !important; top:0 !important; right:-24px !important;" +
                     "border: 1px solid rgb(69, 204, 253); border-width: 3px 7px 6px 7px !important;" +
                     "background:#45CCFD !important; z-index: 1000 !important;");
    ftbutton.setAttribute("content", ".:");
    ftbutton.innerHTML = '.:';
    videoPlayer[i].appendChild(ftbutton);
    videoPlayer[i].onmouseover = function () {
        this.querySelector('.floatify-tube-button').style.display = 'block';
    }
    videoPlayer[i].onmouseout = function () {
        this.querySelector('.floatify-tube-button').style.display = 'none';
    }
};
})();
