import * as React from 'react';
import { FC, ChangeEventHandler } from 'react';

type Props = {
  name: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  automationId?: string;
  value?: string;
  error?: string;
};

const TextInput: FC<Props> = ({
  name,
  label,
  onChange,
  placeholder,
  automationId,
  value,
  error
}) => {
  return (
    <div className={`form-group ${error && error.length > 0 ? 'has-error' : ''}`}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          data-automation-id={automationId}
          value={value}
          onChange={onChange}
        />
        <div data-automation-id={'textinput-error'} className="input">
          {error}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
