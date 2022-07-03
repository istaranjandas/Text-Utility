import React,{useState} from 'react'

export default function About() {
    const [Mode,setMode] = useState('Dark Mode')
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    })
    const styleToggle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
                
            }) 
            setMode('White Mode');
        }
        else{
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            }) 
            setMode('Dark Mode');
        }
    }
    
  return (
    <>
    <div className="jumbotron my-3 mx-3" style={myStyle}>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    </div>
    <button className="btn btn-primary" onClick={styleToggle}>{Mode}</button>
    </>
  )
}
