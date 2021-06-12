export const getPrettyDelay = timeInMillis => {
  const days = Math.floor(timeInMillis / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeInMillis / (1000 * 60 * 60));
  const minutes = Math.floor(timeInMillis / (1000 * 60));

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''}`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  return null;
};
