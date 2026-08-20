import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css"
const Shop=(props)=>{
    return(
        <>
        <section >
            <div className="menuhero ">
            <div className="d-flex  justify-content-center align-items-center h-75">
                <h1 className="text-white text-uppercase display-4 ">Order Online</h1>
            </div>

           <div className="d-flex  justify-content-center align-items-center h-25">
             <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                     <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link> 
                </li>
                <li className="breadcrumb-item active" aria-current="menu" style={{ color: "white", textDecoration: "none", cursor:"pointer" }}>Shop</li>
                </ol>
            </nav>
           </div>
            </div>

        </section>

         <section className="background">
           <div className="text-center products pt-5">
              <span>{props.menspan}</span>
              <h1 className="text-light fw-bold text-uppercase">{props.menuhead2}</h1>
             
          </div>

          <div className="container">
            <div class="row">
            <div class="col-12 products-tab mx-auto">
                <ul class="nav nav-tabs flex-row shoptabs">
                    <li class="nav-item"><a data-bs-toggle="tab" href="#cof" class="nav-link active">Coffe </a></li>
                    <li class="nav-item"><a data-bs-toggle="tab" href="#home" class="nav-link ">Main </a></li>
                    <li class="nav-item"><a data-bs-toggle="tab" href="#about" class="nav-link">Drinks</a></li>
                    <li class="nav-item"><a data-bs-toggle="tab" data-bs-target="#education"
                            class="nav-link">Desserts</a></li>
                </ul>
            </div>
            <div class="col-12 ms-auto text-center pt-5">
                <div class="tab-content" id="myContent">

                    <div class="tab-pane fade show active" id="cof">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.cof.map(function (item) {
                                      return (
                                          <div className="col-12 col-md-6 col-lg-3 ">
                                            
                                                  <figure className="p-lg-4">
                                                      <img src={item.menuimg} alt={item.title} className="img-fluid" />
                                                      <figcaption className="text-light pt-3 menutabs">
                                                          <h4 className="text-uppercase">{item.title}</h4>
                                                          <p className="text-secondary">{item.para}</p>
                                                          <p className="fs-4">{item.price}</p>
                                                          <button type="button">{item.button}</button>
                                                      </figcaption>
                                                  </figure>
                                            
                                          </div>
                                      );
                                  })
                              }
                          </div>
                        </div>
                    </div>

                    <div class="tab-pane fade show " id="home">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.main.map(function (item) {
                                      return (
                                          <div className="col-12 col-md-6 col-lg-4 ">
                                            
                                                  <figure className="p-lg-4">
                                                      <img src={item.menuimg} alt={item.title} className="img-fluid" />
                                                      <figcaption className="text-light pt-3 menutabs">
                                                          <h4 className="text-uppercase">{item.title}</h4>
                                                          <p className="text-secondary">{item.para}</p>
                                                          <p className="fs-4">{item.price}</p>
                                                          <button type="button">{item.button}</button>
                                                      </figcaption>
                                                  </figure>
                                            
                                          </div>
                                      );
                                  })
                              }
                          </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="about">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.drink.map(function (item) {
                                      return (
                                          <div className="col-12 col-md-6 col-lg-4">
                                            
                                                  <figure className="p-lg-4">
                                                      <img src={item.menuimg} alt={item.title} className="img-fluid" />
                                                      <figcaption className="text-light pt-3 menutabs">
                                                          <h4 className="text-uppercase">{item.title}</h4>
                                                          <p className="text-secondary">{item.para}</p>
                                                          <p className="fs-4">{item.price}</p>
                                                          <button type="button">{item.button}</button>
                                                      </figcaption>
                                                  </figure>
                                            
                                          </div>
                                      );
                                  })
                              }
                          </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="education">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.des.map(function (item) {
                                      return (
                                          <div className="col-12 col-md-6 col-lg-4">
                                            
                                                  <figure className="p-lg-4">
                                                      <img src={item.menuimg} alt={item.title} className="img-fluid" />
                                                      <figcaption className="text-light pt-3 menutabs">
                                                          <h4 className="text-uppercase">{item.title}</h4>
                                                          <p className="text-secondary">{item.para}</p>
                                                          <p className="fs-4">{item.price}</p>
                                                          <button type="button" >{item.button}</button>
                                                      </figcaption>
                                                  </figure>
                                            
                                          </div>
                                      );
                                  })
                              }
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </section>

        {/* footer */}

         
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

export default Shop;