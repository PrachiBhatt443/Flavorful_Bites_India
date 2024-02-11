import React from 'react'
import styles from './Blogs.module.css';

function Blogs() {
  const imageInfo = [
    {
      src: '/img/blog/burg.jpg',
      name: 'Northern Cuisine',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio",
      link: 'https://example.com/image1',
      backgroundColor: 'lightblue',
    },
    {
      src: '/img/blog/burg.jpg', 
      name: 'North East Cuisine',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio",
      link: 'https://example.com/image2',
      backgroundColor: ' #eb8d29e7',
    },
    {
      src: '/img/blog/burg.jpg', // Use the second image from your imported '/img/blog/burg.jpg'
      name: 'Bengauli  \n  Cuisine',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio",
      link: 'https://example.com/image3',
      backgroundColor: 'lightpink',
    },
    {
      src: '/img/blog/burg.jpg', // Use the second image from your imported '/img/blog/burg.jpg'
      name: 'Marathi Cuisine',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio'",
      link: 'https://example.com/image4',
      backgroundColor:' #51361ae7',
    },
    {
        src: '/img/blog/burg.jpg', // Use the second image from your imported '/img/blog/burg.jpg'
        name: ' Rajasthani Cuisine',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      },
      {
        src: '/img/blog/burg.jpg', // Use the second image from your imported '/img/blog/burg.jpg'
        name: ' Rajasthani Cuisine',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      },
      {
        src: '/img/blog/burg.jpg'[4], // Use the second image from your imported '/img/blog/burg.jpg'
        name: ' Rajasthani Cuisine',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio ",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      },
      {
        src: '/img/blog/burg.jpg', // Use the second image from your imported '/img/blog/burg.jpg'
        name: ' Rajasthani Cuisine',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem temporibus, blanditiis ratione architecto repudiandae totam debitis at cumque illo impedit. Nam unde facere eveniet quasi ipsam itaque a distinctio impedit quas blanditiis fugiat quod commodi voluptas quos doloremque, enim delectus! Minima doloremque corporis odio nostrum laudantium ratione natus? Obcaecati, fuga tempore voluptate est error, maxime nobis mollitia et adipisci perferendis in qui placeat praesentium iste illum aliquid id accusantium a consequuntur perspiciatis cum totam. Error quod tempora corporis et illo deleniti repudiandae nihil facilis, ducimus cupiditate sed veritatis vero quis laborum. Vel atque commodi blanditiis dolore cum maiores omnis consequuntur quam exercitationem sit. Necessitatibus cumque at nisi aperiam. Consequuntur tempora earum a voluptatibus. Quisquam velit ducimus, iure aliquid error, obcaecati asperiores ullam sint porro impedit in hic voluptate nemo itaque placeat ut quis quia sed ipsam! Ut quaerat molestiae odit aliquam inventore cumque quod eveniet cupiditate magni fugit at iusto molestias t, minima esse aliquid omnis provident ipsum, deserunt repudiandae amet fuga sit illo sapiente eum nostrum. Distinctio ",
        link: 'https://example.com/image4',
        backgroundColor:' #51361ae7',
      }
      
  ];






  return (
    <div>
      {imageInfo.map((info, index) => (
        <div className= {styles.box}>
          <img key={index}
          src={info.src}
          alt={info.name}
          style={{height:"260px",width:"260px"}}
          />
          <div>
            <div>{info.content}</div>
            <button>Read More</button>
          </div>
        </div>
        ))}
           
    </div>
  )
}

export default Blogs
