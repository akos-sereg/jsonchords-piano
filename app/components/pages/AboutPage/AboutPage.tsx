import * as React from 'react';
import styles from './style.scss';

const AboutPage = () => (
  <div className={styles.about_page}>
    <h1>About</h1>
    This application uses the following technologies:
    <ul>
      <li>React</li>
      <li>React Router</li>
      <li>Redux</li>
      <li>Node</li>
      <li>Bootstrap</li>
    </ul>
  </div>
);

export default AboutPage;
