import React from 'react'
import Images from './importCatimg';
// import styles from ./Navbar
import styles from './Navbar.module.css';
const imageInfo = [
    {
      src: Images[0],
      name: 'Northern Cuisine',
      description: 'Crispy, golden, and puffed to perfection, our homemade pooris are a delightful treat for breakfast or any meal. Enjoy the satisfying crunch as you savor these Indian deep-fried bread circles.',
      link: 'https://example.com/image1',
      backgroundColor: 'lightblue',
    },
    {
      src: Images[1], 
      name: 'North East Cuisine',
      description: "Indulge in the bold and spicy flavors of our homemade pav bhaji. A perfect medley of vegetables and spices served with soft buttery pav buns, it's an ultimate comfort food that will tantalize your taste buds.",
      link: 'https://example.com/image2',
      backgroundColor: ' #eb8d29e7',
    },
    {
      src: Images[2], // Use the second image from your imported images
      name: 'Bengauli  \n  Cuisine',
      description: 'Look no further for a  creamy and ultra smooth classic cheese cake recipe! no one can deny its simple desendance',
      link: 'https://example.com/image3',
      backgroundColor: 'lightpink',
    },
    {
      src: Images[3], // Use the second image from your imported images
      name: 'Marathi Cuisine',
      description: "Treat yourself to the ultimate homemade burger experience. Sink your teeth into juicy, flavorful patties, fresh veggies, and creamy sauces sandwiched between soft, toasted buns. It's a burger masterpiece crafted with love.",
      link: 'https://example.com/image4',
      backgroundColor:' #51361ae7',
    },
    {
        src: Images[4], // Use the second image from your imported images
        name: ' Rajasthani Cuisine',
        description: "Treat yourself to the ultimate homemade burger experience. Sink your teeth into juicy, flavorful patties, fresh veggies, and creamy sauces sandwiched between soft, toasted buns. It's a burger masterpiece crafted with love.",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      },
      {
        src: Images[4], // Use the second image from your imported images
        name: ' Rajasthani Cuisine',
        description: "Treat yourself to the ultimate homemade burger experience. Sink your teeth into juicy, flavorful patties, fresh veggies, and creamy sauces sandwiched between soft, toasted buns. It's a burger masterpiece crafted with love.",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      },
      {
        src: Images[4], // Use the second image from your imported images
        name: ' Rajasthani Cuisine',
        description: "Treat yourself to the ultimate homemade burger experience. Sink your teeth into juicy, flavorful patties, fresh veggies, and creamy sauces sandwiched between soft, toasted buns. It's a burger masterpiece crafted with love.",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      },
      {
        src: Images[4], // Use the second image from your imported images
        name: ' Rajasthani Cuisine',
        description: "Treat yourself to the ultimate homemade burger experience. Sink your teeth into juicy, flavorful patties, fresh veggies, and creamy sauces sandwiched between soft, toasted buns. It's a burger masterpiece crafted with love.",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      }
      
  ];
  function Cat() {
    return (
        <>
        <h1 style={{marginLeft: '38%', fontSize: '50px', color: 'blue'}}>CATEGORIES</h1>
            <div className={styles.box}>
            {imageInfo.map((info, index) => (
            <div key={index} >
                <img 
                className={styles.cat}
                src={info.src}
                alt={info.name}
                />
                <h2>{info.name}</h2>
            </div>
            ))}
            </div>
            
        </>
      
    );
  }
  export default Cat;