import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import Like from './Post/like/like';

const MyPosts = () => {
  return (
    < div>
    My Posts
    <div>
    <textarea>  </textarea>
    <button>ADD post </button>
  </div>

  < div >
  <Post message='My first post'/>
  <Like num='1520'/>
  <Post message='My second post'/>
  <Like num='211'/>
  <Post message='I like post'/>
  <Like num='33'/>
  </div>

</div>
)
}

export default MyPosts;
