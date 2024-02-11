import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import images from './importImages';
import { Link } from 'react-router-dom';
import Cat from './Cat';
import Popular from './Popular'
// Create an array of objects with image information
const imageInfo = [
  {
    src: images[0],
    name: 'Golden Fried Poori Magic',
    description: 'Crispy, golden, and puffed to perfection, our homemade pooris are a delightful treat for breakfast or any meal. Enjoy the satisfying crunch as you savor these Indian deep-fried bread circles.',
    link: 'https://example.com/image1',
    backgroundColor: 'lightblue',
  },
  {
    src: images[1], 
    name: 'Spicy Pav Bhaji Delight',
    description: "Indulge in the bold and spicy flavors of our homemade pav bhaji. A perfect medley of vegetables and spices served with soft buttery pav buns, it's an ultimate comfort food that will tantalize your taste buds.",
    link: 'https://example.com/image2',
    backgroundColor: ' #eb8d29e7',
  },
  {
    src: images[2], // Use the second image from your imported images
    name: 'Mighty Cheese Cake',
    description: 'Look no further for a  creamy and ultra smooth classic cheese cake recipe! no one can deny its simple desendance',
    link: 'https://example.com/image3',
    backgroundColor: 'lightpink',
  },
  {
    src: images[3], // Use the second image from your imported images
    name: 'Homemade Burger Bliss',
    description: "Treat yourself to the ultimate homemade burger experience. Sink your teeth into juicy, flavorful patties, fresh veggies, and creamy sauces sandwiched between soft, toasted buns. It's a burger masterpiece crafted with love.",
    link: 'https://example.com/image4',
    backgroundColor:' #51361ae7',
  }
  // Add more objects for additional images
];

function Homepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Get the current image info based on currentImageIndex
  const currentImage = imageInfo[currentImageIndex];
  return (
    <>
      
      <div className={styles.card}>
        <div className={styles.imagecontainer}>
          <img
            className={styles.image}
            src={currentImage.src}
            alt={`Image ${currentImageIndex}`}
          />
        </div>
        <div className={styles.textcontainer} style={{ backgroundColor: currentImage.backgroundColor }}>
          <h1>{currentImage.name}</h1>
          <p>{currentImage.description}</p>
          <Link to={`/recepie/${currentImageIndex}`}><img src="asc.png" alt="Icon" /></Link>
        </div>
      </div>
      <Cat/>
      <Popular></Popular>
    </>
  );
}

export default Homepage;

