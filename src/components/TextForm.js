import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick =() =>{
        console.log("Up Button Clicked");
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =(event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    <div className="form-group">
    <h1>{props.heading}</h1>
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick} >Convert to Upper Case</button>
  </div>
  )
}
