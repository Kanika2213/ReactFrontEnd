//Practice 3
import React from "react";
import { getRandomNumber, getNextRoundRobin } from "../lib/utils/math";
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from "../../config/constant";   

class imageSlider extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
          current: 0
        }  
    }

    componentDidMount = () => {
        let {current} = this.state
        const {random, duration} = this.props
        
        setInterval (() => {
          if(random) {
            current = getRandomNumber(5)
          } else {
            current = getNextRoundRobin(5, current)
          }
          this.setState ({ current })
        } , duration)
    }
    
    render() { 
      let {current} = this.state
      const {height, duration, altText, banner} = this.props
      
        return banner.length > 0 ?  (
          <div> {console.log(current)}
            <img src={`${PUBLIC_IMAGE_FOLDER}${banner[current]}`} alt = {altText} height = {height} 
            duration = {duration}/>
          </div>
        ) :  (
          <div>
            <img src={`${PUBLIC_IMAGE_FOLDER}${DEFAULT_BANNER_IMAGE}`} alt = {altText} height = {height} 
            duration = {duration}/>
          </div>
        )     
    }   
}

export default imageSlider;
  

    