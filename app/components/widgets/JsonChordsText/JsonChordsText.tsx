import * as React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsTextContext from './JsonChordsTextContext';
import styles from './styles.scss';

const JsonChordsText = () => {
  const textAreaRef = useRef(null);
  const { isValidJson, setValidJson, setJson, setData, data, json } =
    useContext(JsonChordsTextContext);
  const availableHeight = window.innerHeight - 450;

  const handleJsonChanged = (event: any) => {
    const json = event.target.value;
    try {
      const data = JSON.parse(json);
      setJson(json);
      setValidJson(true);
      setData(data);
      localStorage.setItem('most-recent-data', json);
    } catch (error) {
      setJson('');
      setValidJson(false);
      setData(null);
    }
  };

  useEffect(() => {
    const mostRecentData = localStorage.getItem('most-recent-data');
    if (mostRecentData) {
      textAreaRef.current.value = mostRecentData;
      handleJsonChanged({ target: { value: mostRecentData } });
    }
  }, []);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        onChange={handleJsonChanged}
        spellCheck="false"
        className={`${isValidJson ? styles.jsonchordsText : styles.jsonchordsTextInvalidJson}`}
        style={{ height: availableHeight }}
      ></textarea>
    </div>
  );
};

export default JsonChordsText;
