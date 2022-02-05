import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsElement=props.state.Posts.map (p=><Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement=React.createRef();

    let addPost=()=>{
       let text=newPostElement.current.value;
       props.addPost(text);
        newPostElement.current.value='';
    }

    return (
        < div className={classes.descriptionBlock}>
          <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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
