export const timeSince = (date: any) => {
  if (typeof date !== 'object') {
    date = new Date(date);
  }
  const currentDate: any = new Date();
  const seconds = Math.floor((currentDate - date) / 1000);
  let intervalType;
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = 'hour';
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = 'minute';
          } else {
            interval = -1;
            intervalType = 'a moment';
          }
        }
      }
    }
  }
  const plural = interval > 1 ? 's'  : '';
  return interval !== -1 ? `${interval} ${intervalType}${plural} ago` : `${intervalType} ago`;
};
