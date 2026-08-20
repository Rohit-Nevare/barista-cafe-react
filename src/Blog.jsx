import React from "react";
import ReactDOM from "react-dom/client"
import { Link } from "react-router-dom";

const Blog=(props)=>{

    return(
        <>
         <section>
            <div className="menuhero ">
            <div className="d-flex  justify-content-center align-items-center h-75">
                <h1 className="text-white text-uppercase display-4 ">Blog</h1>
            </div>

           <div className="d-flex  justify-content-center align-items-center h-25">
             <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                     <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link> 
                </li>
                <li className="breadcrumb-item active" aria-current="menu" style={{ color: "white", textDecoration: "none", cursor:"pointer" }}>Blog</li>
                </ol>
            </nav>
           </div>
            </div>

        </section>

        <section className="background">
                <div className="text-center products pt-5 mb-5">
                  <h1 className="text-light fw-bold text-uppercase">{props.blogh1}</h1>
                   <p className="text-secondary p-2">{props.blogcon}</p>
              </div>

               <div className="container text-center py-5">
            <div className="row g-3">
                 {
                    props.blogs.map(function (item) {
                        return (
                            <div className="col-12 col-md-6 col-lg-4">
                               
                                    <figure className="text-start">
                                         <img src={item.blogimg} alt={item.title} height="250px" width="300px"  />
                                        <figcaption className="text-light pt-3">
                                           <span className="fs-6 text-secondary">{item.date}</span>
                                            <h4 className="text-uppercase">{item.title}</h4>
                                            <p className="text-secondary">{item.para}</p>
                                          
                                        </figcaption>
                                    </figure>
                               
                            </div>
                        );
                    })
                }
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
                                            <i class={item.imagei}></i>
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
                                            <span className="text-secondary"><i class="bi bi-calendar"></i>{fcon.footerdate}</span>
                                            <span className="text-secondary ms-1"> <i class="bi bi-person-fill"></i>{fcon.footerspan}</span>
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
                                                <p className="text-light"><i class={fli.footericon}></i></p>
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
export default Blog;