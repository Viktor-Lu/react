import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div  className='classes.img'>
            <ProfileInfo/>
            <MyPosts Posts={props.Posts}/>
        </div>
    )
}
export default Profile;
