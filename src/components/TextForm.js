import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter you text here...");

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text changed to uppercase!", "success : ")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text changed to lowercase!", "success : ")
    }
    const handleCapitalizedClick = () => {
        let arr = text.split(' ');
        let newArr = arr.map((element) => {
            return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        })
        let newText = newArr.join(" ");
        setText(newText)
        props.showAlert("Capitalized the text!", "success : ")
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed all extra spacess!", "success : ")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared!", "success : ")
    }

    return (
        <div className='vh-100' style={props.changeMode}>
            <div className="container" >
                <h1 className='py-2'><i>Enter your text here:</i></h1>
                <div className='pb-3' >
                    <textarea className="form-control" rows="10" value={text} onChange={handleOnChange} style={props.changeMode} />
                </div>
                <button className={`btn btn-outline-${props.changeMode.btnStyle} mx-1`} onClick={handleUpClick}>Change to uppercase</button>
                <button className={`btn btn-outline-${props.changeMode.btnStyle} mx-1`} onClick={handleLowClick}>Change to lowercase</button>
                <button className={`btn btn-outline-${props.changeMode.btnStyle} mx-1`} onClick={handleCapitalizedClick}>Capitalized text</button>
                <button className={`btn btn-outline-${props.changeMode.btnStyle} mx-1`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-outline-${props.changeMode.btnStyle} mx-1`} onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3 ">
                <h2><i>Text Summary</i></h2>
                <p>Your text have {text.length === 1 ? 0 : (text.split(/[ ]+/).length - 1)} words and {text.length} characters </p>
                <h2 className='my-3'><i>Preview</i></h2>
                <p >{text.length > 0 ? text : `Enter text above to preview`}</p>
            </div>
        </div>
    )
}
