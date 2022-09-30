import React from "react";
import PropTypes from 'prop-types';
import { ButtonStyle} from "./style";

function ButtonGroup(props) {
    const {disabled, value} = props

    return (
        <div>
          <ButtonStyle type={value} disabled={disabled}>
          {value}
          </ButtonStyle>
        </div>
    )
}

ButtonGroup.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

ButtonGroup.defaultProps = {
  disabled: false,
};

export default ButtonGroup;