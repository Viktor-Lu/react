import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import Like from './Post/like/like';

const MyPosts = () => {
    return (
        < div className={classes.descriptionBlock}>
          <h3>My Posts</h3>
            <div>
                <div>
                    <textarea>  </textarea>
                </div>
                <button>ADD post</button>
            </div>

            < div>
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
