import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsElement=props.state.Posts.map (p=><Post message={p.message} likesCount={p.likesCount}/>);
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
                {PostsElement}
            </div>
        </div>
    )
}

export default MyPosts;
