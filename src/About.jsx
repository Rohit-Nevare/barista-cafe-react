import React from "react";
import "./About.css"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper=styled.section`
  background-image: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url('../public/images/Background/bg_1.jpg');
  height: 100%;
  background-attachment: fixed;
`
const About=(props)=>{

    return(
        <>
         <section>
            <div className="menuhero ">
            <div className="d-flex  justify-content-center align-items-center h-75">
                <h1 className="text-white text-uppercase display-4 ">About</h1>
            </div>

           <div className="d-flex  justify-content-center align-items-center h-25">
             <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                     <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link> 
                </li>
                <li className="breadcrumb-item active" aria-current="menu" style={{ color: "white", textDecoration: "none", cursor:"pointer" }}>About</li>
                </ol>
            </nav>
           </div>
            </div>

        </section>
                
        <section className="background">
            
            <div className="">
                <div className="row g-0">
                <div className="col-12 col-lg-6">
                    <img src={props.abtimg} alt="" className="w-100 h-100"/>
                </div>
                <div className="col-12 col-lg-6 aboutContent p-5">
                    <span>{props.abtspan}</span>
                    <h1 className="text-light fw-bold text-uppercase">{props.abth1}</h1>
                    <p className="text-secondary ">{props.abtpara}</p>
                </div>
                </div>
            </div>
        </section>
          {/*counter up  */}
        <section>
           <div className="counters">
            <div className="container  py-5 ">
            <div className="row py-5">
            <div className="col-12 col-md-6 col-lg text-center py-5 count">
                <div >
               <i className="bi bi-cup-hot"></i>
                <h2 className="pt-3">
                    <span className="counter"> 5000 </span>
                    <span className="add">+</span>
                </h2>
                <p>Coffee Branches</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg text-center py-5 count">
                <div >
               <i className="bi bi-cup-hot "></i>
                <h2 className="pt-3">
                    <span className="counter"> 1000 </span>
                    <span className="add">+</span>
                </h2>
                <p>Number of Awards</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg text-center py-5 count">
                <div >
               <i className="bi bi-cup-hot "></i>
                <h2 className="pt-3">
                    <span className="counter"> 10,567 </span>
                    <span className="add">+</span>
                </h2>
                <p>Happy Customer</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg text-center py-5 count">
                <div >
              <i class="bi bi-cup-hot "></i>
                <h2 className="pt-3">
                    <span className="counter"> 900 </span>
                    <span className="add">+</span>
                </h2>
                <p>Staff</p>
                </div>
            </div>
            </div>
        </div>

           </div>

        </section>

        {/* menu */}
        <section className="background">
            <div className="container py-3">
            <div className="row g-0 pt-5">
              <div className="col-12 col-lg-6 menu pt-5 text-lg-end">
                  <span >{props.menspan}</span>
                  <h1 className="text-light fw-bold text-uppercase">{props.menh1}</h1>
                  <p className="text-secondary pt-3">{props.menpara}</p>
                  <button type="button">{props.menubutton}</button>
              </div>

              <div className="col-12 col-lg-6 container">
                  <div className="row">
                   {
                        props.menusimg.map(function (m) {
                            return(
                                 <div className="col-12 col-md-6 p-4">
                                    <img src={m.mimg} alt="" className="h-100 w-100" />
                                 </div>
                            )
                        })
                   }
                  </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* testimony */}
        <section>
            <Wrapper>
              <div className="text-center products pt-5">
              <span>{props.testispan}</span>
              <h1 className="text-light fw-bold text-uppercase">{props.testicon}</h1>
              <p className="text-secondary p-2">{props.testipara}</p>
          </div>
            

            <div className="container text-center pt-5 pb-5">
            <div className="row g-1">
                 {
                    props.testomonials.map(function (item) {
                        return (
                            <div className="col-12 col-md-6 col-lg-3">
                               
                              <div className="text-light p-4" style={{"background-color": "#c49b63"}}>
                                <p className="text-start p-3">"{item.comment}"</p>
                                <div className="d-flex text-start gap-3 pt-4">
                                  <img src={item.testiimg} alt="" height="60px" width="60px" className="rounded-circle"/>
                                  <p>{item.name}
                                    <p>{item.desgi}</p>
                                  </p>
                                  
                                </div>
                              </div>
                               
                            </div>
                        );
                    })
                }
            </div>
          </div>

        </Wrapper>
        
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

export default About;