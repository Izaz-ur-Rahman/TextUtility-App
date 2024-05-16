import React , {useState} from "react";

export default function TextForm(props) {
    // to convert text into upper case
   const handleUpClick = ()=>{

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Upper case" , "success")

   }
// to convert text into lower case
   const handleLowerClick = ()=>{

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into lower case" , "success")

   }
// to speak the text
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  // to clear  the text
  const clear = ()=>{

    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!" , "success")

   }

   const handleExtraSpace = () => {
    let newText = text.split(/\s+/); // Use \s+ to match one or more whitespace characters
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces" , "success")

  }


   const handleOnChange = (event)=>{

    setText(event.target.value);     // to allow weiting something in the text Area

   }

    const [text,setText] = useState('Enter text here');
  return (
<>
    <div className="container" style={{color:props.mode === 'dark'? 'white' : '#1A1741'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'grey' : 'white',color:props.mode === 'dark'? 'white' : '#1A1741'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3"  onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={speak}>to speak text</button>
      <button className="btn btn-primary mx-3" onClick={clear}>Clear Text </button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace }>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'? 'white' : '#1A1741'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length -1 }  words and {text.length} are characters</p>
        <p>{0.008 *  text.split(" ").length} minutes are taken to read it.</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something  in the TextBox above to  preview"}</p>
    </div>
    </>
  );
}
