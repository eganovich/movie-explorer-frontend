function getTrailerLink(link) {
    if (link.includes('youtube')) {
      let indexOfEquals = link.lastIndexOf('=');
  
      const videoCode = link.slice(indexOfEquals + 1);
  
      const newLink = `https://youtube.com/embed/${videoCode}`;
  
      return newLink;
    } else {
      return link;
    }
  }
  
  export default getTrailerLink;