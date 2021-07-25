import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Faq from "../presentComponents/Faq"
import SubscribeEmail from "../presentComponents/SubscribeEmail"
import TrustedBy from "../presentComponents/TrustedBy"

export default function AgencySupport() {
  return (
    <Layout>
      <Seo title="Agency Support" />
      <main id="main" className="site-main cms-page">
        <section
          className="main-banner text-light text-left"
          style={{ backgroundImage: "url(images/bg-banner.jpg)" }}
        >
          <div className="wrapper">
            <div className="row row-flex">
              <div className="col-text">
                <div className="content">
                  <h3 className="title">Agency Support</h3>
                  <p>
                    In-house resource overstretched? Client relationships
                    suffering?
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
        <section
          className="banner-with-text banner-thumbnail-rbc padding-top"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="wrapper small">
            <div className="row-flex row-flex-aligncenter">
              <div className="col-image">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="images/thumbnail-rowan-rbc.png"
                  />
                  <source srcSet="images/thumbnail-rowan-rbc-mobile.png" />
                  <img
                    loading="lazy"
                    src="images/thumbnail-rowan-rbc.png"
                    alt
                  />
                </picture>
              </div>
              <div className="col-text text-left">
                <div className="heading">
                  <h2 className="title" />
                </div>
                <div className="content">
                  <p>
                    My goal is to provide the most professional, comprehensive
                    and rapid Magento service possible at affordable rates that
                    are simply unachievable by typical digital agencies
                  </p>
                  <div className="action">
                    <h6>No time to read the details?</h6>
                    <a href="#" className="button">
                      Let’s Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="logo-list line-bottom-right">
          <div className="wrapper">
            <div className="row-flex row-flex-aligncenter">
              <div className="item">
                <img src="images/magento-certified-3-rbc.svg" alt />
              </div>
              <div className="item">
                <img src="images/magento-certified-2-rbc.svg" alt />
              </div>
              <div className="item">
                <img src="images/professional-rbc.svg" alt />
              </div>
              <div className="item">
                <img src="images/google-partner-rbc.svg" alt />
              </div>
            </div>
          </div>
        </section>
        <section className="banner-with-text twocols margin-bottom margin-top padding-bottom">
          <div className="wrapper">
            <div className="row-flex row-flex-aligncenter">
              <div className="col-image">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="images/resourcing-problems.png"
                  />
                  <source srcSet="images/resourcing-problems.png" />
                  <img
                    loading="lazy"
                    src="images/resourcing-problems.png"
                    alt
                  />
                </picture>
              </div>
              <div className="col-text text-dark">
                <div className="heading">
                  <h2 className="title">
                    Solve your development resourcing problems
                  </h2>
                </div>
                <div className="content">
                  <p>
                    Finding reliable and trusted freelance Magento developers
                    and ecommerce experts can be tough.
                  </p>
                  <p>
                    Making sure you have enough resource to meet the demands of
                    your client’s projects is a constant difficulty.
                  </p>
                  <p>
                    Having a flexible and reliable external resource on hand to
                    help support your agency is essential for things to run
                    smoothly.
                  </p>
                </div>
                <div className="action">
                  <p>Ready to make a start?</p>
                  <a href="#" className="button tertiary">
                    Let’s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-with-text twocols margin-bottom padding-bottom">
          <div className="wrapper">
            <div className="row-flex row-flex-reverse row-flex-aligncenter">
              <div className="col-image">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="images/cols2-banner-1.png"
                  />
                  <source srcSet="images/cols2-banner-1-mobile.png" />
                  <img loading="lazy" src="images/cols2-banner-1.png" alt />
                </picture>
              </div>
              <div className="col-text text-dark">
                <div className="heading">
                  <h2 className="title">
                    Deliver on time, keep clients happy and lower costs
                  </h2>
                </div>
                <div className="content">
                  <p>
                    99% of my work is delivered on the estimated time. This can
                    help you plan your Magento or Shopify projects effectively
                    without worry of disappointing your clients.
                  </p>
                  <p>
                    I offer competitive estimates equivalent to no more than
                    you’d expect to pay for a professional Magento developer,
                    only you don’t have any type of employment commitment and
                    related costs.
                  </p>
                </div>
                <div className="action">
                  <p>Ready to make a start?</p>
                  <a href="#" className="button tertiary">
                    Let’s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-one">
          <div className="wrapper full-width">
            <div className="row">
              <div className="image">
                <picture>
                  <source
                    media="(min-width: 960px)"
                    srcSet="images/aidastore.jpg"
                  />
                  <source srcSet="images/aidastore-mobile.jpg" />
                  <img loading="lazy" src="images/aidastore.jpg" alt />
                </picture>
              </div>
              <div className="caption located-image text-center">
                <div className="wrapper">
                  <div className="content">
                    <h2 className="title">
                      <span>“Burgess Commerce has been a key ingredient</span>
                      <span> to our online success!”</span>
                    </h2>
                    <p className="sub">
                      <span>Someone - Somewhere</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="banner-content padding-top padding-bottom"
          style={{ backgroundColor: "#01D6A7" }}
        >
          <div className="wrapper">
            <div className="row">
              <div className="content text-center">
                <h2>
                  Freelance rates, guaranteed
                  <br />
                  delivery dates, fully insured
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter-section onecols text-light text-center bg-blue line-bottom-right">
          <div className="wrapper">
            <div className="row-flex row-flex-aligncenter">
              <div className="col-wide-12">
                <h4 className="title">Impressed? Get in touch</h4>
                <div className="newsletter-form">
                  <form className>
                    <div className="actions">
                      <input
                        type="email"
                        name="contact[email]"
                        placeholder="Your email address"
                        id="newsletter-email"
                        className="required"
                        defaultValue
                        autoCorrect="off"
                        autoCapitalize="off"
                      />
                      <button type="submit" name="commit" className="button">
                        Subscribe
                      </button>
                    </div>
                    <span className="hide">Email address is required</span>
                    <p className="text-light">
                      <span className="hide">Thank you! </span>I’ll give you a
                      call or email reply shortly to discuss your project
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Faq className="margin-top padding-bottom padding-top" />

        <TrustedBy className="testimonials-carousel bg-blue text-center text-light padding-top padding-bottom" />

        <section className="banner-with-text cms-twocols line-bottom-left">
          <div className="wrapper">
            <div className="row-flex">
              <div className="col-image hide-for-mobile">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="images/magento-development.png"
                  />
                  <source srcSet="images/magento-development-mobile.png" />
                  <img
                    loading="lazy"
                    src="images/magento-development.png"
                    alt
                  />
                </picture>
              </div>
              <div className="col-text text-dark">
                <div className="title">
                  <h4>Magento Development</h4>
                  <p>
                    Migrating to a new platform is not something to take
                    lightly. Hire Trellis to inform you decision making process
                    and develop a strong execution plan to migrate to a new
                    platform.
                  </p>
                </div>
                <div className="image hide-for-desktop">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/magento-development.png"
                    />
                    <source srcSet="images/magento-development-mobile.png" />
                    <img
                      loading="lazy"
                      src="images/magento-development.png"
                      alt
                    />
                  </picture>
                </div>
                <div className="dropdown">
                  <ul>
                    <li className="active">
                      <h6 className="title">
                        Magento 1 to Magento 2 Migration
                      </h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Shopify to Magento Migration</h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Magento Upgrade</h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Magento Integrations</h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Magento Hosting</h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Magento Custom Development</h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Performance Optimisation</h6>
                      <p className="text">
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-with-text cms-twocols">
          <div className="wrapper">
            <div className="row-flex row-flex-reverse">
              <div className="col-image hide-for-mobile">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="images/magento-seo-design-and-ux.png"
                  />
                  <source srcSet="images/magento-seo-design-and-ux-mobile.png" />
                  <img
                    loading="lazy"
                    src="images/magento-seo-design-and-ux.png"
                    alt
                  />
                </picture>
              </div>
              <div className="col-text text-dark">
                <div className="title">
                  <h4>Magento SEO, Design &amp; UX</h4>
                  <p>
                    Migrating to a new platform is not something to take
                    lightly.
                  </p>
                </div>
                <div className="image hide-for-desktop">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/magento-seo-design-and-ux.png"
                    />
                    <source srcSet="images/magento-seo-design-and-ux-mobile.png" />
                    <img
                      loading="lazy"
                      src="images/magento-seo-design-and-ux.png"
                      alt
                    />
                  </picture>
                </div>
                <div className="dropdown">
                  <ul>
                    <li>
                      <h6 className="title">Magento Upgrade</h6>
                      <p>
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Shopify to Magento Migration</h6>
                      <p>
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li className="active">
                      <h6 className="title">
                        Magento 1 to Magento 2 Migration
                      </h6>
                      <p>
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Magento Upgrade</h6>
                      <p>
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                    <li>
                      <h6 className="title">Shopify to Magento Migration</h6>
                      <p>
                        Migrating to a new platform is not something to take
                        lightly. Hire Trellis to inform you decision making
                        process.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="what-we-are bg-blue line-top">
          <div className="wrapper">
            <div className="row-flex">
              <div className="col-wide-4">
                <span className="title h1">12+</span>
                <span className="sub h5">Years Experience</span>
              </div>
              <div className="col-wide-4">
                <span className="title h1">20+</span>
                <span className="sub h5">Platform Migrations</span>
              </div>
              <div className="col-wide-4">
                <span className="title h1">60+</span>
                <span className="sub h5">Projects Delivered</span>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-features margin-top margin-bottom">
          <div className="wrapper">
            <div className="heading">
              <h3 className="title text-center text-dark">Related Content</h3>
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
          </div>
        </section>
        <section className="form-contact line-bottom-left">
          <div className="wrapper full-width">
            <div className="row">
              <div className="col-image">
                <div className="image">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet="images/bg-banner-white.jpg"
                    />
                    <source srcSet="images/bg-banner-white.jpg" />
                    <img loading="lazy" src="images/bg-banner-white.jpg" alt />
                  </picture>
                </div>
              </div>
              <div className="content">
                <form>
                  <ul>
                    <li className="title">
                      <div className="image">
                        <picture>
                          <source
                            media="(min-width: 1024px)"
                            srcSet="images/thumbnail-form-contact.png"
                          />
                          <source srcSet="images/thumbnail-form-contact-mobile.png" />
                          <img
                            loading="lazy"
                            src="images/thumbnail-form-contact.png"
                            alt
                          />
                        </picture>
                      </div>
                      <h2>Let’s talk about how I can help you</h2>
                    </li>
                    <li className="input-js error">
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
                      <span>Email address is required</span>
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
