import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SubscribeEmail from "../presentComponents/SubscribeEmail"
import TrustedBy from "../presentComponents/TrustedBy"

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact" />
      <main id="main" className="site-main cms-page contact">
        <section
          className="main-banner text-light text-left"
          style={{ backgroundImage: "url(images/bg-banner.jpg)" }}
        >
          <div className="wrapper">
            <div className="row row-flex">
              <div className="col-text">
                <div className="content">
                  <h3 className="title">
                    I’m based in London, but I work with clients all around the
                    world
                  </h3>
                  <p>
                    Bringing your vision to life by building beautiful and
                    cutting edge Magento websites
                  </p>
                </div>
              </div>
              <div className="col-image text-center">
                <div className="reviews-tripadvisor">
                  <img src="images/tripadvisor.svg" alt />
                  <p>
                    <strong>4.9</strong> Average rating, <strong>33</strong>{" "}
                    Total reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="line-bottom-left hide-for-mobile" />
        <section className="contact-section">
          <div className="wrapper">
            <div className="row-flex">
              <div className="col-info">
                <h2 className="title">Get in touch</h2>
                <p className="text">
                  If you would like to discuss your project ideas, just have an
                  informal chat or arrange a free no obligation consultation
                  then feel free to complete the contact form, or contact me at:
                </p>
                <ul className="information">
                  <li>
                    <span className="icon">
                      <i className="icon-email-black" />
                    </span>
                    <a href="mailto:rowan@burgesscommerce.com">
                      rowan@burgesscommerce.com
                    </a>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="icon-phone-black" />
                    </span>
                    <a href="tel:07885 910 429">07885 910 429</a>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="icon-in-square" />
                    </span>
                    <a href="linkedin.com/in/rowan-burgess">
                      linkedin.com/in/rowan-burgess
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-form">
                <div className="form-contact">
                  <form>
                    <ul>
                      <li className="title">
                        <div className="image">
                          <picture>
                            <source
                              media="(min-width: 768px)"
                              srcSet="images/thumbnail-contact-section.png"
                            />
                            <source srcSet="images/thumbnail-contact-section-mobile.png" />
                            <img
                              loading="lazy"
                              src="images/thumbnail-contact-section.png"
                              alt
                            />
                          </picture>
                        </div>
                        <h6 className="hide-for-desktop">
                          Let’s talk about how I can help you
                        </h6>
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
                        <p>
                          <span className="hide">Thank you! </span>I’ll give you
                          a call or email reply shortly to discuss your project
                        </p>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <iframe
            loading="lazy"
            id="map"
            src="https://snazzymaps.com/embed/128637"
            width="100%"
            height="716px"
            style={{ border: "none" }}
          />
        </section>
        <TrustedBy className="testimonials-carousel bg-blue text-center text-light padding-top padding-bottom" />
        <section className="line-bottom-right" />
        <section className="blog-features line-bottom-left">
          <div className="wrapper">
            <div className="heading">
              <h3 className="title text-center text-dark">Recent Resources</h3>
            </div>
            <div className="row-flex owl-carousel">
              <div className="col-wide-4">
                <div className="inner">
                  <a href="#">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet="images/blog-post-1.jpg"
                      />
                      <source srcSet="images/blog-post-1.jpg" />
                      <img loading="lazy" src="images/blog-post-1.jpg" alt />
                    </picture>
                  </a>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">Quick brown fox jumps over the lazy dog.</a>
                    </h6>
                    <ul className="show-tags">
                      <li>
                        <a href="#">Magento</a>
                      </li>
                      <li>
                        <a href="#">Ux</a>
                      </li>
                    </ul>
                    <ul className="show-date">
                      <li>
                        <span className="icon">
                          <i className="icon-calendar" />
                        </span>
                        13 Feb 2021
                      </li>
                      <li>
                        <span className="icon">
                          <i className="icon-time" />
                        </span>
                        20 minutes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-wide-4">
                <div className="inner">
                  <a href="#">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet="images/blog-post-2.jpg"
                      />
                      <source srcSet="images/blog-post-2.jpg" />
                      <img loading="lazy" src="images/blog-post-2.jpg" alt />
                    </picture>
                  </a>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">Quick brown fox jumps over the lazy dog.</a>
                    </h6>
                    <ul className="show-tags">
                      <li>
                        <a href="#">Magento</a>
                      </li>
                      <li>
                        <a href="#">Ux</a>
                      </li>
                    </ul>
                    <ul className="show-date">
                      <li>
                        <span className="icon">
                          <i className="icon-calendar" />
                        </span>
                        13 Feb 2021
                      </li>
                      <li>
                        <span className="icon">
                          <i className="icon-time" />
                        </span>
                        20 minutes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-wide-4">
                <div className="inner">
                  <a href="#">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet="images/blog-post-3.jpg"
                      />
                      <source srcSet="images/blog-post-3.jpg" />
                      <img loading="lazy" src="images/blog-post-3.jpg" alt />
                    </picture>
                  </a>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">Quick brown fox jumps over the lazy dog.</a>
                    </h6>
                    <ul className="show-tags">
                      <li>
                        <a href="#">Magento</a>
                      </li>
                      <li>
                        <a href="#">Ux</a>
                      </li>
                    </ul>
                    <ul className="show-date">
                      <li>
                        <span className="icon">
                          <i className="icon-calendar" />
                        </span>
                        13 Feb 2021
                      </li>
                      <li>
                        <span className="icon">
                          <i className="icon-time" />
                        </span>
                        20 minutes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <a href="#" className="button tertiary read-more">
                See More Resources
              </a>
            </div>
          </div>
        </section>
        <SubscribeEmail className="newsletter-section bg-grey" />
      </main>
    </Layout>
  )
}
