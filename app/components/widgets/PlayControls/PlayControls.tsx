import * as React from 'react';
import { useEffect } from 'react';
import styles from './styles.scss';

const PlayControls = () => {
    return (
        <div className={styles.container}>
            <button className="btn btn-default">Play</button>
            <button className="btn btn-default">Pause</button>
            <button className="btn btn-default">&lt; Previous</button>
            <button className="btn btn-default">Next &gt;</button>
        </div>
    );

};

export default PlayControls;
