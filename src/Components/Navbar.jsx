import React from 'react';
import './Navbar.css'

const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><span class="badge text-bg-secondary fs-2">NewsWorld</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <div onClick={()=>setCategory("sports")} className="nav-link hov"  >Sports</div>
        </li>
        <li className="nav-item">
          <div onClick={()=>setCategory("entertainment")} className="nav-link hov" >Entertainment</div>
        </li>
        <li className="nav-item">
          <div onClick={()=>setCategory("science")} className="nav-link hov" >Science</div>
        </li>
        <li className="nav-item">
          <div onClick={()=>setCategory("health")} className="nav-link hov" >Health</div>
        </li>
        <li className="nav-item">
          <div onClick={()=>setCategory("technology")} className="nav-link hov" >Technology</div>
        </li>
        <li className="nav-item">
          <div onClick={()=>setCategory("business")} className="nav-link hov" >Business</div>
        </li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar