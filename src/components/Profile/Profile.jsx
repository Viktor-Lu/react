import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div  className='classes.img'>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;
