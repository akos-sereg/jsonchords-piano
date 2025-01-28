import * as React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsTextContext from './JsonChordsTextContext';
import styles from './styles.scss';

const JsonValidationSectionMessage = () => {
  const { isValidJson, data } = useContext(JsonChordsTextContext);
  return (
    <div className={styles.sectionMessage}>
      {!isValidJson ? (
        <div className="alert alert-danger" role="alert">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span className="sr-only">Error:</span>
          &nbsp;&nbsp;Enter a valid JSON
        </div>
      ) : (
        <h3>{data.title}</h3>
      )}
    </div>
  );
};

export default JsonValidationSectionMessage;
