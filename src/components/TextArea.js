import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  setInput
}) => {
  return (
    <div>
      <textarea rows="4" cols="50" onChange={ e => setInput(e.target.value) }/>
    </div>
  )
};

TextArea.propTypes = {
  setInput: PropTypes.func
}

export default TextArea;