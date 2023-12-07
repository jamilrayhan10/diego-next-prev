'use client';
import Link from "next/link"


const Demo = () => {


  return (
    <>
      {/* <!-- demo area start --> */}
      <div id="demo" className="tp-demo-area tp-demo-bg black-bg-2 pt-170 pb-120 p-relative z-index-1 tp-demo-text-trigger">
          <div className="tp-demo-bg-shape">
            <img src="/assets/img/demo/body-shape.png" alt="" />
          </div>
          <div className="tp-demo-big-title-box">
            <h3 className="tp-demo-big-title tp-demo-text">Homepages</h3>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="tp-demo-title-box p-relative mb-50 text-center">
                  <h4 className="tp-demo-title tp_title_anim">Choose between<br /> <span>Dark & Light</span> demos.</h4>
                  <img className="tp-demo-title-shape d-none d-md-block" src="/assets/img/demo/tab-icon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4">
                <div 
                
                className="tp-demo-tab-btn tp-marker-tab p-relative mb-80 d-flex justify-content-center">
                  <ul className="nav nav-tab" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-links active p-relative" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 7.58559C12.8861 8.81757 12.4238 9.99165 11.667 10.9704C10.9102 11.9492 9.89037 12.6923 8.72672 13.1126C7.56307 13.5329 6.30378 13.6131 5.09621 13.3439C3.88863 13.0746 2.78271 12.467 1.90785 11.5921C1.033 10.7173 0.425392 9.61137 0.156131 8.40379C-0.11313 7.19622 -0.0329082 5.93693 0.38741 4.77328C0.807727 3.60963 1.55076 2.58975 2.52955 1.83298C3.50835 1.07621 4.68243 0.613851 5.91441 0.5C5.19313 1.47582 4.84604 2.67811 4.93628 3.88821C5.02652 5.09831 5.54809 6.23582 6.40614 7.09387C7.26418 7.95191 8.4017 8.47348 9.61179 8.56372C10.8219 8.65396 12.0242 8.30687 13 7.58559Z" fill="currentcolor" />

                        </svg>
                        Dark
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-links p-relative" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.0448 11.0454C9.70165 11.0454 11.0448 9.70226 11.0448 8.04541C11.0448 6.38856 9.70165 5.04541 8.0448 5.04541C6.38795 5.04541 5.0448 6.38856 5.0448 8.04541C5.0448 9.70226 6.38795 11.0454 8.0448 11.0454Z" fill="currentcolor" fill-opacity="0.6" />
                          <path d="M8 1.5V2.68182" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8 13.3181V14.4999" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3.40198 3.40283L4.24107 4.24192" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.7584 11.7581L12.5975 12.5971" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1.5 8H2.68182" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M13.3174 8H14.4992" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3.40198 12.5971L4.24107 11.7581" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.7584 4.24192L12.5975 3.40283" stroke="currentcolor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Light
                      </button>
                    </li>
                  </ul>
                  <span id="lineMarker"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row gx-65">
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <Link 
                          href="https://diego-next-js.vercel.app" 
                          className="tp-show-demo-btn" data-theme="tp-theme-dark" target="_blank">
                            <div className="tp-demo-thumb transition-1" 
                            style={{ backgroundImage: `url(assets/img/demo/home-1.jpg)`}}></div>
                          </Link>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm">
                              <Link href="https://diego-next-js.vercel.app" 
                              className="tp-show-demo-btn" data-theme="tp-theme-dark" target="_blank">Freelancer</Link></h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <Link href="https://diego-next-js.vercel.app/home-2" 
                          className="tp-show-demo-btn" data-theme="tp-theme-dark" target="_blank">
                            <div className="tp-demo-thumb" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-3.jpg)`}}></div>
                          </Link>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm">
                              <Link href="https://diego-next-js.vercel.app/home-2" 
                              className="tp-show-demo-btn" data-theme="tp-theme-dark" target="_blank">Interface Designer</Link></h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <Link href="https://diego-next-js.vercel.app/home-3" 
                          className="tp-show-demo-btn" data-theme="tp-theme-dark" target="_blank">
                            <div className="tp-demo-thumb transition-3" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-5.jpg)`}}></div>
                          </Link>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm">
                            <Link href="https://diego-next-js.vercel.app/home-3" 
                            className="tp-show-demo-btn" data-theme="tp-theme-dark" target="_blank">Web Developer</Link></h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <a href="#" target="_blank">
                            <div className="tp-demo-thumb tp-demo-thumb-overlay" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-7.jpg)`}}></div>
                          </a>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm"><a href="#" target="_blank">Coming Soon</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row gx-65">
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <Link href="https://diego-next-js.vercel.app" 
                          className="tp-show-demo-btn" data-theme="tp-theme-light" target="_blank">
                            <div className="tp-demo-thumb transition-1" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-2.jpg)`}} 
                            ></div>
                          </Link>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm">
                              <Link href="https://diego-next-js.vercel.app" 
                              className="tp-show-demo-btn" data-theme="tp-theme-light" target="_blank">Freelancer</Link></h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <Link href="https://diego-next-js.vercel.app/home-2" className="tp-show-demo-btn" data-theme="tp-theme-light" target="_blank">
                            <div className="tp-demo-thumb" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-4.jpg)`}}></div>
                          </Link>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm">
                              <Link href="https://diego-next-js.vercel.app/home-2" className="tp-show-demo-btn" data-theme="tp-theme-light" target="_blank">Web Developer</Link></h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <Link href="https://diego-next-js.vercel.app/home-3" 
                          className="tp-show-demo-btn" data-theme="tp-theme-light" target="_blank">
                            <div className="tp-demo-thumb transition-3" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-6.jpg)`}} 
                            ></div>
                          </Link>
                          <div className="tp-demo-title-sm-wrap">
                            <h4 className="tp-demo-title-sm">
                              <Link href="https://diego-next-js.vercel.app/home-3" 
                              className="tp-show-demo-btn" data-theme="tp-theme-light" target="_blank">Web Developer</Link></h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-demo-item mb-65 text-center">
                          <a href="#" target="_blank">
                            <div className="tp-demo-thumb tp-demo-thumb-overlay" 
                            style={{ backgroundImage: `url(/assets/img/demo/home-8.jpg)`}}></div>
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
          </div>
        </div>
        {/* <!-- demo area end --> */}
    </>
  );
};

export default Demo;