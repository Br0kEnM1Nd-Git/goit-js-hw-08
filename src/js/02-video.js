import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const storageTime =
  JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? false;
if (storageTime) {
  player.setCurrentTime(storageTime);
}

player.on('timeupdate', throttle(handleTime, 1000));
function handleTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
