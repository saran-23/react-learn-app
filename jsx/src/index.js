import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
const App = () =>{
    return(

            <div className="ui container comments">
            
                <CommentDetail author='saran' timeAgo="Today at 4:45AM" />
                <CommentDetail author='sam' timeAgo="Today at 7:25AM"/>
                <CommentDetail author='alex' timeAgo="Yesterday at 1:45AM"/>
            </div>
            
            
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));