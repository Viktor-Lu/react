import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/state";

const Profile = (props) => {
    return (
        <div  className='classes.img'>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;
