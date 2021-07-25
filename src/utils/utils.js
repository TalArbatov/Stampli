/* eslint-disable */
export const parseInput = input => {
  const splitInput = input.split('\n').map(command => {
    const commandProperties = command.split(';');
    return {
      line: commandProperties[0],
      column: commandProperties[1],
      label: commandProperties[2],
      type: commandProperties[3],
      value: commandProperties[4],
    }
  });
  return splitInput;
};

export const validateInput = input => {
  if (!Array.isArray(input)) return false;
  input.forEach(command => {
    const { column, label, line, type, value } = command;
    // TODO: add specific validation for input types
    if (!column || !label || !line || !type || !value)
      return false;
  });
  return true;
};

export const getMaxCol = input => {
  let maxCol = 0;
  input.forEach(command => {
    if (parseInt(command.column) > maxCol) maxCol = parseInt(command.column);
  });
  return maxCol;
};
