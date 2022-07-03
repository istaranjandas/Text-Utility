import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick =() =>{
        // console.log("Up Button Clicked");
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick =() =>{
        // console.log("Up Button Clicked");
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className="form-group">
    <h1>{props.heading}</h1>
    
    <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Low Case</button>
  </div>
  <h1>Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.08 * text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </>
  )
}
