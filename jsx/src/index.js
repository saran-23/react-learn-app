import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () =>{
    return(


            <div className="ui container comments">
                <ApprovalCard />
                <CommentDetail author='saran' timeAgo="Today at 4:45AM" imageSrc='https://source.unsplash.com/random' Desc=" the first comment" />
                <CommentDetail author='sam' timeAgo="Today at 7:25AM" imageSrc='https://source.unsplash.com/random' Desc="I am  the Second comment" />
                <CommentDetail author='alex' timeAgo="Yesterday at 1:45AM" imageSrc='https://source.unsplash.com/random' Desc="i am the last comment" />
            </div>
            
            
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));