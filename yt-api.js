var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('iframe-youtube-player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    document.getElementById('iframe-youtube-player').style.borderColor = '#FF6D00';
}
function showSelection(playerStatus) {
    if (playerStatus == 0) {
        if (now == "2-6" || now == "3-3-1" || now == "3-3-2") {
            sceneHandler();
        }
        console.log("end!!");
        document.querySelectorAll(".selection").forEach((s) => s.classList.add("active"));
        let elmnt = document.querySelector(".selection");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
}
function onPlayerStateChange(event) {
    showSelection(event.data);
}