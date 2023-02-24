import React from 'react'

export default function Alert(props) {
    const capitalized =  (word)=>{
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div className='alertStyle' style={props.changeMode}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mb-0`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong> {props.alert.message}
        </div>}
        </div>
    )
}
