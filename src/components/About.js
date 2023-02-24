import React from 'react'

export default function About(props) {
    return (
        <>
            <div className='container-fluid aboutMargin' style={props.changeMode} >
                <h1><i>About Us</i></h1>
                <p className='aboutPara'>It is a basic utility website created to manipulate your text as you want. You should enter your text in the text area and with the help of buttons you can manipulate your text as you want. </p>
            </div>
        </>
    );
}