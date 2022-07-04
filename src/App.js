import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';



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
      <Navbar title="TextUtils" mode={mode2} toggleMode={toggleMode2} aboutText="DIng" />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" Alertfunc={showAlert} mode={mode2}/>
        {/* <About/> */}
      </div>
    </>
  );
};

export default App;