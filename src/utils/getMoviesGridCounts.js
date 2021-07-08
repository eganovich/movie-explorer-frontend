function getMoviesGridCounts(windowWidth) {
    let newMoviesCount;
    let newAddCount;
  
    if (windowWidth >= 1274) {
      newAddCount = 4;
    } else if (windowWidth >= 986) {
      newAddCount = 3;
    } else if (windowWidth >= 756) {
      newAddCount = 2;
    } else {
      newAddCount = 5;
    }
  
    if (windowWidth >= 1274) {
      newMoviesCount = 16;
    } else if (windowWidth >= 986) {
      newMoviesCount = 9;
    } else if (windowWidth > 420) {
      newMoviesCount = 8;
    } else if (windowWidth < 420) {
      newMoviesCount = 5;
    } else {
      newMoviesCount = 16;
    }
  
    return { newAddCount, newMoviesCount };
  }
  
  export default getMoviesGridCounts;