import React from 'react';
import classes from './like.module.css';

const Like = (props) => {
  return (
  <div className ={classes.like}>

  <img src='https://cdn-icons-png.flaticon.com/512/2107/2107845.png'></img>

  {props.num}

</div>
)
}

export default Like;
