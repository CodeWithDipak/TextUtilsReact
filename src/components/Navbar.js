import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  return (
    <>
    
      <div className="container-fluid " id="border" style={props.changeMode}>
        <nav className="navbar navbar-expand-lg " >
          <div className="container-fluid" >
            <a href="#" className="navbar-brand logoTextSize" style={props.changeMode} >{props.title}</a>
            <div className='flex'>
              <div className="circle1" onClick={props.onClick1}></div>
              <div className="circle2" onClick={props.onClick2}></div>
              <div className="circle3" onClick={props.onClick3}></div>
              <div className="circle4" onClick={props.onClick4}></div>
              <div className="circle5" onClick={props.onClick5}></div>
            </div>
          </div>
        </nav>
      </div>
  
    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  about: "About"
}



