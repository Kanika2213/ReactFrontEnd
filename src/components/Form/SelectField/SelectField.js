// function SelectField(props) {
    
//     const {options,error,onChange} = props

//     return (
//         <div>
//         <h3>Select the game you play?</h3>
//           <Select type="select" value={InputDemo?.name?.sport} onChange={onChange} error={error}>
//             <option>select</option>
//             {
//               //nesting for checking if null value given
//               options?.map(({value, label}) => <option key={label} value={value}>{label}</option>)
//             }
//           </Select>
//         </div>  
//     )
// }

import React from 'react';
import PropTypes from 'prop-types';
import { Select, Err } from './style';

function SelectField(props) {
  const {
    input, error, onChange, options, onBlur,
  } = props;
  return (
    <>
      <p><b>{input}</b></p>
      <Select className={(error === '') ? '' : 'error'} onChange={onChange} error={error} onBlur={onBlur}>
        <option>Select</option>
        {
          options && options.length
          && options.map(({ value, label }) => <option key={label} value={value}>{label}</option>)
        }
      </Select>
      <Err className={(error === '') ? 'noerror' : 'error'}>
        <p>{error}</p>
      </Err>
    </>
  );
}

export default SelectField;

SelectField.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  input: PropTypes.string,
  defaultText: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
};
SelectField.defaultProps = {
  error: '',
  input: '',
  options: [],
  defaultText: 'Select',
};
