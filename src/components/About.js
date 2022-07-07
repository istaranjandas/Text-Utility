import React from 'react'


export default function About(props) { 
    const ding=(a)=>{
        a = a.toLowerCase();
        if (a==="dark"){
        return("light");
    }return("dark");
    }
  return (
    <>
    <div className={`jumbotron text-${ding(props.mode)} my-3 mx-3 `}>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    </div>
    
    </>
  )
}
