import React from 'react';
import faker from 'faker';
const CommentDetail = () => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar"  src='https://source.unsplash.com/random'/>
        </a>
        <div className="content">
            <a href="/" className="author">Saran </a>
        </div>
        <div className="metadata">
            <span className="date">
                Today at 6:00pm
            </span>
        </div>
        <div className="text">Nice Blog post!</div>
        </div>
  
    );
};

export default CommentDetail;