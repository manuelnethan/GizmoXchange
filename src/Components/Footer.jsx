import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="row text-white bg-success p-4">
                <div className="col-md-4">
                    <h4 className="text center">About us</h4>
                    <p>
                        
                    </p>
                    <p>
                    Welcome to GizmoXchange—your hub for top tech gadgets at unbeatable prices! 
                    From smartphones to laptops, we offer quality products from leading brands. 
                    Enjoy exclusive weekend deals and exceptional customer care 
                    for a seamless shopping experience.
                     Tech made affordable!
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="text center">Contact Us</h4>
                    <form action="">
                        <input type="text"
                         name="" id="" 
                         className="form control" 
                         placeholder="Enter Your Email"/><br/>
                         <br/>
                            <textarea name="" id="" 
                            placeholder="Leave a comment"
                             className="form control" 
                             rows="7"></textarea>
                             <br/>
                                <input type="submit"
                                 className="btn btn-outline-danger"
                                  value="Send Message" name="" id=""/>
                                  <br/>
                                </form>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="text-center">Stay Connected</h4>
                                    <br/>
                                        <a href="https://www.facebook.com">
                                            <img src="images/fb.png" alt=""/>
                                        </a>
                                        
                                        <a href="https://www.instagram.com">
                                            <img src="images/in.png" alt=""/>
                                        </a>
                                        <a href="https:www.x.com">
                                            <img src="images/x.png" alt=""/>
                                        </a>
                                        <br/>
                                            <p className="text-dark">
                                            Payment: Secure options like cards, digital wallets, and bank transfers. 

Delivery: Affordable rates calculated at checkout, with free shipping on select orders.

GizmoXchange—your go-to for tech, service, and savings!
                                            </p>
                                        </div>
                                    </section>
                                    <footer className="text-white bg-dark text-center p-2">
                                        <h5>Developed by Manuel. &copy; 2025. All Rights Reserved</h5>
                                    </footer>
                                </div>
                                )
}

                                export default Footer