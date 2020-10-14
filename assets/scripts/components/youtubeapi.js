document.addEventListener("DOMContentLoaded", () => {

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube-player', {
                height: '360',
                width: '640',
                videoId: 'OAmo7oL9_a8',
            });
        }



})

