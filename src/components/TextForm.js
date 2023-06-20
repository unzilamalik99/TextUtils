import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText);
}
const handleLoClick=()=>{
let newText=text.toLowerCase();
setText(newText);
}
const handleClearClick=()=>{
  let newText="";
  setText(newText);
  }

  const handleCapitalizeClick =()=>{
  let newText=text.replace(/\b\w/g, (char) => char.toUpperCase());
  setText(newText);
  }

  const handleCopyText = ()=>{
    let myText = document.getElementById("mybox");
    navigator.clipboard.writeText(myText.value);
}
const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }


      
const handleOnChange=(event)=>{
setText(event.target.value)
}

const [text, setText]=useState("Enter a Text here!");

  return (
    <>
   <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>    
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>convert to Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCapitalizeClick}>convert to Capitalize </button>
        <button className='btn btn-primary mx-1 my-1 'onClick={handleCopyText}>copy Text </button>
        <button className='btn btn-primary mx-1 my-1 'onClick={onAlternatingCase}>convert to Alternate case </button>
        
 
                  
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} character </p>
      <p> {0.08*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something in the Text box above to preview to here!'}</p>

    </div>
    </>
  )
}




