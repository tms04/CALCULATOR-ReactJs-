import style from './App.module.css'

import OutBox from './components/OutBox'
import Calsiuttons from './components/Calsiuttons'
import { useState,useEffect } from 'react';
function App() {
  let [CalsiValue,setCalsiValue]=useState("");
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const allowedKeys = ['C','1','2','+','3','4','-','5','6','*','7','8','/','0','9','=','.'];
      if (allowedKeys.includes(key)) {
        updateCalsiValue(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [CalsiValue]);
  const updateCalsiValue = (key) => {
    switch (key) {
      case 'C':
        setCalsiValue("");
        break;
      case '=':
        setCalsiValue(eval(CalsiValue));
        break;
      default:
        let newValue = CalsiValue + key;
        setCalsiValue(newValue);
        break;
    }
  };
  const SetTheValue=(e)=>{
    switch(e.target.childNodes[0].data){
      case 'C':
        setCalsiValue("");
        break;
      case '=':
        setCalsiValue(eval(CalsiValue));
      break;
      default:
        let newValue=CalsiValue+e.target.childNodes[0].data;
        setCalsiValue(newValue);
      break;
    }
  }
  let lub=['C','1','2','+','3','4','-','5','6','*','7','8','/','0','9','=','.'];
  return (<>
    <div className={style.calculator}>
      <center>
        <OutBox CalsiValue={CalsiValue}/>
        <Calsiuttons listOfButtons={lub} SetTheValue={SetTheValue}/>
      </center> 
    </div>
    </>
  )
}

export default App
