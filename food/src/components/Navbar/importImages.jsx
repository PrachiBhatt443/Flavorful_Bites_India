function importAll(r) {
    let images = [];
    r.keys().forEach((item) => {
      images.push(r(item));
    });
    return images;
  }
  
  const images = importAll(require.context('./images/Card', false, /\.(jpg|jpeg|png)$/));
  
  export default images;
  