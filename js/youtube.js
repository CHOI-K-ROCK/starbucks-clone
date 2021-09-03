
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {  //HTML 에서 지정한 id 선택자 player
        videoId: 'sj8bty9MBBU', // 재생할 유튜브 아이디
        playerVars: {
            autoplay: true, // 자동재생 여부
            loop: true, // 반복여부
            playlist: 'FtDzNT8UnaE' // 반복할 경우 반복될 영상을 지정해주어야 한다.
        },
        events: {
            onReady: function (event) { 
                // 여기서 매개변수 event는 영상이 준비가 되어 플레이되는 상황자체를 뜻한다.
                // 즉, 아래의 명령은 '영상이 준비가 되고, 플레이 될 때' 
                // 아래의 명령을 실행하라는 것이 된다. 

                event.target.mute() // 영상을 음소거한다.
                //target -> 재생하는 영상 그 자체를 뜻 함
            }
        }
    });
};
