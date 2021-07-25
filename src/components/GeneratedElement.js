import React from 'react';
import { TEXT_INPUT, SELECT } from '../utils/consts';

const GeneratedElement = ({
  command = {}
}) => {
  const { label = "", type, value } = command;
  switch(type) {
    case TEXT_INPUT:
      return (
        <span>
          <label>{ label }</label>
          <input type="text" placeholder={ value } />
        </span>
      );
    case SELECT:
      return (
        <span>
          <label>{ label }</label>
          <select>
            { value.split(',').map((option, index) => {
              return <option value={ option } key={ index }>{ option }</option>
            }) }
          </select>
        </span>
      );
    default:
      return <p>error</p>
  }
};

export default GeneratedElement;