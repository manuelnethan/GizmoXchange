import React from 'react'

const Caurosel = () => {
  return (
    <section 
    className="row">
            <div 
            className="col-md-12">
                {/* <!-- below div will carry the three parts of a carousel -->  */}
                 <div 
                 className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- wrapper starts here  --> */}
                     <div 
                     className="carousel-inner">
                        <div 
                        className="carousel-item active image">
                            <img src="images/d.jpeg" alt="" 
                            className="d-block w-100"/>
                        </div>
                        <div 
                        className="carousel-item image">
                            <img src="images/s5.jpg" alt="" 
                            className="d-block w-100"/>
                        </div>
                        <div 
                        className="carousel-item image">
                            <img src="images/s4.jpeg" alt="" 
                            className="d-block w-100"/>
                        </div>
                     </div>
                     

                     
                      <a href="#mycarousel" data-bs-slide="prev" 
                      className="carousel-control-prev">
                        <span 
                        className="carousel-control-prev-icon bg-danger"></span>
                      </a>
                      <a href="#mycarousel" data-bs-slide="next" 
                      className="carousel-control-next">
                        <span 
                        className="carousel-control-next-icon bg-danger"></span>
                      </a>
                 </div>
            </div>
          </section>
  )
}

export default Caurosel