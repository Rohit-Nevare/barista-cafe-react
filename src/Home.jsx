import React from "react";
import ReactDOM from "react-dom/client"
import "./Home.css"
import "./script"
import styled from "styled-components";


const Wrapper=styled.section`
  background-image: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url('../public/images/Background/bg_1.jpg');
  height: 100%;
  background-attachment: fixed;
`

const Home=(props)=>{

    return(
        <>
        
        {/* section 1 */}

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active carousel1">
         
               <div class="carousel-caption-center">
                  <span>Welcome</span>
                  <h2 className="display-5 fw-bold text-uppercase">The Best Coffee Testing Experience</h2>
                  <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos adipisci ducimus mollitia in iure enim magnam? Architecto a harum cumque.</p>
                  <button type="button" className="btn1 ">Order Now</button>
                   <button type="button" className="btn2  ms-2 mt-3 mt-md-0">View Menu</button>
              </div>

            </div>

            <div className="carousel-item carousel2">
             
             <div class="carousel-caption-center">
                  <span>Welcome</span>
                  <h2 className="display-5 fw-bold text-uppercase">The Best Coffee Testing Experience</h2>
                  <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos adipisci ducimus mollitia in iure enim magnam? Architecto a harum cumque.</p>
                  <button type="button" className="btn btn-outline-light">Order Now</button>
                   <button type="button" className="btn btn-outline-light ms-1 mt-3 mt-md-0">View Menu</button>
              </div>

            </div>

            <div className="carousel-item carousel3">
       
             <div className="carousel-caption-center">
                  <span>Welcome</span>
                  <h2 className="display-5 fw-bold text-uppercase">The Best Coffee Testing Experience</h2>
                  <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos adipisci ducimus mollitia in iure enim magnam? Architecto a harum cumque.</p>
                  <button type="button" className="btn btn-outline-light">Order Now</button>
                   <button type="button" className="btn btn-outline-light ms-1 mt-3 mt-md-0">View Menu</button>
              </div>

            </div>

          </div>
      </div>

        {/* about */}
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

        {/* feature */}
         <section className="pt-5 features" style={{ "backgroundColor": "#c49b63"}}>
        <div className="container text-center p-4">
          <div className="row ">
            {
                    props.feature.map(function (item) {
                        return (
                            <div className="col-12 col-md-4 ">
                                <div>
                                    <figure className="p-lg-4">
                                         <img src={item.photoName} alt={item.title} height="70px" />
                                        <figcaption className="pt-3">
                                            <h4 className="text-uppercase">{item.title}</h4>
                                            <p className="pt-3">{item.para}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        );
                    })
                }
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

            {/*counter up  */}
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



          <div className="text-center products pt-5">
              <span>{props.menspan}</span>
              <h1 className="text-light fw-bold text-uppercase">{props.menuhead1}</h1>
                <p className="text-secondary p-2">{props.procon}</p>
          </div>

          <div className="container text-center pt-5 zoom">
            <div className="row">
                 {
                    props.menu.map(function (item) {
                        return (
                            <div className="col-12 col-md-6 col-lg-3">
                               
                                    <figure className="p-lg-4">
                                         <img src={item.photoName} alt={item.title} className="img-fluid" />
                                        <figcaption className="text-light pt-3 product">
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


          {/* gallery section */}

          <div className="container-fluid py-5">
            <div className="row g-2 g-lg-0">
              {
                  
                    props.gallery.map(function(g){
                      return(
                        <div className="col-12 col-md-6 col-lg-3">
                          <img src={g.galleryimg} alt=""  className="h-100 w-100"/>
                          </div>
                      )

                    })
                
              }
            </div>
          </div>
          
           {/* produts */}

           <div className="text-center products pt-5">
              <span>{props.menspan}</span>
              <h1 className="text-light fw-bold text-uppercase">{props.menuhead2}</h1>
             
          </div>

          <div className="container">
            <div className="row">
            <div className="col-12 products-tab mx-auto">
                <ul className="nav nav-tabs flex-row ">
                    <li className="nav-item"><a data-bs-toggle="tab" href="#home" class="nav-link active">Toast</a></li>
                    <li className="nav-item"><a data-bs-toggle="tab" href="#about" class="nav-link">Pizza</a></li>
                    <li className="nav-item"><button data-bs-toggle="tab" data-bs-target="#education"
                            className="nav-link">Desserts</button></li>
                </ul>
            </div>
            <div className="col-12 ms-auto text-center pt-5">
                <div className="tab-content" id="myContent">
                    <div className="tab-pane fade show active" id="home">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.toast.map(function (item) {
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
                    <div className="tab-pane fade" id="about">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.pizza.map(function (item) {
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
                    <div className="tab-pane fade" id="education">
                        <div className="container zoom">
                          <div className="row">
                              {
                                  props.dessert.map(function (item) {
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

        {/* blog */}
        <section>
            <section className="background">
                <div className="text-center products pt-5 mb-5">
                  <h1 className="text-light fw-bold text-uppercase">{props.blogh1}</h1>
                   <p className="text-secondary p-2">{props.blogcon}</p>
              </div>

               <div className="container text-center pt-5">
            <div className="row">
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
        </section>

        {/* Contact*/}

        <section className="background pt-5 ">
            <div className="text-center products pt-5 pb-5">
                <span>{props.conspan}</span>
              <h1 className="text-light fw-bold text-uppercase">{props.conhead}</h1>
          </div>
           <div className="container-fluid contacts p-5">
            <div className="row g-3 ">

                <div className="col-12 col-lg-6">
                    <img src="../public/images/Illustration/gallery-1 (1).jpg" alt="" className="h-100 w-100"/>
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
<textarea defaultValue="..." />
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


export default Home;