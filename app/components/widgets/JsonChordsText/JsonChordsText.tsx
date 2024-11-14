import * as React from 'react';
import { useState, useContext } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsTextContext from './JsonChordsTextContext';
import styles from './styles.scss';

const JsonChordsText = () => {
    const { isValidJson, setValidJson, setJson } = useContext(JsonChordsTextContext);

    const availableHeight = window.innerHeight - 450 - (isValidJson ? 0 : 52);
    const handleJsonChanged = (event: any) => {
        const json = event.target.value;
        try {
            JSON.parse(json);
            setJson(json);
            setValidJson(true);
        } catch (error) {
            setJson('');
            setValidJson(false);
        }
    };

    return (
        <div>
            {!isValidJson ? (
                <div className="alert alert-danger" role="alert">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Error:</span>
                  &nbsp;&nbsp;Enter a valid JSON
                </div>
            ) : null}

            <textarea
                onChange={handleJsonChanged}
                spellCheck="false"
                className={`${isValidJson ? styles.jsonchordsText : styles.jsonchordsTextInvalidJson}`}
                style={{ height: availableHeight }}>
            </textarea>
        </div>
    );
};

export default JsonChordsText;
