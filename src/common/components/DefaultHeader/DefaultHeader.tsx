import { LogoIcon } from '@/assets/Icons';
import React from 'react';
import classes from './DefaultHeader.module.css';

const DefaultHeader: React.FC = () => {
  return (
    <header className={classes.container}>
      <LogoIcon />
      <ul className={classes.menuItemsWrapper}>
        <li className={classes.menuItems}>About</li>
        <li className={classes.menuItems}>Work</li>
        <li className={classes.menuItems}>Skills</li>
        <button aria-label="ContactMe_Button" className={classes.contactButton}>
          Contact Me
        </button>
      </ul>
    </header>
  );
};

export default DefaultHeader;
