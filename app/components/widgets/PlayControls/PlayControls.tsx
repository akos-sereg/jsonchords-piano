import * as React from 'react';
import { useEffect, useContext } from 'react';
import styles from './styles.scss';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext';

const PlayControls = () => {
    const { isValidJson } = useContext(JsonChordsTextContext);

    return (
        <div className={styles.container}>
            <button className="btn btn-primary" disabled={!isValidJson}>Play</button>
            <button className="btn btn-default" disabled={!isValidJson}>Pause</button>
            <button className="btn btn-default" disabled={!isValidJson}>&lt; Previous</button>
            <button className="btn btn-default" disabled={!isValidJson}>Next &gt;</button>
        </div>
    );

};

export default PlayControls;
