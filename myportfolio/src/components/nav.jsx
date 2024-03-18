import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './CSS/nav.css'


const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Anurag</a>
    <span className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"> 
      <i className="fa-solid fa-burger" style={{color:"black",border:"none"}}></i>
    </span>
    <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <i className="fa-regular fa-circle-xmark"  data-bs-dismiss="offcanvas" aria-label="Close"></i>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  aria-current="page" href="#about">Themes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active"  aria-current="page" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#contactmeSegment">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Certifications">Cetifications</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link active"  aria-current="page" href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Nav
