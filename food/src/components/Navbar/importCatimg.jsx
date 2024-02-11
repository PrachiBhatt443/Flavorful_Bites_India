function importAll(r) {
    let Images = [];
    r.keys().forEach((item) => {
      Images.push(r(item));
    });
    return Images;
  }
  
  const Images = importAll(require.context('./catImg', false, /\.(jpg|jpeg|png|jfif)$/));
  
  export default Images;
  