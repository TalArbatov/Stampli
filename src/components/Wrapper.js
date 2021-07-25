import React, { useState } from 'react';
import TextArea from './TextArea';
import GeneratedForm from './GeneratedForm';
import { parseInput } from '../utils/utils';

const Wrapper = ({ }) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <TextArea setInput={ setInput } />
      <GeneratedForm input={ parseInput(input) } />
    </div>
  )
};

export default Wrapper;