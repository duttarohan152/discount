import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">{props.feature1}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">{props.feature2}</Link>
                    </li>
                </ul>
                <div className={`form-check form-switch text-${(props.mode === 'dark')?'light':'dark'} mx-1`}>
                    <input className="form-check-input" onChange={props.switchTheme} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">DM</label>
                </div>
            </div>
        </div>
        </nav>
  )
}

// Navbar.propTypes =
// {
//     title: PropTypes.string.isRequired,
//     feature1: PropTypes.string.isRequired,
//     feature2: PropTypes.string
// }

// Navbar.defaultProps = 
// {
//     title: "Title of Project",
//     feature1: "Feature 1",
//     feature2: "Feature 2"
// }