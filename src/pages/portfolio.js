import React, { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage } from "../lib/common"
import FormContact from "../presentComponents/FormContact"
import SubscribeEmail from "../presentComponents/SubscribeEmail"

export default function Portfolio() {
  return (
    <Layout>
      <Seo title="Resource" />
      <main id="main" className="site-main cms-page">
        <section
          className="main-banner text-light text-left"
          style={{
            backgroundImage: `url(${getImage("bg-banner_jdeg7w.jpg")})`,
          }}
        >
          <div className="wrapper">
            <div className="row row-flex">
              <div className="col-text">
                <div className="content">
                  <h3 className="title">Ecommerce Portfolio</h3>
                  <p>
                    I collaborate with other experts in the industry. We deliver
                    beautiful ecommerce websites that produce real results
                  </p>
                </div>
              </div>
              <div className="col-image text-center">
                <div className="reviews-tripadvisor">
                  <img
                    src={getImage("tripadvisor_ay47ta.svg")}
                    alt="tripadvisor"
                  />
                  <p>
                    <strong>4.9</strong> Average rating, <strong>33</strong>{" "}
                    Total reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-profile">
            <img
              alt="Rowan Burgess Ecommerce Expert"
              src={getImage("thumbnail-portofilio_i8mjxl.png")}
            />
          </div>
        </section>
        <section
          className="clients image-left"
          style={{ backgroundColor: "rgba(248, 231, 221, 0.2)" }}
        >
          <div className="wrapper">
            <div className="row">
              <div className="banner">
                <div className="image">
                  <picture className="first">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage("banner-aida-portofilio_dosqpu.png")}
                    />
                    <source
                      srcSet={getImage("banner-aida-portofilio_dosqpu.png")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("banner-aida-portofilio_dosqpu.png")}
                      alt="banner"
                    />
                  </picture>
                  <picture className="second">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage(
                        "banner-mobile-aida-portofilio_iff0gy.png"
                      )}
                    />
                    <source
                      srcSet={getImage(
                        "banner-mobile-aida-portofilio_iff0gy.png"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage("banner-mobile-aida-portofilio_iff0gy.png")}
                      alt="banner"
                    />
                  </picture>
                </div>
                <div
                  className="content text-light text-center"
                  style={{ backgroundColor: "#01081E" }}
                >
                  <div className="inner">
                    <h2 className="title">AIDA Shoreditch</h2>
                    <div className="icon">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("shopify-portofilio_qlocsf.svg")}
                        />
                        <source
                          srcSet={getImage("shopify-portofilio_qlocsf.svg")}
                        />
                        <img
                          loading="lazy"
                          src={getImage("shopify-portofilio_qlocsf.svg")}
                          alt="banner"
                        />
                      </picture>
                    </div>
                  </div>
                  <span
                    className="background-second"
                    style={{ backgroundColor: "#00DCAB" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="clients image-right"
          style={{ backgroundColor: "rgba(190, 35, 38, 0.2)" }}
        >
          <div className="wrapper">
            <div className="row">
              <div className="banner">
                <div className="image">
                  <picture className="first">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage(
                        "banner-drumcenter-portofilio_f9y0c0.jpg"
                      )}
                    />
                    <source
                      srcSet={getImage(
                        "banner-drumcenter-portofilio_f9y0c0.jpg"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage("banner-drumcenter-portofilio_f9y0c0.jpg")}
                      alt="banner"
                    />
                  </picture>
                  <picture className="second border-none">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage(
                        "banner-mobile-drumcenter-portofilio_wwfxds.png"
                      )}
                    />
                    <source
                      srcSet={getImage(
                        "banner-mobile-drumcenter-portofilio_wwfxds.png"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage(
                        "banner-mobile-drumcenter-portofilio_wwfxds.png"
                      )}
                      alt="banner"
                    />
                  </picture>
                </div>
                <div
                  className="content text-light text-center"
                  style={{ backgroundColor: "#BE2326" }}
                >
                  <div className="inner">
                    <h2 className="title">Drum Center of Portsmouth</h2>
                    <div className="icon">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("magento-portofilio_kyoirz.svg")}
                        />
                        <source
                          srcSet={getImage("magento-portofilio_kyoirz.svg")}
                        />
                        <img
                          loading="lazy"
                          src={getImage("magento-portofilio_kyoirz.svg")}
                          alt="banner"
                        />
                      </picture>
                    </div>
                  </div>
                  <span
                    className="background-second"
                    style={{ backgroundColor: "#01081E" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="clients image-left"
          style={{ backgroundColor: "rgba(16, 116, 178, 0.2)" }}
        >
          <div className="wrapper">
            <div className="row">
              <div className="banner">
                <div className="image">
                  <picture className="first">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage(
                        "banner-fishingtackle-portofilio_j8eloi.jpg"
                      )}
                    />
                    <source
                      srcSet={getImage(
                        "banner-fishingtackle-portofilio_j8eloi.jpg"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage(
                        "banner-fishingtackle-portofilio_j8eloi.jpg"
                      )}
                      alt="banner"
                    />
                  </picture>
                  <picture className="second">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage(
                        "banner-mobile-fishingtackle-portofilio_zcifar.png"
                      )}
                    />
                    <source
                      srcSet={getImage(
                        "banner-mobile-fishingtackle-portofilio_zcifar.png"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage(
                        "banner-mobile-fishingtackle-portofilio_zcifar.png"
                      )}
                      alt="banner"
                    />
                  </picture>
                </div>
                <div
                  className="content text-light text-center"
                  style={{ backgroundColor: "#1074B2" }}
                >
                  <div className="inner">
                    <h2 className="title">Total Fishing Tackle</h2>
                    <div className="icon">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("magento-portofilio_kyoirz.svg")}
                        />
                        <source
                          srcSet={getImage("magento-portofilio_kyoirz.svg")}
                        />
                        <img
                          loading="lazy"
                          src={getImage("magento-portofilio_kyoirz.svg")}
                          alt="banner"
                        />
                      </picture>
                    </div>
                  </div>
                  <span
                    className="background-second"
                    style={{ backgroundColor: "#01081E" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="clients image-right"
          style={{ backgroundColor: "rgba(129, 199, 175, 0.2)" }}
        >
          <div className="wrapper">
            <div className="row">
              <div className="banner">
                <div className="image">
                  <picture className="first">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage("banner-postmark-portofilio_qexaun.jpg")}
                    />
                    <source
                      srcSet={getImage("banner-postmark-portofilio_qexaun.jpg")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("banner-postmark-portofilio_qexaun.jpg")}
                      alt="banner"
                    />
                  </picture>
                  <picture className="second">
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage(
                        "banner-mobile-postmark-portofilio_hok99x.png"
                      )}
                    />
                    <source
                      srcSet={getImage(
                        "banner-mobile-postmark-portofilio_hok99x.png"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage(
                        "banner-mobile-postmark-portofilio_hok99x.png"
                      )}
                      alt="banner"
                    />
                  </picture>
                </div>
                <div
                  className="content text-light text-center"
                  style={{ backgroundColor: "#81C7AF" }}
                >
                  <div className="inner">
                    <h2 className="title">Postmark Online</h2>
                    <div className="icon">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("magento-portofilio_kyoirz.svg")}
                        />
                        <source
                          srcSet={getImage("magento-portofilio_kyoirz.svg")}
                        />
                        <img
                          loading="lazy"
                          src={getImage("magento-portofilio_kyoirz.svg")}
                          alt="banner"
                        />
                      </picture>
                    </div>
                  </div>
                  <span
                    className="background-second"
                    style={{ backgroundColor: "#01081E" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FormContact className="form-contact line-bottom-left margin-top" />
        <SubscribeEmail className="newsletter-section bg-grey" />
      </main>
    </Layout>
  )
}
