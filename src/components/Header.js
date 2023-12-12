import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css';

const Header = ({header, text}) => {
  return (
    <div className={`${classes.header}`}>
    <div className={`container `}>
      <h4 className={classes.headerText}>{header}</h4>
      <p className={classes.headerP}><Link to="/" className={classes.headerLink}>Home</Link> / {text}</p>
    </div>
    </div>
  )
}

export default Header
