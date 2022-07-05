import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode2,setMode2] = useState('white');
  const toggleMode2 = ()=>{
    if(mode2==='white'){
    setMode2('dark');
    document.body.style.backgroundColor = 'black';
    showAlert("Dark mode enabled!","Success");
    }
    else{
      setMode2('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!","Success");
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
      <div className='container my-3'>
      <Navbar title="TextUtils" mode={mode2} toggleMode={toggleMode2} aboutText="About Us" />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" Alertfunc={showAlert} mode={mode2}/>} />
      </Routes>
      </div>
    </Router>
    
    </>
  );
};

export default App;