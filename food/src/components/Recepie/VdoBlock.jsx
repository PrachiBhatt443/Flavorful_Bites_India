import React from 'react'
import s from './RecepieBlock.module.css'
const vdoInfo = [{
        src: "https://youtu.be/UQ42_p63Q0M?feature=shared",
        name: 'Golden Fried Poori',
        ingredient:`- 2 cups whole wheat flour<br />
        - Salt (to taste)<br />
        - Water (as needed)<br />
        - Oil (for frying)<br />`,
        recepie: ` 1. In a mixing bowl, combine whole wheat flour, a pinch of salt, and a tablespoon of oil.<br>
                 2. Gradually add water and knead the mixture into a smooth dough.<br>
                 3. Divide the dough into small balls and roll each ball into a thin circle using a rolling pin.<br>
                 4. Heat oil in a deep frying pan.<br>
                 5. Carefully slide each rolled dough circle into the hot oil and fry until they puff up and turn golden brown on both sides.<br>
                 6. Remove the pooris from the oil and place them on a paper towel to drain excess oil.<br>
                 7. Serve hot with your favorite side dish or curry.<br>`,
        link: 'https://youtu.be/skPzG_ZMnyU?feature=shared',
        backgroundColor: 'lightblue',
    },{   src: "https://youtu.be/tEtQeMWxVHI?feature=shared",
        name: 'Spicy Pav Bhaji Delight',
        ingredient:`- 4 large potatoes, boiled and mashed
                    - 1 cup cauliflower, finely chopped
                    - 1/2 cup green peas, boiled
                    - 2 large onions, finely chopped
                    - 2 large tomatoes, finely chopped
                    - 2 bell peppers, finely chopped
                    - Pav bhaji masala (to taste)
                    - Butter (for serving)
                    - Pav buns (for serving)`,
        recepie: `Heat butter in a pan and add chopped onions, bell peppers, and tomatoes.<br> Sauté until they turn soft.
                  Add mashed potatoes, peas, cauliflower, and pav bhaji masala. Mix well.
                  Add water and let the mixture simmer for a few minutes until the vegetables are cooked through.
                  Using a potato masher, mash the vegetables until you get a thick, chunky consistency.
                  Toast pav buns on a hot griddle with a generous amount of butter until they turn golden brown.
                  Serve the hot bhaji with buttered pav buns, chopped onions, and a squeeze of lemon juice.`,
        link: 'https://youtu.be/tEtQeMWxVHI?feature=shared',
        backgroundColor: '#eb8d29e7',
    },{
        src: "https://youtu.be/3vRshidqBLY?feature=shared",
        name: 'Mighty Cheese Cake',
        ingredient:`- 2 cups crushed graham crackers
                    - 1/2 cup melted butter
                    - 1/4 cup sugar
                    - 24 oz cream cheese
                    - 1 cup sugar
                    - 1 tsp vanilla extract
                    - 4 eggs`,
        recepie: `Preheat the oven to 350°F (175°C).
                  In a mixing bowl, combine crushed graham crackers, melted butter, and sugar. Press the mixture into the bottom of a springform pan.
                  In a separate bowl, beat cream cheese, sugar, and vanilla extract until smooth. Add eggs one at a time, mixing well after each addition.
                  Pour the cream cheese mixture over the crust in the pan.
                  Bake in the preheated oven for 40-45 minutes or until the center is almost set.
                  Allow the cheesecake to cool completely, then refrigerate for at least 4 hours or overnight.
                  Serve chilled, optionally topped with whipped cream or fruit compote.`,
        link: 'https://youtu.be/3vRshidqBLY?feature=shared',
        backgroundColor: 'lightpink',
    },{
        src: "https://youtu.be/_q5GKCNZcHI?feature=shared",
        name: 'Homemade Burger Bliss',
        ingredient:`- 1 lb ground beef
                    - Salt (to taste)
                    - Black pepper (to taste)
                    - 4 hamburger buns
                    - Lettuce leaves
                    - Tomato slices
                    - Onion slices
                    - Cheese slices
                    - Condiments (ketchup, mustard, mayonnaise, etc.)`,
        recepie: `In a mixing bowl, combine ground beef, finely chopped onions, garlic powder, Worcestershire sauce, salt, and pepper. Mix until well combined.
                  Divide the mixture into equal portions and shape them into patties.
                  Heat a grill or skillet over medium-high heat. Cook the patties for 3-4 minutes on each side or until they reach the desired level of doneness.
                  Toast burger buns on the grill or skillet until lightly golden.
                  Assemble the burgers by placing lettuce, tomato slices, cooked patties, cheese slices, and any desired condiments (such as ketchup, mustard, or mayonnaise) on the toasted buns.
                  Serve hot with fries or your favorite side dish.`,
        link: 'https://youtu.be/_q5GKCNZcHI?feature=shared',
        backgroundColor: '#51361ae7',
    }
    // Add more objects for additional images
  ];
const VdoBlock = ({ Index }) => {
    const video = vdoInfo[Index];
  return (
    <div>
        <div key={Index} className={s?.card}>
            <div className={s?.vdoContainer}>
                <iframe controls 
                width="100%" height="100%" 
                top='0'
                src={`https://www.youtube.com/embed/${video?.link.split('/').pop().split('?')[0]}`}>
                    {/* <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag. */}
                </iframe>
                <div className={s.yield}>
                    yield prep time cook
                </div>
            </div>
            <div className={s.recepie} style={{ backgroundColor: video?.backgroundColor }}>
                <h1>{video?.name}</h1>
                <h2>INGRIDIENTS</h2> 
                <div dangerouslySetInnerHTML={{ __html: video?.ingredient }} />
            </div>
         </div>
        <div className={s?.card}>
            <div className={s?.vdoContainer}>
                <h1 style={{padding:'18px'}} >RECEPIE</h1>
                <div style={{padding:'18px',fontSize:'24px'}} dangerouslySetInnerHTML={{ __html: video?.recepie }} />
            </div>
      </div>
    </div>
  )
}

export default VdoBlock
