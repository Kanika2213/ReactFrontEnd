import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import { Radio } from './style.js';

function RadioGroup(props) {
    const {options, onChange, error} = props
    return(
      <> 
      {
       options && options.length && options?.map(({value,label}) => (
          <Fragment key={label}>
          <Radio type='radio' name='sport' value={value} onChange={onChange} error={error}/>
          {label}
          </Fragment>))
      }    
      </>
    )
}

RadioGroup.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
};
RadioGroup.defaultProps = {
  error: '',
  options: [],
};

export default RadioGroup;