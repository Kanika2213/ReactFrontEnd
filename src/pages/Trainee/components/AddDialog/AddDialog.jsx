import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function FormInput() {

    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [touched, setTouched] = useState({
          name: false,
          email: false,
          password: false,
          confirmPassword: false
      })
    const [error, setError] = useState({
          name:false,
          email: false,
          password: false,
          confirmPassword: false
    })

    const handleClickOpen = () => {
        setOpen(true);
    }  

    const handleClose = () => {
        setOpen(false);
        console.log({name, email, password,confirmPassword});
    }

    const handleChange = (e, targetEvent) => {
      if(targetEvent === 'name') {
        setName(e.target.value)
      } 
      else if (targetEvent === 'email') {
        setEmail(e.target.value)
      }
      else if (targetEvent === 'password') {
        setPassword(e.target.value)
      }
      else if (targetEvent === 'confirmPassword') {
        setConfirmPassword(e.target.value)
      }
    }

    const handleOnBlur = (action) => {
        setTouched({
            ...touched, 
            [action]: true
        })   
    }

    const hasError = (action, event) => {
        if(action === 'name'){
          var regexName = /^[a-zA-Z ]{2,30}$/;
          return regexName.test(event)
        }  
        else if (action === 'email'){
          var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          return regexEmail.test(event)
        } 
        else if (action === 'password'){
          var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          return regexPassword.test(event)
        } 
        else if (action === 'confirmPassword'){
          if (event === password){
            return true;
          } else return false;
        }
    }

    const getError = (action, event) => {
      /*if (touched[action]){
        console.log('I have entered');
          handleError(action, event)
      }*/
      if(touched[action] && event === ''){
        switch(action){
          case "name":
            return 'Name is a required field';
          case "email": 
            return 'Email is a required field';
          case "password":
            return 'Password is a required field';
          case "confirmPassword": 
            return 'Confirm Password is a required field';   
          default:
            return ""
        }
      }
      else if (touched[action] && !hasError(action, event)){
          if(action === 'name') {
            return 'Name must be a valid name';
          }  
          else if(action === 'email') {
            return 'Email Address must be a valid email';
          } 
          else if(action === 'password') {
            return 'Must contains 8 characters, atleast one uppercase letter, one lowercase letter, one number and a special character';
          }  
          else if(action === 'confirmPassword') { 
            return 'Password must match';   
          }    
      }
    }

    useEffect(() => {
      
    },[hasError]);

    const handleError = (action, event) => {
      if((action === 'name' || 'email' || 'password' || 'confirmPassword') && hasError(action, event)){
        setError({ ...error, [action]: false })
      }  
    }
   
    const handleSubmit = () => {
      console.log(error);
      if(!(error.name && error.email && error.password && error.confirmPassword)){
        return true;
      } return false;
    }
 
    return (
    <>
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Trainee
    </Button>
    </div>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
    <DialogContent>
        <DialogContentText>Enter your trainee details</DialogContentText>
        &nbsp;
        <div>   
        <TextField
          required
          label="Name"
          variant="outlined"
          onChange={(e) => handleChange(e,'name')}
          onBlur={() => handleOnBlur('name')}
          error={getError('name', name)}
          helperText={getError('name', name)}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"><AccountCircle/></InputAdornment>,
          }}
        />
       </div>
       &nbsp;
       <div> 
        <TextField
          label="Email Address"
          variant="outlined"
          onChange={(e) => handleChange(e, 'email')}
          onBlur={() => handleOnBlur('email')}
          error={getError('email', email)}
          helperText={getError('email', email)}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
          }}
        />
        </div> 
        &nbsp;
       <div> 
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => handleChange(e,'password')}
          onBlur={() => handleOnBlur('password')}
          error={getError('password', password)}
          helperText={getError('password', password)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><VisibilityOffIcon /></InputAdornment>,
          }}
        />
        &nbsp;
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          onChange={(e) => handleChange(e,'confirmPassword')}
          onBlur={() => handleOnBlur('confirmPassword')}
          error={getError('confirmPassword', confirmPassword)}
          helperText={getError('confirmPassword', confirmPassword)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><VisibilityOffIcon /></InputAdornment>,
          }}
        />
        </div> 
        <DialogActions>
          <Button color="primary" onClick={handleClose} variant="outlined">CANCEL</Button>
          <Button disabled={handleSubmit()} variant="outlined" onClick={handleClose} autoFocus>submit</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>     
    </>     
    )
}

export default FormInput;