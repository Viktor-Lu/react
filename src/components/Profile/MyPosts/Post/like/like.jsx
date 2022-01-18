import React from 'react';
import classes from './like.css';

const Like = (props) => {
  return (
  <div className ={classes.like}>

  {props.num}

</div>
)
}

export default Like;
