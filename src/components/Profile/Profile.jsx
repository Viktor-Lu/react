import React from 'react';
import Post from './MyPosts/Post/Post'
import classes from './Profile.module.css';

const Profile = () => {
  return (
    < div className = {classes.content} >
    <div>
    <img src='https://cdnn21.img.ria.ru/images/151794/84/1517948413_0:105:2000:1230_600x0_80_0_0_e12706701a13b6260e2fa5f2e4626c94.jpg'></img>
  </div>
  <div>
    <img src='https://avatars.mds.yandex.net/i?id=bd0b536ab5c3f88dae1f186898c7aac8-5886220-images-thumbs&n=13'></img>
  </div>
  < div > Ava + description</div>
  <Post/>
</div>
)
}

export default Profile;
