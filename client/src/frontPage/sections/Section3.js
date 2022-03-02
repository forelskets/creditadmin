import React from 'react';
import { NavLink } from 'react-router-dom';

const Section3 = () => {
  return (
    <>
      <div className="back-image">
        {/* <section className="featured-in">
          <div className="container">
            <h1>featured in</h1>
            <div className="row">
              <div className="the-box row">
                <div className="col-md-2 col-6 top">
                  <img src="images/MINT.png" alt="" className="img-container" />
                </div>
                <div className="col-md-2 col-6 bottom">
                  <img
                    src="images/YOUR_STORY.png"
                    alt=""
                    className="img-container"
                  />
                </div>
                <div className="col-md-2 col-6 top">
                  <img
                    src="images/BUSINESS_LINE.png"
                    alt=""
                    className="img-container"
                  />
                </div>
                <div className="col-md-2 col-6 bottom">
                  <img
                    src="images/BUSINESS_STANDARD.png"
                    alt=""
                    className="img-container"
                  />
                </div>
                <div className="col-md-2 col-6 top">
                  <img
                    src="images/DAILY_HUNT.png"
                    alt=""
                    className="img-container"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div
          className="row col-sm-12 mx-5 py-5 "
          style={{ margin: 'auto 30px' }}
        >
          <div
            className="card  card1"
            style={{ width: '18rem', margin: 'auto 20px' }}
          >
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card "
            style={{ width: '18rem', margin: 'auto 20px' }}
          >
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: 'auto 20px' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: 'auto 20px' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <section className="another-timeline">
          {/* <div className="container">
            <div className="row pb-5 justify-content-center">
              <div className="col-12">
                <h1 className="heading pb-5">How to Operate!</h1>
              </div>

              <img
                src="images/apply.png"
                alt="applyprocess"
                style={{ width: '100%', align: 'center', leftPadding: '100px' }}
              />
            </div>
          </div> */}
        </section>
        <section className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12 d-md-block d-none">
                <div className="img-area ">
                  <img src="images/creditapp.png" alt="" />
                </div>
              </div>
              <div className="col-md-7 col-12 text-area">
                <div className="align-inline">
                  <div className="icon-box1">
                    <img
                      src="images/rupee-card.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text-box">
                    <h2 className="heading">dummy text</h2>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur laborum id natus nihil sint.
                    </p>
                  </div>
                </div>
                <div className="align-inline">
                  <div className="icon-box1">
                    <img
                      src="images/rupee-card.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text-box">
                    <h2 className="heading">dummy text</h2>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur laborum id natus nihil sint.
                    </p>
                  </div>
                </div>
                <div className="align-inline">
                  <div className="icon-box1">
                    <img
                      src="images/rupee-card.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text-box">
                    <h2 className="heading">dummy text</h2>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur laborum id natus nihil sint.
                    </p>
                  </div>
                </div>
                <div className="align-inline">
                  <div className="icon-box1">
                    <img
                      src="images/rupee-card.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text-box">
                    <h2 className="heading">dummy text</h2>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur laborum id natus nihil sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" card-slider-section">
          <div className="container">
            <h1 className="heading">people love us</h1>
            <h3 className="heading2">You happy. We happy</h3>
            <div className="row">
              <div className="col-12">
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  dataRide="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="img-container "
                              alt=""
                              src="images/portrait-young-smiling-woman-2.png"
                            />

                            <div className="card-body">
                              <h4 className="heading">
                                Special title treatment
                              </h4>
                              <p className="paragraph">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="img-container "
                              alt=""
                              src="images/portrait-young-smiling-woman-2.png"
                            />

                            <div className="card-body">
                              <h4 className="heading">
                                Special title treatment
                              </h4>
                              <p className="paragraph">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="img-container "
                              alt=""
                              src="images/portrait-young-smiling-woman-2.png"
                            />

                            <div className="card-body">
                              <h4 className="heading">
                                Special title treatment
                              </h4>
                              <p className="paragraph">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="img-container"
                              alt=""
                              src="images/portrait-young-smiling-woman-2.png"
                            />
                            <div className="card-body">
                              <h4 className="heading">
                                Special title treatment
                              </h4>
                              <p className="paragraph">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="img-container"
                              alt=""
                              src="images/portrait-young-smiling-woman-2.png"
                            />
                            <div className="card-body">
                              <h4 className="heading">
                                Special title treatment
                              </h4>
                              <p className="paragraph">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="img-container"
                              alt=""
                              src="images/portrait-young-smiling-woman-2.png"
                            />
                            <div className="card-body">
                              <h4 className="heading">
                                Special title treatment
                              </h4>
                              <p className="paragraph">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center">
                <NavLink
                  className="btn  mb-3 mx-2"
                  to="#carouselExampleIndicators2"
                  style={{ backgroundColor: '#fff', borderRadius: '50%' }}
                  role="button"
                  dataSlide="prev"
                >
                  <i className="fa fa-arrow-left"></i>
                </NavLink>
                <NavLink
                  className="btn btn-primary mb-3 mx-2 "
                  to="#carouselExampleIndicators2"
                  style={{ backgroundColor: '#fff', borderRadius: '50%' }}
                  role="button"
                  dataSlide="next"
                >
                  <i className="fa fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section3;
