export const formatTime = (time) => {
  const getSeconds = Math.round((time % 60) * 100) / 100;
  const getMinutes = Math.floor(time / 60);
  const getHours = Math.floor(time / 3600);

  return `${getHours < 10 ? `0${getHours}` : getHours} : ${
    getMinutes < 10 ? `0${getMinutes}` : getMinutes
  } : ${
    getSeconds < 10
      ? `0${getSeconds % 1 === 0 ? `${getSeconds}.0` : getSeconds}`
      : getSeconds % 1 === 0
      ? `${getSeconds}.0`
      : getSeconds
  }`;
};
