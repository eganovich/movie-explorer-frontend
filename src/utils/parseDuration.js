function parseDuration(duration) {
    if (duration === 60) {
      return '1ч';
    }
  
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration - (hours * 60));
  
    if (minutes === 0) {
      return `${hours}ч`;
    }
  
    return `${hours}ч${minutes}м`;
  }
  
  export default parseDuration;