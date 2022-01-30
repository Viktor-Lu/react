import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to='/profile' className={link=>link.isActive?classes.active:classes.item}>
        Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to ='/dialogs' className={link=>link.isActive?classes.active:classes.item}>
        Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/news' className={link=>link.isActive?classes.active:classes.item}>
        News
      </NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/music' className={link=>link.isActive?classes.active:classes.item}>
        Music
      </NavLink>
    </div>
    <div className={classes.item} >
      <NavLink to='/settings' className={link=>link.isActive?classes.active:classes.item}>
        Settings
      </NavLink>
    </div>
  </nav>)
}

export default NavBar;
