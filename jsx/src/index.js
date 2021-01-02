import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (


        <div className="ui container comments">
            <ApprovalCard>
                <div>
                <h4>Warning!</h4>
                Are You Sure You Want To Do This?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='saran' timeAgo="Today at 4:45AM" imageSrc='https://source.unsplash.com/random' Desc=" nice blog1" />
            </ApprovalCard>
            <ApprovalCard> <CommentDetail author='sam' timeAgo="Today at 7:25AM" imageSrc='https://source.unsplash.com/random' Desc="nice Blog" />
            </ApprovalCard>
            <ApprovalCard><CommentDetail author='alex' timeAgo="Yesterday at 1:45AM" imageSrc='https://source.unsplash.com/random' Desc="nice Blog3" />
            </ApprovalCard>

        </div>


    );
};

ReactDOM.render(<App />, document.querySelector('#root'));