import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <>
    <div className="container-fluid" id="border" style={props.changeMode}>
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid" >
          {/* <Link to="/" className="navbar-brand" style={props.changeMode} >{props.title}</Link> */}
          <a href="#" className="navbar-brand" style={props.changeMode} >{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div className="navbar-nav" >
              <a href="#" className="nav-link active" style={props.changeMode} aria-current="page" >Home</a>
              {/* <Link to="/" className="nav-link active" style={props.changeMode} aria-current="page" >Home</Link> */}
              {/* <Link to="/about" className="nav-link" style={props.changeMode} >{props.about}</Link> */}
            </div>
          </div>
          <div className='flex'>
            <b className='mx-2'>{`Click to change background ->`}</b>
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



