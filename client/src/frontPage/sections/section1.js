import React from 'react';
import Bannerchart from '../chart/bannerChart';
import AreaChart1 from '../chart/areaCharts';

const section1 = () => {
  return (
    <>
      <section className="header w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 text-area banner">
              <div className="heading">
                <span>
                  {' '}
                  Visitors can get
                  <br />
                  rewarded{' '}
                </span>
                <span style={{ color: '#1d2951' }}>
                  can
                  <br /> generate revenue too
                </span>
              </div>
              <div id="paragraph" className="pb-5 mt-5">
                <span className="paragraph">
                  Start Your Business with Zero Investment and Earn over
                  ₹1,00,000 Every Month. Provide financial advice and products
                  to the customers and get a fast payout every month.
                </span>
              </div>

              <div className="button-area">
                <button className="button btn-4">
                  <img src="images/gpay.svg" alt="" className="img-fluid" />
                </button>
              </div>
            </div>

            <div className="col-md-7 col-12 img-area d-md-block d-none">
              {/* <img
                src="images/creditdash.png"
                alt=""
                className="img-container"
              /> */}
              <div className="bannerimg">
                <div
                  className="card "
                  style={{
                    width: '36rem',
                    margin: '80px  0px 0px 0px ',
                    zIndex: '1',
                  }}
                >
                  <h4 style={{ padding: '15px' }}>Live Statistics</h4>
                  <AreaChart1 />
                </div>

                <div
                  className="card "
                  style={{
                    width: '26rem',
                    margin: '-220px  0px 10px 390px ',
                    zIndex: '2',
                    border: '1 solid #000000',
                    borderRadius: '10px',
                  }}
                >
                  <h4 style={{ padding: '15px' }}>Live Statistics</h4>
                  <Bannerchart />
                  <div className="card-body">
                    {/* <div className="row">
                    <div className="col">
                      <ul>
                        chhavi <span>500</span>
                      </ul>
                    </div>
                    <div className="col">
                      e card's <br />
                      content.sdfs
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ul>
                        chhavi <span>500</span>
                      </ul>
                    </div>
                    <div className="col">
                      e card's <br />
                      content.sdfs
                    </div> 
                  </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section1;
