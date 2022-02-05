import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let PostsElement = props.state.Posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        < div className={classes.descriptionBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}/>
                </div>
                <button onClick={addPost}>ADD post</button>
            </div>
            < div>
                {PostsElement}
            </div>
        </div>
    )
}

export default MyPosts;
