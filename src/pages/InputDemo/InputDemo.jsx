import React from "react";
import TextField from "../../components/Form/TextField/TextField";
import SelectField from "../../components/Form/SelectField/SelectField";
import RadioGroup from '../../components/Form/RadioGroup/RadioGroup';
import ButtonGroup from "../../components/Form/Button/Button";
import schema from "../Helper/inputSchema";
import { selectOptions ,radiOptionFootball, radiOptionCricket } from "../../config/constant";

class InputDemo extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
        name: "", sport: "", cricket: "", football: "", touched: {
          name: false,
          sport: false,
          cricket: false,
          football: false
        }
      }
    }

    handleNameChange = (e) => {
      this.setState({ name: e.target.value })
    }

    handleSportChange = (e) => {
      this.setState({ sport: e.target.value })
    }

    handleRadioGroup = (e) => {
      const {sport} = this.state
      return this.setState({ [sport]: e.target.value })
    }

    radiOption = () => {
      const {sport} = this.state
      if(sport === 'cricket') {
        return radiOptionCricket
      } 
      else if (sport === 'football') {
        return radiOptionFootball
      }
    }

    getError = (action) => {
      const {touched} = this.state
      if(touched[action] && this.hasError()) {
        try{
          schema.validateSyncAt(action, this.state)
        } catch (error) {
          return error.message;
        }
      }
    }

    hasError = () => {
      try{ schema.validateSync(this.state) 
      }
     catch (error) {
       return true
      } 
     return false 
    }

    handleOnBlur = (action) => {
      console.log('touched');
      const {touched} = this.state
      console.log(this.state.sport);
      this.setState({
        touched: {
          ...touched, 
          [action]: true,
        }
      }) 
    }

    isTouched = () => {
      const {name, sport, cricket, football} = this.state
      return !!(name || sport || cricket || football)
    }
  
    render() {
      const {sport} = this.state
      console.log(this.state);
    return (
        <div>
          <h3>Name</h3> 
          <TextField type = "text" onChange={(e) => this.handleNameChange(e)} error={this.getError('name')} onBlur={() => this.handleOnBlur('name')} />
          
          <SelectField onChange={this.handleSportChange} error={this.getError('sport')} options={selectOptions} onBlur={() => this.handleOnBlur('sport')}/> 
          {
            sport === '' || sport === 'select' ? '' : (
              <>
              <h4>What you do?</h4>
                <RadioGroup onChange={this.handleRadioGroup} error={this.getError(sport)} options={this.radiOption()} onBlur={() => this.handleOnBlur(sport)}/>
              </>
            )
          } 

        <div>
          <ButtonGroup disabled={!this.isTouched() || this.hasError()} color='default' value='Submit'/>
        </div>
        </div>
    )
} }
          
export default InputDemo;