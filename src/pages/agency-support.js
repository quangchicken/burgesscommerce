import React, { useEffect } from "react"
import $ from "jquery"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage } from "../lib/common"
import Faq from "../presentComponents/Faq"
import RecentResources from "../presentComponents/RecentResources"
import SubscribeEmail from "../presentComponents/SubscribeEmail"
import TrustedBy from "../presentComponents/TrustedBy"
import FormContact from "../presentComponents/FormContact"
import { Mailchimp } from "../presentComponents/Newsletter"

export default function AgencySupport() {
  useEffect(() => {
    $(".cms-twocols .dropdown .title").on("click", function (e) {
      e.preventDefault()
      var $el = $(this)
      $(".cms-twocols .dropdown .title").not($el).parent().removeClass("active")
      $el.parent().addClass("active")
    })
  }, [])

  return (
    <Layout>
      <Seo title="Agency Support" />
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
                  <h3 className="title">Agency Support</h3>
                  <p>
                    In-house resource overstretched? Client relationships
                    suffering?
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
                    srcSet={getImage("thumbnail-rowan-rbc_dtk3zw.png")}
                  />
                  <source
                    srcSet={getImage("thumbnail-rowan-rbc-mobile_fgdubw.png")}
                  />
                  <img
                    loading="lazy"
                    src={getImage("thumbnail-rowan-rbc_dtk3zw.png")}
                    alt="thumbnail-rowan-rb"
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
                <img
                  src={getImage("magento-certified-3-rbc_jewkiu.svg")}
                  alt="certified"
                />
              </div>
              <div className="item">
                <img
                  src={getImage("magento-certified-2-rbc_spgvzd.svg")}
                  alt="certified"
                />
              </div>
              <div className="item">
                <img
                  src={getImage("professional-rbc_q1oki3.svg")}
                  alt="certified"
                />
              </div>
              <div className="item">
                <img
                  src={getImage("google-partner-rbc_zy5hab.svg")}
                  alt="certified"
                />
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
                    srcSet={getImage("resourcing-problems_fhxmtw.png")}
                  />
                  <source srcSet={getImage("resourcing-problems_fhxmtw.png")} />
                  <img
                    loading="lazy"
                    src={getImage("resourcing-problems_fhxmtw.png")}
                    alt="resourcing-problems"
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
                    srcSet={getImage("cols2-banner-1_q41l82.png")}
                  />
                  <source
                    srcSet={getImage("cols2-banner-1-mobile_zjuh2x.png")}
                  />
                  <img
                    loading="lazy"
                    src={getImage("cols2-banner-1_q41l82.png")}
                    alt="banner"
                  />
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
                    srcSet={getImage("aidastore_sq2vuc.jpg")}
                  />
                  <source srcSet={getImage("aidastore-mobile_m9ymlz.jpg")} />
                  <img
                    loading="lazy"
                    src={getImage("aidastore_sq2vuc.jpg")}
                    alt="aidastore_sq2vuc"
                  />
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
                  <Mailchimp placeholder="Your email address" showText />
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
                    srcSet={getImage("magento-development_cb0gcp.png")}
                  />
                  <source
                    srcSet={getImage("magento-development-mobile_ps9hof.png")}
                  />
                  <img
                    loading="lazy"
                    src={getImage("magento-development_cb0gcp.png")}
                    alt="magento-development"
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
                      srcSet={getImage("magento-development_cb0gcp.png")}
                    />
                    <source
                      srcSet={getImage("magento-development-mobile_ps9hof.png")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("magento-development_cb0gcp.png")}
                      alt="magento-development"
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
                    srcSet={getImage("magento-seo-design-and-ux_hflfdb.png")}
                  />
                  <source
                    srcSet={getImage(
                      "magento-seo-design-and-ux-mobile_qpjhj7.png"
                    )}
                  />
                  <img
                    loading="lazy"
                    src={getImage("magento-seo-design-and-ux_hflfdb.png")}
                    alt="magento-seo-design-and-ux"
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
                      srcSet={getImage("magento-seo-design-and-ux_hflfdb.png")}
                    />
                    <source
                      srcSet={getImage(
                        "magento-seo-design-and-ux-mobile_qpjhj7.png"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage("magento-seo-design-and-ux_hflfdb.png")}
                      alt="magento-seo-design-and-ux"
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
        <RecentResources
          className="blog-features margin-top margin-bottom"
          mainTitle={"Related Content"}
        />
        <FormContact />
        <SubscribeEmail className="newsletter-section bg-grey" />
      </main>
    </Layout>
  )
}
