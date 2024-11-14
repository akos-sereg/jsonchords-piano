import * as React from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import styles from './style.scss';

const MainPage = () => {

    const availableHeight = window.innerHeight - 450;

    return (
       <div>
           <Piano displayNotes={['O5-G', 'O2-C', "O4-A#"]} />
           <PlayControls />
           <textarea className={styles.jsonchordsText} style={{ height: availableHeight }}></textarea>
       </div>
   );

};

export default MainPage;
