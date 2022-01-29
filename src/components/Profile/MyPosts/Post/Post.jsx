import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div>

            <div className={classes.item}>
                <img src='https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg'></img>
                {props.message}
            </div>

            <div className={classes.like}>

                <img src='https://cdn-icons-png.flaticon.com/512/2107/2107845.png'></img>

                {props.likesCount}

            </div>
        </div>
    )
}

export default Post;
