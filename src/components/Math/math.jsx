import React, {useState} from "react";
import PropTypes from 'prop-types';

function MathOperation() {

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [operator, setOperator] = useState('');
    
    const handleOperation = (operator) => {
        switch(operator){
            case "+":
              return parseInt(first) + parseInt(second);
            case "-": 
              return parseInt(first) - parseInt(second);
            case "*":
              return parseInt(first) * parseInt(second);
            case "/": 
              return parseInt(first) / parseInt(second);
            case "":
              return ""    
            default:
              return "invalid operator"
          }
    }
    
    return (
        <div>
          <p>First Number</p>
          <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />

          <p>Second Number</p>
          <input type="text" value={second} onChange={(e) => setSecond(e.target.value)} />

          <p>operator Choice</p>
          <input type="text" value={operator} onChange={(e) => setOperator(e.target.value)} />

          <p>Operation Result</p>
          <input type="text" defaultValue={handleOperation(operator) || ''} />
          
        </div>
    )
}

MathOperation.propTypes = {
    first: PropTypes.number.isRequired,
    second: PropTypes.number.isRequired,
    operator: PropTypes.oneOf(['+', '-', '*', '/']),
  };

MathOperation.defaultProps = {
  first: 0,
  second: 0,
};
export default MathOperation;

