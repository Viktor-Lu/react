import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css';

const Profile = () => {
  return (
    < div className = {classes.content} >

    <img src='https://cdnn21.img.ria.ru/images/151794/84/1517948413_0:105:2000:1230_600x0_80_0_0_e12706701a13b6260e2fa5f2e4626c94.jpg'></img>
    
  <div>
  AVA +description
  </div>
<MyPosts/>
</div>
)
}

export default Profile;
