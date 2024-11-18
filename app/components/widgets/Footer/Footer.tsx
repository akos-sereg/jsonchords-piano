import * as React from 'react';
import githubLogo from '../../../images/github-logo.png';
import styles from './style.scss';

const Footer = () => (
  <div>
    <p className={styles.footer}>Find code on <img src={githubLogo} />&nbsp;<a href="https://github.com/akos-sereg/jsonchords-piano">https://github.com/akos-sereg/jsonchords-piano</a></p>
  </div>
);

export default Footer;
