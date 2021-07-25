import React, { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage } from "../lib/common"
import SubscribeEmail from "../presentComponents/SubscribeEmail"

export default function Portfolio() {
  return (
    <Layout>
      <Seo title="Resource" />
      <main id="main" className="site-main cms-page">
        <section
          className="main-banner text-light text-left"
          style={{
            backgroundImage: `url(${getImage("bg-banner-white_zkei7f.jpg")})`,
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
              src="images/thumbnail-portofilio.png"
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
                      srcSet="images/banner-aida-portofilio.jpg"
                    />
                    <source srcSet="images/banner-aida-portofilio.jpg" />
                    <img
                      loading="lazy"
                      src="images/banner-aida-portofilio.jpg"
                      alt
                    />
                  </picture>
                  <picture className="second">
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/banner-mobile-aida-portofilio.png"
                    />
                    <source srcSet="images/banner-mobile-aida-portofilio.png" />
                    <img
                      loading="lazy"
                      src="images/banner-mobile-aida-portofilio.png"
                      alt
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
                          srcSet="images/shopify-portofilio.svg"
                        />
                        <source srcSet="images/shopify-portofilio.svg" />
                        <img
                          loading="lazy"
                          src="images/shopify-portofilio.svg"
                          alt
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
                      srcSet="images/banner-drumcenter-portofilio.jpg"
                    />
                    <source srcSet="images/banner-drumcenter-portofilio.jpg" />
                    <img
                      loading="lazy"
                      src="images/banner-drumcenter-portofilio.jpg"
                      alt
                    />
                  </picture>
                  <picture className="second border-none">
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/banner-mobile-drumcenter-portofilio.png"
                    />
                    <source srcSet="images/banner-mobile-drumcenter-portofilio.png" />
                    <img
                      loading="lazy"
                      src="images/banner-mobile-drumcenter-portofilio.png"
                      alt
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
                          srcSet="images/magento-portofilio.svg"
                        />
                        <source srcSet="images/magento-portofilio.svg" />
                        <img
                          loading="lazy"
                          src="images/magento-portofilio.svg"
                          alt
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
                      srcSet="images/banner-fishingtackle-portofilio.jpg"
                    />
                    <source srcSet="images/banner-fishingtackle-portofilio.jpg" />
                    <img
                      loading="lazy"
                      src="images/banner-fishingtackle-portofilio.jpg"
                      alt
                    />
                  </picture>
                  <picture className="second">
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/banner-mobile-fishingtackle-portofilio.png"
                    />
                    <source srcSet="images/banner-mobile-fishingtackle-portofilio.png" />
                    <img
                      loading="lazy"
                      src="images/banner-mobile-fishingtackle-portofilio.png"
                      alt
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
                          srcSet="images/magento-portofilio.svg"
                        />
                        <source srcSet="images/magento-portofilio.svg" />
                        <img
                          loading="lazy"
                          src="images/magento-portofilio.svg"
                          alt
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
                      srcSet="images/banner-postmark-portofilio.jpg"
                    />
                    <source srcSet="images/banner-postmark-portofilio.jpg" />
                    <img
                      loading="lazy"
                      src="images/banner-postmark-portofilio.jpg"
                      alt
                    />
                  </picture>
                  <picture className="second">
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/banner-mobile-postmark-portofilio.png"
                    />
                    <source srcSet="images/banner-mobile-postmark-portofilio.png" />
                    <img
                      loading="lazy"
                      src="images/banner-mobile-postmark-portofilio.png"
                      alt
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
                          srcSet="images/magento-portofilio.svg"
                        />
                        <source srcSet="images/magento-portofilio.svg" />
                        <img
                          loading="lazy"
                          src="images/magento-portofilio.svg"
                          alt
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
        <section className="form-contact line-bottom-left margin-top">
          <div className="wrapper full-width">
            <div className="row">
              <div className="col-image">
                <div className="image">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={getImage("bg-banner-white_zkei7f.jpg")}
                    />
                    <source srcSet={getImage("bg-banner-white_zkei7f.jpg")} />
                    <img
                      loading="lazy"
                      src={getImage("bg-banner-white_zkei7f.jpg")}
                      alt="bg-banner-white"
                    />
                  </picture>
                </div>
              </div>
              <div className="content">
                <form>
                  <ul>
                    <li className="title">
                      <div className="image bg-blue">
                        <picture>
                          <source
                            media="(min-width: 1024px)"
                            srcSet={getImage(
                              "thumbnail-form-contact_z8wmea.png"
                            )}
                          />
                          <source
                            srcSet={getImage(
                              "thumbnail-form-contact-mobile_dk4rma.png"
                            )}
                          />
                          <img
                            loading="lazy"
                            src={getImage("thumbnail-form-contact_z8wmea.png")}
                            alt=""
                          />
                        </picture>
                      </div>
                      <h2>Let’s talk about how I can help you</h2>
                    </li>
                    <li className="input-js">
                      <label>Your email address *</label>
                      <input
                        type="email"
                        name="contact[email]"
                        placeholder="Your email address *"
                        id="email"
                        className="required"
                        defaultValue
                        autoCorrect="off"
                        autoCapitalize="off"
                      />
                    </li>
                    <li className="input-js">
                      <label>Your phone number</label>
                      <input
                        type="tel"
                        name="contact[number]"
                        placeholder="Your phone number"
                        id="phone"
                        defaultValue
                        autoCorrect="off"
                        autoCapitalize="off"
                      />
                    </li>
                    <li className="input-js">
                      <label>Your name</label>
                      <input
                        type="text"
                        name="contact[name]"
                        placeholder="Your name"
                        id="name"
                        defaultValue
                        autoCorrect="off"
                        autoCapitalize="off"
                      />
                    </li>
                    <li className="input-js">
                      <label>Your message</label>
                      <textarea
                        type="textarea"
                        name="contact[message]"
                        placeholder="Your message"
                        id="message"
                        value
                        autoCorrect="off"
                        autoCapitalize="off"
                        defaultValue={""}
                      />
                    </li>
                    <li className>
                      <button
                        type="submit"
                        name="commit"
                        className="button secondary"
                      >
                        Let’s Talk
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </section>
        <SubscribeEmail className="newsletter-section bg-grey" />
      </main>
    </Layout>
  )
}
