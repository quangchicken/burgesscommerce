import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Faq from "../presentComponents/Faq"
import SubscribeEmail from "../presentComponents/SubscribeEmail"

export default function RbcMagento() {
  return (
    <Layout>
      <Seo title="Resource" />
      <main id="main" className="site-main cms-page">
        <section
          className="main-banner text-light text-left"
          style={{ backgroundImage: "url(images/bg-banner.jpg)" }}
        >
          <div className="wrapper">
            <div className="row row-flex">
              <div className="col-text">
                <div className="content">
                  <h3 className="title">Expert, Affordable Magento Services</h3>
                  <p>
                    Bringing your vision to life by building beautiful and
                    cutting edge Magento websites
                  </p>
                </div>
              </div>
              <div className="col-image text-center">
                <div className="reviews-tripadvisor">
                  <img src="images/tripadvisor.svg" alt="" />
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
                    alt=""
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
                <img src="images/magento-certified-3-rbc.svg" alt="" />
              </div>
              <div className="item">
                <img src="images/magento-certified-2-rbc.svg" alt="" />
              </div>
              <div className="item">
                <img src="images/professional-rbc.svg" alt="" height={100} />
              </div>
              <div className="item hide-for-mobile">
                <img src="images/google-partner-rbc.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
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
                    alt=""
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
                      alt=""
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
                    alt=""
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
                      alt=""
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
        <section className="newsletter-section onecols text-light text-center bg-blue line-bottom-right">
          <div className="wrapper">
            <div className="row-flex row-flex-aligncenter">
              <div className="col-wide-12">
                <h4 className="title">Impressed? Get in touch</h4>
                <div className="newsletter-form">
                  <form className="">
                    <div className="actions">
                      <input
                        type="email"
                        name="contact[email]"
                        placeholder="Your email address"
                        id="newsletter-email"
                        className="required"
                        defaultValue=""
                        autoCorrect="off"
                        autoCapitalize="off"
                      />
                      <button type="submit" name="commit" className="button">
                        Subscribe
                      </button>
                    </div>
                    <span className="hide">Email address is required</span>
                    <p className="text-light">
                      <span>Thank you! </span>I’ll give you a call or email
                      reply shortly to discuss your project
                    </p>
                  </form>
                </div>
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
                    srcSet="images/magento-master.png"
                  />
                  <source srcSet="images/magento-master-mobile.png" />
                  <img loading="lazy" src="images/magento-master.png" alt="" />
                </picture>
              </div>
              <div className="col-text text-dark">
                <div className="heading">
                  <h2 className="title">We are Magento masters</h2>
                </div>
                <div className="content">
                  <p>
                    I integrate as part of your team to provide a long term and
                    dependable resource for all things ecommerce related to your
                    business
                  </p>
                  <a href="#" className="button-text">
                    explore our projects{" "}
                    <span className="icon">
                      <i className="icon-chevron-right-green" />
                    </span>
                  </a>
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
                  <img loading="lazy" src="images/cols2-banner-1.png" alt="" />
                </picture>
              </div>
              <div className="col-text text-dark">
                <div className="heading">
                  <h2 className="title">All of our projects</h2>
                </div>
                <div className="content">
                  <ul>
                    <li>Are bespoke, no templates</li>
                    <li>
                      Are worked on by specialists - designers, developers,
                      marketers
                    </li>
                    <li>Are responsive and perform well on all devices</li>
                    <li>SEO compliant</li>
                    <li>Come with warranty</li>
                  </ul>
                </div>
                <a href="#" className="button-text" />
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
        <section
          className="text-cols"
          style={{ backgroundImage: "url(images/bg-banner-white.jpg)" }}
        >
          <div className="wrapper">
            <div className="row">
              <div className="heading">
                <h2>We like to keep it simple</h2>
              </div>
              <div className="content">
                <div className="text-col active">
                  <h5 className="title">No Jargon, No Fluff</h5>
                  <p className="text">
                    I believe in keeping things simple and direct. No sales’y
                    speak, no upselling, no fancy agency talk. I aim to deliver
                    straight forward and reliable magento development services
                  </p>
                </div>
                <div className="text-col">
                  <h5 className="title">Transparency</h5>
                  <p className="text">
                    It’s important you have full visibility of what is happening
                    and when with your online business. That’s why I ensure
                    you’re in full control and have full visibility at all times
                  </p>
                </div>
                <div className="text-col">
                  <h5 className="title">High Quality, Quick Delivery</h5>
                  <p className="text">
                    With very little overheads and an attention to detail, you
                    can expect the same (or better) level of standard you’d
                    expect from an expensive Magento agency, at a significantly
                    lower cost
                  </p>
                </div>
                <div className="text-col">
                  <h5 className="title">Assurance</h5>
                  <p className="text">
                    With 10+ years of experience as a Magento developer and
                    ecommerce expert, you can rest assured your website is in
                    the best hands possible. I’m also fully insured for that
                    extra piece of mind
                  </p>
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
        <section className="banner-one line-bottom-right">
          <div className="wrapper full-width">
            <div className="row">
              <div className="image">
                <picture>
                  <source
                    media="(min-width: 960px)"
                    srcSet="images/aidastore.jpg"
                  />
                  <source srcSet="images/aidastore-mobile.jpg" />
                  <img loading="lazy" src="images/aidastore.jpg" alt="" />
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
        <section className="banner-with-text onecols text-dark text-center margin-top margin-bottom">
          <div className="wrapper">
            <div className="row">
              <div className="col-wide-12">
                <div className="heading">
                  <h2 className="title">
                    We partner with some of the best in the business
                  </h2>
                  <p>
                    Burgess Commerce has extensive experience working with some
                    of the worlds most popular ecommerce platforms and maintains
                    close partnerships with industry leading ecommerce services
                  </p>
                </div>
              </div>
              <div className="col-wide-12">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="images/logo-partner.jpg"
                  />
                  <source srcSet="images/logo-partner-mobile.png" />
                  <img loading="lazy" src="images/logo-partner.jpg" alt="" />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline">
          <div className="row-first">
            <div className="wrapper">
              <div className="row-flex">
                <div className="col-text">
                  <div className="heading">
                    <p className="sub">Here’s How It Works</p>
                    <h2>
                      We deliver beautiful ecommerce websites that produce real
                      results.
                    </h2>
                  </div>
                </div>
                <div className="col-image">
                  <div className="image">
                    <picture>
                      <source
                        media="(min-width: 768px)"
                        srcSet="images/aida-banner.jpg"
                      />
                      <source srcSet="images/aida-banner-mobile.jpg" />
                      <img loading="lazy" src="images/aida-banner.jpg" alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-second bg-grey">
            <div className="wrapper">
              <div className="row ">
                <div className="col-wide-6 col-left">
                  <div className="content">
                    <ul>
                      <li>
                        <h6 className="title active">Discover</h6>
                        <div className="text" style={{ display: "block" }}>
                          <p>
                            We define your <span>business goals</span> and
                            outline the project’s{" "}
                            <span>functional purposes</span> and requirements.
                            Our expert advice is offered at every step to ensure
                            we’re working towards the right solution for your
                            business.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="title">Design and UX</h6>
                        <div className="text">
                          <p>
                            With the blueprints in place, we proceed with the
                            design process using a <span>mobile first</span>{" "}
                            approach. We apply a visual design to the project
                            with a focus on <span>best practice</span> and{" "}
                            <span>conversion optimisation.</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="title">Build</h6>
                        <div className="text">
                          <p>
                            Using an agile development process we build a high
                            quality website using the agreed designs and with
                            your chosen platform.
                          </p>
                          <strong>
                            Magento . Shopify . BigCommerce . WooCommerce .
                            Shopware
                          </strong>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-wide-6 col-right">
                  <div className="content">
                    <ul>
                      <li>
                        <h6 className="title">Demo and Test</h6>
                        <div className="text">
                          <p>
                            The solution is rigurously tested before handed over
                            to you for review and further testing. Once we’re
                            all happy with the website, we schedule a launch
                            date and
                          </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="title">Launch</h6>
                        <div className="text">
                          <p>
                            The solution is rigurously tested before handed over
                            to you for review and further testing. Once we’re
                            all happy with the website, we schedule a launch
                            date and
                          </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="title">Improve, promote and grow</h6>
                        <div className="text">
                          <p>
                            Optimise the shopper journey, enhance the user
                            exprience rigurously tested before handed over to
                            you for review and further testing. Once we’re all
                            happy with the website, we schedule a launch date
                            and
                          </p>
                          <a href="#" className="button-text">
                            explore our projects{" "}
                            <span className="icon">
                              <i className="icon-chevron-right-green" />
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-third">
            <div className="wrapper">
              <div className="row">
                <div className="col-wide-6 col-image">
                  <div className="image">
                    <picture>
                      <source
                        media="(min-width: 768px)"
                        srcSet="images/postmark-banner.jpg"
                      />
                      <source srcSet="images/postmark-banner-mobile.jpg" />
                      <img
                        loading="lazy"
                        src="images/postmark-banner.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter-section onecols text-light text-center bg-blue line-bottom-right">
          <div className="wrapper">
            <div className="row-flex">
              <div className="col-wide-6" />
              <div className="col-wide-6">
                <h4 className="title">Sound good? Get in touch</h4>
                <div className="newsletter-form">
                  <form className="">
                    <div className="actions">
                      <input
                        type="email"
                        name="contact[email]"
                        placeholder="Your email address"
                        id="newsletter-email"
                        className="required"
                        defaultValue=""
                        autoCorrect="off"
                        autoCapitalize="off"
                      />
                      <button type="submit" name="commit" className="button">
                        Subscribe
                      </button>
                    </div>
                    <span className="hide">Email address is required</span>
                    <p className="text-light">
                      <span>Thank you! </span>I’ll give you a call or email
                      reply shortly to discuss your project
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="line-bottom-left hide-for-desktop" />
        <Faq className="faqs margin-top padding-bottom padding-top" />
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
                    <img
                      loading="lazy"
                      src="images/bg-banner-white.jpg"
                      alt=""
                    />
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
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
                        autoCorrect="off"
                        autoCapitalize="off"
                        defaultValue={""}
                      />
                    </li>
                    <li className="">
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
