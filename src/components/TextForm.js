import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick =() =>{
        // console.log("Up Button Clicked");
        const newText = text.toUpperCase();
        setText(newText);
        props.Alertfunc("UpperCase is done","Success");
    }
    const handleLowClick =() =>{
        // console.log("Up Button Clicked");
        const newText = text.toLowerCase();
        setText(newText);
        props.Alertfunc("LowerCase is done","Success");
    }
    const handleOnChange =(event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
      }
      const handleClearClick =() =>{
        const newText = "";
        setText(newText);
        props.Alertfunc("Cleared","Success");
    }
  return (
    <>
    <div className="form-group" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
    <h1 >{props.heading}</h1>
    
    <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={props.mode==='dark'?{color:'white',backgroundColor:'black'}:{color:'black',backgroundColor:'white'}} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Low Case</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
  </div>
  <div style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
  <h1>Text Summary</h1>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
  <p>{0.08 * text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something above"}</p>
  </div>
  </>
  )
}
