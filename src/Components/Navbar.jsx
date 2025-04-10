import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="row">
    <div className="col-md-12">
        
         <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to={"/"} className="navbar-brand"><b>GizmoXchange</b></Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            
             <div className="collapse navbar-collapse" id="navbarcollapse">
                <div className="navbar-nav">
                    <Link to={"/signup"} className="nav-link active">Signup</Link>
                    <Link to={"/signin"} className="nav-link">Signin</Link>
                    <Link to={"/addproduct"} className="nav-link">Post</Link>
                </div>
             </div>
         </nav>
    </div>
 </section>
  )
}

export default Navbar