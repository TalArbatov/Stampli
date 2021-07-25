import React, { useState } from 'react';
import PropTypes from 'prop-types';
// TODO: Webpack path alias
import { getMaxCol } from '../utils/utils';
import GeneratedElement from './GeneratedElement';

const GeneratedForm = ({
  input = []
}) => {
  const maxColumns = getMaxCol(input);
  return (<div 
    className="grid-container" 
    style={ { display: 'grid', gridGap: '50px 100px', gridTemplateColumns: `repeat(${maxColumns}, 1fr)` } }>
    { input.map((command, index) => {
      const { line, column } = command;
      console.log(line, column)
      return (
        <span style={ {
          gridColumn: column, 
          gridRow: line, 
        } }>
          <GeneratedElement 
        key={ index } 
        command={ command } />
        </span>
      )
    }) }
  </div>)
};

GeneratedForm.propTypes = {
  input: PropTypes.array
}

export default GeneratedForm;