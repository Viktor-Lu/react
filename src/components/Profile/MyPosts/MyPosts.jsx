import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let Posts= [
        {id:1,message:'My first Post',likesCount:1234},
        {id:2,message:'My second Post',likesCount:260},
        {id:3,message:'I like Post',likesCount:12}
    ]

    let PostsElement=Posts.map (p=><Post message={p.message} likesCount={p.likesCount}/>);


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
