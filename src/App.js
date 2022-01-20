import { useState } from "react";
import Movies from "./Movies/Movies";


function App() {
  const [currentValue,SetCurrent] = useState("");

  function InpValue(val){
    SetCurrent(val)
  }
  return (
    <Movies 
    GetValue = {currentValue} 
    Val = {InpValue} 
    />
  );
}

export default App;
