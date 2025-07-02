import React, { Component } from 'react'


export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/newsdetails">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/newsdetails#">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/newsdetails">Link</a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">business     </a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">entertainment</a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">general</a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">health</a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">science</a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">sports</a></li>
         <li className="nav-item"><a className="nav-link" href="/newsdetails">technology</a></li>
      </ul>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default NavBar
