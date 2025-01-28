import * as React from 'react';
import { FC, createContext, useState, useMemo } from 'react';

interface JsonChordsTextContextType {
  isValidJson: boolean;
  setValidJson: (isValid: boolean) => void;
  json: string;
  setJson: (json: string) => void;
  data: any | null;
  setData: (data: any | null) => void;
}

const JsonChordsTextContext = createContext<JsonChordsTextContextType>({
  isValidJson: false,
  setValidJson: () => {},
  json: '',
  setJson: () => {},
  data: null,
  setData: () => {}
});

export const JsonChordsTextContextProvider: FC = ({ children }) => {
  const [isValidJson, setValidJson] = useState(false);
  const [json, setJson] = useState('');
  const [data, setData] = useState(null);

  const jsonContext = useMemo(
    () => ({
      json,
      setJson,
      isValidJson,
      setValidJson,
      data,
      setData
    }),
    [json, setJson, isValidJson, setValidJson, data, setData]
  );

  return (
    <JsonChordsTextContext.Provider value={jsonContext}>{children}</JsonChordsTextContext.Provider>
  );
};

export default JsonChordsTextContext;
