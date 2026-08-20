import React from "react";
import ReactDOM from "react-dom/client"

const Footer=(props)=>{

    return(
        <>
        <footer className="background">
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

export default Footer;