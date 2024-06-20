import React from 'react';
import VdoBlock from './VdoBlock';
import { useParams } from 'react-router-dom';
import B1 from './B1';
import styles from './B1.module.css';

const Recepie = () => {
  const { id } = useParams();

  const recipes = [
    { name: 'Poori', img: 'img1.jpg', index: 0 },
    { name: 'Pav Bhaji', img: 'img2.jpg', index: 1 },
    { name: 'Cheese Cake', img: 'img3.jpg', index: 2 },
    { name: 'Burger', img: 'img4.jpg', index: 3 },
    { name: 'Cappuccino', img: 'img1.jpg', index: 0 },
    { name: 'Pav Bhaji', img: 'img2.jpg', index: 1 },
    { name: 'Cheese Cake', img: 'img3.jpg', index: 2 },
    { name: 'Burger', img: 'img4.jpg', index: 3 },
  ];

  return (
    <>
      {id !== '-1' && <VdoBlock Index={parseInt(id, 10)} />}
      <div className={styles.nav}>
        {recipes.map((recipe, idx) => (
          <B1
            key={idx}
            name={recipe.name}
            icons={require(`../Navbar/images/Card/${recipe.img}`)}
            index={recipe.index}
          />
        ))}
      </div>
      <footer></footer>
    </>
  );
};

export default Recepie;
