import React from 'react'
import { AiFillPhone } from 'react-icons/ai';





function Contact() {


    return (
        <div>
             <div className="row">
                <div className="container">
                    <div className="row">

                       <div className="col-sm-12">
                           <h2 className="blockHeading">Contact Us</h2>
                           <p><strong>This is an address <br />
                           Address Line 2 <br />
                           City, State Zip</strong> </p>
                           
                           <p><AiFillPhone /> FAX: 999-999-9999</p>
                           
                           <p><AiFillPhone /> PHONE: 801-333-3333</p>
                       </div>

                       

                    </div>

                    <div className="row">
                        <div className="col-sm-12">

                            <p><strong>We welcome any comments or questions you may have. Please fill in the form below.</strong></p>
                            <form className="contactForm">

                                <input type="text" placeholder="Name"/> <br/>
                                <input type="text" placeholder="Email"/> <br/>
                                <textarea type="text" rows="8" cols="100" placeholder="Message"/> <br/>
                                <button className="submit" type="submit">Send</button>

                            </form>

                        </div>
                    </div>       

                </div>
            </div>
        </div>
    )
}


export default Contact; 

