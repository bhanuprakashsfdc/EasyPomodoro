import { store } from '../redux/store'; // Ensure correct import

const soundMap = {
  default: '/sounds/alarm.mp3',
  chime: '/sounds/alarm.mp3',
  bell: '/sounds/timer.mp3',
};

export const showNotification = (title, body) => {
  if (Notification.permission === 'granted') {
    const notificationSound = store.getState().settings.notificationSound;
    const sound = soundMap[notificationSound];
    
    new Notification(title, { body });

    if (sound) {
      const audio = new Audio(sound);
      audio.play();
    }
  }
};
