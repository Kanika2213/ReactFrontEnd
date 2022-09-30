import React, { useState } from "react"
import { StyledTextFieldInput1 , StyledTextFieldInput2, StyledTextFieldInput3 } from "./style"
//import { TextField } from '@mui/material'

function TextFieldDemo () {
    
    //let setInput = props.input ? 'This is a Disabled Input': ''
    const input1 = false
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')

    // const isError = () => {
    //     console.log("I am rendering Error");
    //     if(input3>100) {
    //         return true;
    //     } return false;
    // }

    return (
        <>
        <div>
          <p>This is a Disabled Input</p>
          <StyledTextFieldInput1 value = {input1 ? 'Disabled Input': 'Valid Input'} />
        </div>
        <div>
          <p>A Valid Input</p>
          <StyledTextFieldInput2 onChange={e => setInput2(e.target.value)} value={input2} color="warning" focused/>
        </div>
        <div>
          <p>An Input with errors</p>
          <StyledTextFieldInput3 error = {input3.length>0 ? input3>100 ? true: false: false} onChange={e => setInput3(e.target.value)} value={input3}  
          helperText= {input3.length>0 ? input3>100 ? 'This value is greater than 100': '' : ''} 
        />
        </div>
        </>     
    )
}

export default TextFieldDemo;




