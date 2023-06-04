import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle( function({seconds}) {
        localStorage.setItem(STORAGE_KEY, seconds)
}, 1000)
);

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});

window.addEventListener('load', onLoad)
function onLoad() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return;
        player.setCurrentTime(data)
    } catch (error) {
        console.log("error.message")
    }
} 

