import * as React from 'react';
import { FC, createContext, useState, useMemo } from 'react';

interface JsonChordsTextContextType {
    isValidJson: boolean;
    setValidJson: (isValid: boolean) => void;
    json: string;
    setJson: (json: string) => void;
}

const JsonChordsTextContext = createContext<JsonChordsTextContextType>({
    isValidJson: false,
    setValidJson: () => {},
    json: '',
    setJson: () => {},
});

export const JsonChordsTextContextProvider: FC = ({ children }) => {
    const [isValidJson, setValidJson] = useState(false);
    const [json, setJson] = useState('');

    const jsonContext = useMemo(() => ({
       json,
       setJson,
       isValidJson,
       setValidJson
    }), [json, setJson, isValidJson, setValidJson]);

    return (
        <JsonChordsTextContext.Provider value={jsonContext}>
            {children}
        </JsonChordsTextContext.Provider>
    );
};

export default JsonChordsTextContext;