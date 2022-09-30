import React from "react";
import InputDemo from "./pages/InputDemo/InputDemo";
import MathOperation from "./components/Math/math";
import ImageSlider from "./components/Slider/imageSlider";
import TextFieldDemo from "./components/TextField/TextField";
import { banner } from "./config/constant";
import FormInput from "./pages/Trainee/components/AddDialog/AddDialog";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    {/*<Navbar />*/}
    <FormInput />
    {/*<MathOperation />*/}
    {/*<InputDemo/>*/}
    {/*<TextFieldDemo />*/}
    {/*<ImageSlider banner={banner} altText='image not found' duration='1000' height='300' random={true} />*/}
    </div>
  );
}

export default App;
         
