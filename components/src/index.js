import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00PM"
          comment="la verdad bastante malo"
          avatar={faker.image.image()}
         />
       </ApprovalCard >
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="nice blog post!"
          avatar={faker.image.image()}        
          />
      </ApprovalCard>
      <ApprovalCard>      
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 4:00PM"
          comment="para el olvido"
          avatar={faker.image.image()}
         />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))