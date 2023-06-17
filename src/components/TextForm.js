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
const handleOnChange=(event)=>{
setText(event.target.value)
}

const [text, setText]=useState("Enter a Text here!");

  return (
    <>
   <div className="container">    
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
           <button className='btn btn-primary mx-1' onClick={handleCapitalizeClick}>convert to Capitalize </button>
           
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} character </p>
      <p> {0.08*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>

    </div>
    </>
  )
}





