

import React from 'react'; 
import Link from 'next/link';

const FeatureArea = () => {
  return (
    <>
      {/* <!-- demo area start --> */}
      <div id="demo" className="tp-demo-area tp-demo-bg black-bg-2 pt-200 pb-120 p-relative z-index-1 tp-demo-text-trigger fix d-none">
        <div className="tp-demo-bg-shape">
          <img src="/assets/img/demo/body-shape.png" alt="" />
        </div>
        <div className="tp-demo-big-title-box">
          <h3 className="tp-demo-big-title tp-demo-text">Homepages</h3>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="tp-demo-title-box p-relative mb-50 text-center">
                <h4 className="tp-demo-title tp_title_anim"><span>Stunning Unique Home Pages</span></h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="row gx-65">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-demo-item mb-65 text-center">
                    <Link href="https://diego-next-js.vercel.app" target="_blank">
                      <div className="tp-demo-thumb transition-1" 
                      style={{ backgroundImage: "url(/assets/img/demo/home-1.jpg)" }}></div>
                    </Link>
                    <div className="tp-demo-title-sm-wrap">
                      <h4 className="tp-demo-title-sm">
                        <Link href="https://diego-next-js.vercel.app" 
                        target="_blank">Freelancer</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-demo-item mb-65 text-center">
                    <Link href="https://diego-next-js.vercel.app/home-3" target="_blank">
                      <div className="tp-demo-thumb" 
                      style={{ backgroundImage: "url(/assets/img/demo/home-3.jpg)" }}></div>
                    </Link>
                    <div className="tp-demo-title-sm-wrap">
                      <h4 className="tp-demo-title-sm">
                        <Link href="https://diego-next-js.vercel.app/home-2" target="_blank">Interface Designer</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-demo-item mb-65 text-center">
                    <Link href="https://diego-next-js.vercel.app/home-3" target="_blank">
                      <div className="tp-demo-thumb transition-3" 
                      style={{ backgroundImage: "url(/assets/img/demo/home-5.jpg)" }}></div>
                    </Link>
                    <div className="tp-demo-title-sm-wrap">
                      <h4 className="tp-demo-title-sm"><Link href="https://diego-next-js.vercel.app/home-3">Web Developer</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-demo-item mb-65 text-center">
                    <a href="#" target="_blank">
                      <div className="tp-demo-thumb tp-demo-thumb-overlay" 
                      style={{ backgroundImage: "url(/assets/img/demo/home-7.jpg)" }}></div>
                    </a>
                    <div className="tp-demo-title-sm-wrap">
                      <h4 className="tp-demo-title-sm"><a href="#" target="_blank">Coming Soon</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- demo area end --> */}
    </>
  );
};

export default FeatureArea;