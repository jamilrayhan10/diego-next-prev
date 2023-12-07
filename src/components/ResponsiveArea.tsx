import React from 'react';

const ResponsiveArea = () => {
  return (
    <>
      {/* <!-- responsive area start --> */}
      <div className="tp-responsive-area tp-btn-trigger-3 tp-responsive-text-trigger p-relative black-bg-2 pt-170 pb-120 fix">
        <div className="tp-responsive-big-circle" data-speed=".8">
          <span></span>
        </div>
        <div className="tp-responsive-big-title-box">
          <h3 className="tp-responsive-big-title tp-responsive-text">Fully Responsive</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-responsive-mockup z-index-1 mb-60 text-center">
                <img src="/assets/img/responsive/mocup-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="tp-responsive-layout-wrap p-relative">
            <div className="tp-responsive-layout-text-shape tp-btn-bounce-3 d-none d-lg-block">
              <img src="/assets/img/responsive/text-shape.png" alt="" />
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="tp-responsive-layout tp-responsive-layout-border text-center">
                  <div className="tp-responsive-icon">
                    <img src="/assets/img/responsive/icon-1.svg" alt="" />
                  </div>
                  <div className="tp-responsive-content">
                    <span>1920 x 1080px</span>
                    <p>Full Screen Layout</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="tp-responsive-layout tp-responsive-layout-border text-center">
                  <div className="tp-responsive-icon icon-space">
                    <img src="/assets/img/responsive/icon-2.svg" alt="" />
                  </div>
                  <div className="tp-responsive-content">
                    <span>1364 x 768px</span>
                    <p>Laptop Screen Layout</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="tp-responsive-layout tp-responsive-layout-border text-center">
                  <div className="tp-responsive-icon icon-space">
                    <img src="/assets/img/responsive/pad.svg" alt="" />
                  </div>
                  <div className="tp-responsive-content">
                    <span>1024 x 768px</span>
                    <p>Tablet Screen Layout</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="tp-responsive-layout text-center">
                  <div className="tp-responsive-icon icon-space">
                    <img src="/assets/img/responsive/icon-4.svg" alt="" />
                  </div>
                  <div className="tp-responsive-content">
                    <span>767 x 365px</span>
                    <p>Mobile Screen Layout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveArea;