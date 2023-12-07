

import React from 'react';

const ServiceArea = () => {
  return (
    <>
      {/* <!-- service area start --> */}
      <div id="feature" className="tp-feature-area tp-feature-bg white-bg pt-110 pb-110 z-index-2">
        <div className="tp-feature-circle-wrap d-none d-md-block">
          <div className="tp-feature-circle-box p-relative">
            <img className="img-1" src="/assets/img/hero/circle-bg.svg" alt="" />
            <img className="img-2" src="/assets/img/hero/circle.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-feature-title-box mb-60 text-center">
                <h4 className="tp-section-title tp_title_anim">Advance features <br /> built for you.</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-feature-inner tp-feature-item p-relative">
                <div className="tp-feature-wrapper tp-feature-capsule-wrapper p-relative" data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper">
                    <div className="tp-section-title-inner text-center p-relative">
                      <h3 className="tp-feature-title-sm">What is <br /> included in Diego</h3>
                    </div>
                  </div>

                  <div className="tp-feature-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item" 
                      style={{ backgroundColor: "#00CC97" }}>Fully Customizable</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item" 
                      style={{ backgroundColor: "#FF759C" }}>SVG Animation</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item"
                      style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Parallax</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item" 
                      style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Unique Animations</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item"
                      style={{ backgroundColor: "#00CC97" }}>Widget Bounce</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item" 
                      style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consulting</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item" 
                      style={{ backgroundColor: "#00CC97"}}>Testing</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item" 
                      style={{ backgroundColor: "#19B3F1" }}>Sticky Sections</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-feature-capsule-item"
                      style={{ backgroundColor: "#FF759C" }}>It's Super Fast</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <img src="/assets/img/feature/circle-1.png" alt="" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <img src="/assets/img/feature/Star-1.png" alt="" />
                      </span>
                    </p>
                  </div>



                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-feature-item-wrap mb-30">
                    <div className="tp-feature-item item-1 tp-feature-item-sm text-center">
                      <div className="tp-feature-thumb">
                        <img src="/assets/img/feature/figma.png" alt="" />
                      </div>
                      <div className="tp-feature-content">
                        <h4 className="tp-feature-content-title">Figma Files Included</h4>
                        <p>Get source files for free</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-feature-item-wrap">
                    <div className="tp-feature-item item-2 mb-30 tp-feature-item-sm text-center">
                      <div className="tp-feature-thumb p-relative fix">
                        <img src="/assets/img/feature/gsap.png" alt="" />
                        <img className="img-pos" src="/assets/img/feature/gsap-gif.gif" alt="" />
                        <div className="tp-feature-thumb-text">
                          <p>JavaScript</p>
                          <span>GSAP</span>
                        </div>
                      </div>
                      <div className="tp-feature-content">
                        <h4 className="tp-feature-content-title">Unique Animations</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-feature-item-wrap">
                    <div className="tp-feature-item item-3 tp-feature-item-sm text-center">
                      <div className="tp-feature-thumb">
                        <img src="/assets/img/feature/interface.png" alt="" />
                      </div>
                      <div className="tp-feature-content">
                        <h4 className="tp-feature-content-title">Figma Files Included</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-feature-item-wrap">
                    <div className="tp-feature-item item-4 tp-feature-item-sm text-center">
                      <div className="tp-feature-thumb">
                        <img src="/assets/img/feature/Aa.png" alt="" />
                      </div>
                      <div className="tp-feature-content">
                        <h4 className="tp-feature-content-title">Versatile <br />
                          Typography Options</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service area end --> */}

    </>
  );
};

export default ServiceArea;