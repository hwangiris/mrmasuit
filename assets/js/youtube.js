var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        width: '100%',
        videoId: 'iAM_c18nqjs',
        playerVars: { 'autoplay': 1, 'playsinline': 1 },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}