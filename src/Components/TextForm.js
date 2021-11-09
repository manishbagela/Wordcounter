import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  //SetText will be used to change the value of text
  const handleUpClick = () => {
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLowClick = () => {
    console.log("Lowercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  }

  const clearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  }

  const copyText = () => {
    let mytext = document.getElementById('myBox');
    mytext.select();
    mytext.setSelectionRange(0, 999);
    navigator.clipboard.writeText(mytext.value);
  }

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces removed", "success");
  }
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h3 >{props.heading}</h3>
      <div className="mb-3">
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#4646f1' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange = {handleOnChange} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick = {clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick = {copyText}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick = {removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h4>Text Summary</h4>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>Average time to read the text: {0.008 * text.split(" ").length} minutes</p>
    </div>
    </>
  )
}
