import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  //SetText will be used to change the value of text
  const handleUpClick = () => {
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    console.log("Lowercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  }
  return (
    <>
    <div className = "container">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" onChange = {handleOnChange} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-4" onClick = {handleLowClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h4>Your text summary</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Average time to read the text: {0.008 * text.split(" ").length} minutes</p>
    </div>
    </>
  )
}
