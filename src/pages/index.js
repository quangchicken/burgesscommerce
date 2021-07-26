import * as React from "react"
// import { Link } from "gatsby"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Faq from "../presentComponents/Faq"
import SubscribeEmail from "../presentComponents/SubscribeEmail"
import { getImage } from "../lib/common"
import { Mailchimp } from "../presentComponents/Newsletter"

const TrustedBy = Loadable(() => import("../presentComponents/TrustedBy"))
const RecentResources = Loadable(() =>
  import("../presentComponents/RecentResources")
)

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <>
        <main id="main" className="site-main">
          <section className="main-banner home text-light text-center">
            <div className="screen">
              <div className="wrapper">
                <div className="row row-flex row-flex-direction">
                  <div className="col-text">
                    <div className="content">
                      <h3>
                        Like an agency, but more <span>agile</span>, more{" "}
                        <span>affordable</span>, more <span>personal</span>
                      </h3>
                      <div className="newsletter-form">
                        <Mailchimp showText label="Subscribe" />
                      </div>
                    </div>
                  </div>
                  <div className="col-image">
                    <div className="image">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("full-portrait_ugepkr.png")}
                        />
                        <source
                          srcSet={getImage("full-portrait-mobile_ytsrpd.png")}
                        />
                        <img
                          loading="lazy"
                          src={getImage("full-portrait_ugepkr.png")}
                          alt="full-portrait"
                        />
                      </picture>
                    </div>
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
            </div>
          </section>
          <section className="our-services">
            <div className="wrapper">
              <div className="row">
                <div className="partnership">
                  <div className="row">
                    <div className="col-wide-4 col-small-3">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("magento_hcf41g.svg")}
                        />
                        <source srcSet={getImage("magento-m_zn1jk3.svg")} />
                        <img
                          loading="lazy"
                          src={getImage("magento_hcf41g.svg")}
                          alt="magento"
                        />
                      </picture>
                    </div>
                    <div className="col-wide-4 col-small-3">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("shopify_nojsr5.svg")}
                        />
                        <source srcSet={getImage("shopify-m_eigos4.svg")} />
                        <img
                          loading="lazy"
                          src={getImage("shopify_nojsr5.svg")}
                          alt="shopify"
                        />
                      </picture>
                    </div>
                    <div className="col-wide-4 col-small-3">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("bigcommerce_w5xngy.svg")}
                        />
                        <source srcSet={getImage("bigcommerce-m_mfnkuq.svg")} />
                        <img
                          loading="lazy"
                          src={getImage("bigcommerce_w5xngy.svg")}
                          alt="bigcommerce"
                        />
                      </picture>
                    </div>
                    <div className="col-small-3 hide-for-desktop">
                      <picture>
                        <source
                          media="(min-width: 10240px)"
                          srcSet={getImage("wo-commerce_n00zdx.svg")}
                        />
                        <source srcSet={getImage("wo-commerce_n00zdx.svg")} />
                        <img
                          loading="lazy"
                          src={getImage("wo-commerce_n00zdx.svg")}
                          alt="wo-commerce"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="services">
                  <div className="row">
                    <div className="col-wide-4">
                      <div className="content">
                        <h3 className="title">
                          <span className="icon">
                            <i className="icon-design" />
                          </span>
                          Design &amp; Develop
                        </h3>
                        <p>
                          Expert, creative and affordable ecommerce design and
                          development services
                        </p>
                        <ul>
                          <li>
                            <a href="#">Magento</a>
                          </li>
                          <li>
                            <a href="#">BigCommerce</a>
                          </li>
                          <li>
                            <a href="#">WooCommerce</a>
                          </li>
                          <li>
                            <a href="#">WooCommerce</a>
                          </li>
                          <li>
                            <a href="#">Shopware</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wide-4">
                      <div className="content">
                        <h3 className="title">
                          <span className="icon">
                            <i className="icon-info" />
                          </span>
                          SEO &amp; Best Practice
                        </h3>
                        <p>
                          We can help identify, fix and improve your SEO to grow
                          your organic traffic
                        </p>
                        <ul>
                          <li>
                            <a href="#">Monthly SEO</a>
                          </li>
                          <li>
                            <a href="#">SEO Audit</a>
                          </li>
                          <li>
                            <a href="#">Consultancy</a>
                          </li>
                          <li>
                            <a href="#">UX and CRO</a>
                          </li>
                          <li>
                            <a href="#">Shopware</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wide-4">
                      <div className="content">
                        <h3 className="title">
                          <span className="icon">
                            <i className="icon-audit" />
                          </span>
                          Audit
                        </h3>
                        <p>
                          Let us ensure your website is in the best condition
                          possible to help blab blabablabla
                        </p>
                        <ul>
                          <li>
                            <a href="#">Ecommerce Audit</a>
                          </li>
                          <li>
                            <a href="#">Code &amp; Performance Audit</a>
                          </li>
                          <li>
                            <a href="#">UX &amp; CRO Audit</a>
                          </li>
                          <li>
                            <a href="#">Security Audit</a>
                          </li>
                          <li>
                            <a href="#">SEO Audit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hide-for-desktop line-top-right" />
          <section className="image-with-text padding-top padding-bottom">
            <div className="wrapper small">
              <div className="row-flex row-flex-aligncenter">
                <div className="col-image">
                  <picture>
                    <source
                      media="(min-width:480px)"
                      srcSet={getImage("undraw-building-website_wq4bbu.png")}
                    />
                    <source
                      srcSet={getImage(
                        "undraw-building-website-mobile_c7tx3s.png"
                      )}
                    />
                    <img
                      loading="lazy"
                      src={getImage("undraw-building-website_wq4bbu.png")}
                      alt="undraw-building-website"
                    />
                  </picture>
                </div>
                <div className="col-text text-dark">
                  <h4 className="title">
                    Are you an <a href="#">agency</a> looking to resource a
                    project?
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="hide-for-mobile line-top-right" />
          <section
            className="banner-with-text banner-thumbnail padding-top padding-bottom"
            style={{
              backgroundImage: `url(${getImage("bg-banner-white.jpg")})`,
            }}
          >
            <div className="wrapper">
              <div className="row-flex row-flex-reverse row-flex-aligncenter">
                <div className="col-image">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage("thumbnail-rowan_wbw11h.png")}
                    />
                    <source
                      srcSet={getImage("thumbnail-rowan-mobile_xyc2ey.png")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("thumbnail-rowan_wbw11h.png")}
                      alt="thumbnail-rowan"
                    />
                  </picture>
                </div>
                <div className="col-text text-left">
                  <div className="heading">
                    <h2 className="title">Hi, I’m Rowan Burgess</h2>
                  </div>
                  <div className="content">
                    <p>
                      A senior Magento developer and expert on all things
                      ecommerce, Magento, Shopify, BigCommerce, WooCommerce and
                      Shopware.
                    </p>
                    <div className="action">
                      <a href="#" className="button">
                        Let’s Talk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="logo-list margin-bottom line-bottom-left">
            <div className="wrapper small">
              <div className="row-flex row-flex-aligncenter">
                <div className="col-wide-2 col-smallest-4">
                  <img
                    src={getImage("magento-certified-3_f6kvir.svg")}
                    alt="magento-certified-3"
                  />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img
                    src={getImage("magento-certified-2_ylahlf.svg")}
                    alt="magento-certified-2_ylahlf"
                  />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img
                    src={getImage("professional_qfyl95.svg")}
                    alt="professional"
                  />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img
                    src={getImage("google-partner_hq4zb9.svg")}
                    alt="google-partner"
                  />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img
                    src={getImage("google-shopping_niejhv.svg")}
                    alt="google-shopping"
                  />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img
                    src={getImage("google-ads_fyleor.svg")}
                    alt="google-ads"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="banner-with-text twocols margin-bottom">
            <div className="wrapper">
              <div className="row-flex row-flex-reverse row-flex-aligncenter">
                <div className="col-image">
                  <div className="image">
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
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <div className="col-text text-dark">
                  <div className="heading">
                    <h2 className="title">Everything you’re looking for...</h2>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        Lightening fast <span>delivery</span>
                      </li>
                      <li>Freelancer rates</li>
                      <li>Agile and efficient</li>
                      <li>Knowledgable and responsive</li>
                      <li>Personal and professional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="banner-with-text twocols margin-bottom">
            <div className="wrapper">
              <div className="row-flex row-flex-aligncenter">
                <div className="col-image">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage("cols2-banner-2_fkutau.png")}
                    />
                    <source
                      srcSet={getImage("cols2-banner-2-mobile_as5bxw.png")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("cols2-banner-2_fkutau.png")}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="col-text text-dark">
                  <div className="heading">
                    <h2 className="title">
                      More than just a provider.<span> A partner.</span>
                    </h2>
                  </div>
                  <div className="content">
                    <p>
                      I integrate as part of your team to provide a long term
                      and dependable resource for all things ecommerce related
                      to your business
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
                      srcSet={getImage("cols2-banner-3_kdraxz.png")}
                    />
                    <source
                      srcSet={getImage("cols2-banner-3-mobile_fwpdxs.png")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("cols2-banner-3_kdraxz.png")}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="col-text text-dark">
                  <div className="heading">
                    <h2 className="title">Supporting Agencies</h2>
                  </div>
                  <div className="content">
                    <p>
                      Managing clients and developers can be difficult, your
                      client’s trust and satisfaction can suffer as a result. I
                      help resource agencies on a professional level to help
                      them deliver high quality work at a fast pace without
                      lowering quailty expected.
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
          <section className="what-we-are bg-grey line-top">
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
          <TrustedBy className="testimonials-carousel bg-blue text-center text-light padding-top padding-bottom" />

          <section className="line-bottom-left" />
          <section className="banner-with-text twocols margin-top margin-bottom padding-top hide-for-mobile">
            <div className="wrapper">
              <div className="row-flex row-flex-reverse row-flex-aligncenter">
                <div className="col-image">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage("cols2-banner-4_z4bkyu.png")}
                    />
                    <source srcSet={getImage("cols2-banner-4_z4bkyu.png")} />
                    <img
                      loading="lazy"
                      src={getImage("cols2-banner-4_z4bkyu.png")}
                      alt="cols2-banner-4"
                    />
                  </picture>
                </div>
                <div className="col-text text-dark">
                  <div className="heading">
                    <h2 className="title">A collaborative</h2>
                  </div>
                  <div className="content">
                    <p>
                      I work with a collaborative network of awesome ecommerce
                      professionals around the globe
                    </p>
                    <p>
                      Together, we deliver high end ecommerce services at
                      affordable rates
                    </p>
                    <a href="#" className="button-text">
                      explore our projects{" "}
                      <span className="icon">
                        <i className="icon-chevron-right-green" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="banner-with-text twocols margin-bottom padding-top padding-bottom hide-for-mobile">
            <div className="wrapper">
              <div className="row-flex row-flex-aligncenter">
                <div className="col-image">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={getImage("cols2-banner-5_irzm0u.png")}
                    />
                    <source srcSet={getImage("cols2-banner-5_irzm0u.png")} />
                    <img
                      loading="lazy"
                      src={getImage("cols2-banner-5_irzm0u.png")}
                      alt="cols2-banner-5"
                    />
                  </picture>
                </div>
                <div className="col-text text-dark">
                  <div className="heading">
                    <h2 className="title">More than an agency</h2>
                  </div>
                  <div className="content">
                    <p>
                      We’re more agile, affordable and more responsive than a
                      typical agency
                    </p>
                    <p>
                      We’re also more professional and organised than an
                      indepedant contractor, with a much larger capactiy for all
                      types of ecommerce requirements
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
          <section className="newsletter-section bg-green">
            <div className="wrapper">
              <div className="row-flex row-flex-aligncenter">
                <div className="col-wide-6">
                  <h2 className="title">Hire a Magento Expert</h2>
                </div>
                <div className="col-wide-6 text-center">
                  <div className="newsletter-form">
                    <Mailchimp
                      showText
                      textType="dark"
                      placeholder="Your email address"
                      btnClass="secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="banner-with-text image-over">
            <div className="heading title-reverse">
              <div className="wrapper">
                <div className="row">
                  <div className="col-heading title-reverse">
                    <h2 className="title">What we deliver...</h2>
                    <h6 className="sub">Take a closer look</h6>
                  </div>
                  <div className="col-image">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet={getImage("image-mobile_zihd7n.jpg")}
                      />
                      <source
                        srcSet={getImage("image-mobile-mobile_goybry.jpg")}
                      />
                      <img
                        loading="lazy"
                        src={getImage("image-mobile_zihd7n.jpg")}
                        alt="image-mobile"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="caption bg-grey">
              <div className="wrapper">
                <div className="row">
                  <div className="content">
                    <strong>dormeo.co.uk</strong>
                    <p>
                      Burgess Commerce provides development services for major
                      platforms and frameworks like Magento, Shopify,
                      BigCommerce, WordPress, and Laravel so that you can take
                      your business to the next level online.
                    </p>
                    <p>
                      We can build websites that scale multi-nationally and to
                      millions of dollars in online sales or unique monthly
                      visitors. We go above and beyond to create unique,
                      compelling, and valuable online experiences for our
                      customers.
                    </p>
                    <p>
                      <span>
                        Freelance rates, guaranteed delivery dates, fully
                        insured
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="newsletter-section onecols text-light text-center bg-blue line-bottom-right">
            <div className="wrapper">
              <div className="row-flex row-flex-aligncenter">
                <div className="col-wide-6">
                  <h4 className="title">Impressed? Get in touch</h4>
                  <div className="newsletter-form">
                    <Mailchimp showText placeholder="Your email address" />
                  </div>
                </div>
                <div className="col-wide-6"></div>
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
                      Burgess Commerce has extensive experience working with
                      some of the worlds most popular ecommerce platforms and
                      maintains close partnerships with industry leading
                      ecommerce services
                    </p>
                  </div>
                </div>
                <div className="col-wide-12">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={getImage("logo-partner_fton5h.png")}
                    />
                    <source
                      srcSet={getImage("logo-partner-mobile_nglis0.png")}
                    />
                    <img
                      loading="lazy"
                      src={getImage("logo-partner_fton5h.png")}
                      alt="logo-partner"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <RecentResources />
          <Faq className="margin-top padding-bottom padding-top line-bottom-left" />
          <SubscribeEmail className="newsletter-section bg-grey" />
        </main>
      </>
    </Layout>
  )
}

export default IndexPage
