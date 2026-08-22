import React from "react";
import "./Contact.css"
import { Link } from "react-router-dom";

const Contact=(props)=>
{
    return(
        <>
         <section>
            <div className="menuhero ">
            <div className="d-flex  justify-content-center align-items-center h-75">
                <h1 className="text-white text-uppercase display-4 ">Contact Us</h1>
            </div>

           <div className="d-flex  justify-content-center align-items-center h-25">
             <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                     <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link> 
                </li>
                <li className="breadcrumb-item active" aria-current="menu" style={{ color: "white", textDecoration: "none", cursor:"pointer" }}>Contact</li>
                </ol>
            </nav>
           </div>
            </div>

        </section>

        <section className="background pt-5">
            <div className="text-center products pt-5 pb-5">
                <span>{props.conspan}</span>
              <h1 className="text-light fw-bold text-uppercase">{props.conhead}</h1>
          </div>
           <div className="container-fluid contacts p-5">
            <div className="row g-3 ">

                <div className="col-12 col-lg-6">
                    <img src="/images/Illustration/gallery-1 (1).jpg" alt="" className="h-100 w-100"/>
                </div>

                <div className="col-12 col-lg-6">
                     <div className="contact d-flex justify-content-center align-items-center pt-5 h-100 w-100 p-2">
                    <div className="row ">
                        <div className="col-lg-6">
                        <input type="text" className="form-control"  placeholder="First Name"/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                        <input type="text" className="form-control "  placeholder="Last Name"/>
                        </div>
                        <div className="col-md-4 pt-4 text-light">
                        <input type="date" className="form-control text-light " />
                        </div>
                        <div className="col-md-4 pt-4 ">
                        <input type="time" className="form-control text-light "/>
                        </div>
                        <div className="col-md-4 pt-4">
                        <input type="text" className="form-control text-light "  placeholder="Phone"/>
                        </div>
                        <div className="col-lg-12 pt-4">
                         <textarea  className="form-control text-light " rows="5">Message</textarea>
                        </div>
                        <div className="text-center pt-5">
                        <button type="button" className="">{props.conbtn}</button>
                    </div>
                    </div>
                    
            </div>
                </div>
            </div>
           </div>


        </section>

        
       <footer className="footer">
            <div className="container pt-5 pb-5 ">
                <div className="row g-4 pt-5 pb-5">

                    <div className="col-12 col-md-6 col-lg-2">   
                        <h5 className="text-light text-uppercase pb-3">{props.footerabt} </h5>
                        <p className="text-secondary">{props.footerp} </p>

                        <div className="d-flex justify-content-start align-items-center gap-3 pt-4">
                               {
                                    props.footeri.map(function(item){
                                        return(
                                            <i className={item.imagei}></i>
                                        )
                                    })
                               }
                        </div>
                    </div>

                    <div  className="col-12 col-md-6 col-lg-4 ps-lg-4">
                        <h5 className="text-light text-uppercase pb-3">{props.footerblg}</h5>
                        
                            {
                                props.footercon.map(function(fcon){
                                    return(
                                       <div className="d-flex justify-content-evenly align-items-center gap-2 pt-2">
                                        <div>
                                            <img src={fcon.footerimg} alt="" height="100px" width="100px"/>
                                        </div>
                                         <div>
                                            <p className="text-light">{fcon.footerpara}</p>
                                            <span className="text-secondary"><i className="bi bi-calendar"></i>{fcon.footerdate}</span>
                                            <span className="text-secondary ms-1"> <i className="bi bi-person-fill"></i>{fcon.footerspan}</span>
                                        </div>
                                        </div>
                                    )
                                })
                            }
                       
                    </div>

                    <div  className="col-12 col-md-6 col-lg-2">
                            <h5 className="text-light text-uppercase pb-3">{props.footers}</h5>
                            <div>
                                {
                                    props.footerlist.map(function(list){
                                        return(
                                              <p><a href="" className="text-decoration-none text-secondary">{list}</a></p>
                                        )
                                    })
                                }
                            </div>
                          
                    </div>

                    <div  className="col-12 col-md-6 col-lg-4">
                         <h5 className="text-light text-uppercase pb-3">{props.footerque}</h5>
                        
                        <div>
                            {
                                props.footerqli.map(function(fli){
                                    return(
                                        <div className="d-flex justify-content-start align-items-center gap-2">
                                            <div>
                                                <p className="text-light"><i className={fli.footericon}></i></p>
                                            </div>
                                            <div>
                                                <p className="text-secondary">{fli.footerpara}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                       
                       

                    </div>

                </div>
            </div>
        </footer>
        </>
    )
}
export default Contact;