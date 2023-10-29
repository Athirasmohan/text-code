import React ,{useState} from 'react'

export default function LoginForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () =>{
    console.log("Button clicked" + text);
    let newText = text.toUpperCase();
   setText(newText);
   props.ShowAlert("Converted to Upper case","success");
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.ShowAlert("Converted to Lower case","success");
  }
  const handleTitleClick = () =>{
    let newText = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    setText(newText);
    props.ShowAlert("Converted to Title case","success");
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.ShowAlert("Clear Case","success");

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
    props.ShowAlert("Removed Extra Space","success");
}
const WhiteSpace = () => {
  let newText = text.replace(/\s/g, '')
  setText(newText);
  props.ShowAlert("Removed White Space","success");
}
const handlecamelCaseonClick = () => {
  let camelCaseText = text
    .split(' ')
    .map(function (word, index) {
      // First character upper case else lower case
      return word.charAt(0)
        .toUpperCase() + word.slice(1)
        .toLowerCase();
    })
    .join(' ');
  setText(camelCaseText);
}
const copyText = () => {
  navigator.clipboard.writeText(text);
  props.ShowAlert("Copied content","success");
}
  const handleReverse = (event) => {
    /* Convert string to array*/
    let newText = text.split("").reduce((acc, char) => char + acc, "");
    setText(newText);
  };
  const handleOnChange = (event) =>{
    console.log("Content changed");
    setText(event.target.value);
  }
  return (
    <>
    <div>
  <div className="container mb-3" style={{color:props.mode === 'dark' ? 'white' :'#042743'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" placeholder='Enter text here'  rows="8" style={{backgroundColor:props.mode === 'dark' ? 'grey' :'white',color:props.mode === 'dark' ? 'white' :'#042743'}}></textarea>
  <button type="button" onClick={handleUpClick} className="btn btn-primary mt-3">Convert to UpperCase</button>
  <button type="button" onClick={handleLoClick} className="btn btn-primary mt-3 mx-2">Convert to Lowercase</button>
  <button type="button" onClick={handleClearClick} className="btn btn-primary mt-3 mx-2">Clear Text</button>
  <button type="button" onClick={handleTitleClick} className="btn btn-primary mt-3 mx-2">Title Upper case</button>
  <button type="submit" onClick={speak} className="btn btn-warning mt-3 mx-2">Speak</button>
  <button type="submit" onClick={handleReverse} className="btn btn-primary mt-3 mx-2">Reverse Text</button>
  <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary mt-3 mx-2">Remove Extra space</button>
  <button type="submit" onClick={WhiteSpace} className="btn btn-primary mt-3 mx-2">Remove WhiteSpace</button>
  <button type="submit" onClick={handlecamelCaseonClick} className="btn btn-primary mt-3 mx-2">Covert to Camel case</button>
  <button type="submit" onClick={copyText} className="btn btn-primary mt-3 mx-2">Copy content</button>
</div>
    </div>
    <div className="container" style={{color:props.mode === 'dark' ? 'white' :'#042743'}}>
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Enter something to preview here"}</p>
    </div>
    </>
  )
}

