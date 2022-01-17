import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    < div className = {classes.content} >
    <div>
    <img src='https://cdnn21.img.ria.ru/images/151794/84/1517948413_0:105:2000:1230_600x0_80_0_0_e12706701a13b6260e2fa5f2e4626c94.jpg'></img>
  </div>

  < div >
  Ava + description
  </div>
<Post/>
</div>
)
}

export default Profile;
