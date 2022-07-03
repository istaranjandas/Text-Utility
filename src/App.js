import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode2,setMode2] = useState('white');
  const toggleMode2 = ()=>{
    if(mode2==='white'){
    setMode2('dark');
    document.body.style.backgroundColor = 'black';
    }
    else{
      setMode2('white');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Istaranjan" mode={mode2} toggleMode={toggleMode2} aboutText="DIng" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" mode={mode2}/>
        {/* <About/> */}
      </div>
    </>
  );
};

export default App;