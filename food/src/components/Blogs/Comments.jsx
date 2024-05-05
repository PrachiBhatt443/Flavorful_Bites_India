import React from 'react';

import { FaUser} from "react-icons/fa";
import styles from './Blogs.module.css'; // Import CSS module
const Comments = () => {
    const commentDetails = [
        { name: 'John Doe', time: '3 hours ago', content: 'This is the comment content.' },
        { name: 'Jane Smith', time: '5 hours ago', content: 'Another comment here.' },
        // Add more comment details as needed
      ];
  return (
    <div className={styles.commentContainer}>
    {commentDetails.map((comment, index) => (
      <div key={index} className={styles.commentBox}>
        <FaUser className={styles.avatar}/>{/* Assuming the people icon */}
        <div className={styles.commentContent}>
          <h3 className={styles.commentName}>{comment.name}</h3>
          <h4 className={styles.commentTime}>{comment.time}</h4>
          <div className={styles.commentText}>
            {comment.content}
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};


export default Comments;
