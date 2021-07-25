import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Faq from "../presentComponents/Faq"
import TrustedBy from "../presentComponents/TrustedBy"
import SubscribeEmail from "../presentComponents/SubscribeEmail"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const clImages = data.allCloudinaryMedia.edges
  console.log({ clImages: clImages.map(vl => vl.node) })
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
                        <form className="">
                          <div className="actions">
                            <input
                              type="email"
                              name="contact[email]"
                              placeholder="Phone or email address"
                              id="newsletter-email"
                              className="required"
                              defaultValue=""
                              autoCorrect="off"
                              autoCapitalize="off"
                            />
                            <button
                              type="submit"
                              name="commit"
                              className="button"
                            >
                              Subscribe
                            </button>
                          </div>
                          <span className="hide">
                            Email address is required
                          </span>
                          <p className="text-light">
                            <span className="hide">Thank you! </span>I’ll give
                            you a call or email reply shortly to discuss your
                            project
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-image">
                    <div className="image">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet="https://res.cloudinary.com/burgess-commerce/image/upload/v1627185963/assets/full-portrait.png"
                        />
                        <source srcSet="https://res.cloudinary.com/burgess-commerce/image/upload/v1627185963/assets/full-portrait-mobile.png" />
                        <img
                          loading="lazy"
                          src="https://res.cloudinary.com/burgess-commerce/image/upload/v1627185963/assets/full-portrait.png"
                          alt=""
                        />
                      </picture>
                    </div>
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
                          srcSet="images/magento.svg"
                        />
                        <source srcSet="images/magento-m.svg" />
                        <img loading="lazy" src="images/magento.svg" alt="" />
                      </picture>
                    </div>
                    <div className="col-wide-4 col-small-3">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet="images/shopify.svg"
                        />
                        <source srcSet="images/shopify-m.svg" />
                        <img loading="lazy" src="images/shopify.svg" alt="" />
                      </picture>
                    </div>
                    <div className="col-wide-4 col-small-3">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet="images/bigcommerce.svg"
                        />
                        <source srcSet="images/bigcommerce-m.svg" />
                        <img
                          loading="lazy"
                          src="images/bigcommerce.svg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div className="col-small-3 hide-for-desktop">
                      <picture>
                        <source
                          media="(min-width: 10240px)"
                          srcSet="images/wo-commerce.svg"
                        />
                        <source srcSet="images/wo-commerce.svg" />
                        <img
                          loading="lazy"
                          src="images/wo-commerce.svg"
                          alt=""
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
                      srcSet="images/undraw-building-website.png"
                    />
                    <source srcSet="images/undraw-building-website-mobile.png" />
                    <img
                      loading="lazy"
                      src="images/undraw-building-website.png"
                      alt=""
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
            style={{ backgroundImage: "url(images/bg-banner-white.jpg)" }}
          >
            <div className="wrapper">
              <div className="row-flex row-flex-reverse row-flex-aligncenter">
                <div className="col-image">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet="images/thumbnail-rowan.png"
                    />
                    <source srcSet="images/thumbnail-rowan-mobile.png" />
                    <img
                      loading="lazy"
                      src="images/thumbnail-rowan.png"
                      alt=""
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
                  <img src="images/magento-certified-3.svg" alt="" />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img src="images/magento-certified-2.svg" alt="" />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img src="images/professional.svg" alt="" />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img src="images/google-partner.svg" alt="" />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img src="images/google-shopping.svg" alt="" />
                </div>
                <div className="col-wide-2 col-smallest-4">
                  <img src="images/google-ads.svg" alt="" />
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
                        srcSet="images/cols2-banner-1.png"
                      />
                      <source srcSet="images/cols2-banner-1-mobile.png" />
                      <img
                        loading="lazy"
                        src="images/cols2-banner-1.png"
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
                      srcSet="images/cols2-banner-2.png"
                    />
                    <source srcSet="images/cols2-banner-2-mobile.png" />
                    <img
                      loading="lazy"
                      src="images/cols2-banner-2.png"
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
                      srcSet="images/cols2-banner-3.png"
                    />
                    <source srcSet="images/cols2-banner-3-mobile.png" />
                    <img
                      loading="lazy"
                      src="images/cols2-banner-3.png"
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
                      srcSet="images/cols2-banner-4.png"
                    />
                    <source srcSet="images/cols2-banner-4.png" />
                    <img
                      loading="lazy"
                      src="images/cols2-banner-4.png"
                      alt=""
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
                      srcSet="images/cols2-banner-5.png"
                    />
                    <source srcSet="images/cols2-banner-5.png" />
                    <img
                      loading="lazy"
                      src="images/cols2-banner-5.png"
                      alt=""
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
                        <button
                          type="submit"
                          name="commit"
                          className="button secondary"
                        >
                          Subscribe
                        </button>
                      </div>
                      <span className="hide">Email address is required</span>
                      <p className="text-dark">
                        <span className="hide">Thank you! </span>I’ll give you a
                        call or email reply shortly to discuss your project
                      </p>
                    </form>
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
                        srcSet="images/image-mobile.jpg"
                      />
                      <source srcSet="images/image-mobile-mobile.jpg" />
                      <img
                        loading="lazy"
                        src="images/image-mobile.jpg"
                        alt=""
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
                        <span className="hide">Thank you! </span>I’ll give you a
                        call or email reply shortly to discuss your project
                      </p>
                    </form>
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
                      srcSet="images/logo-partner.jpg"
                    />
                    <source srcSet="images/logo-partner-mobile.png" />
                    <img loading="lazy" src="images/logo-partner.jpg" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section
            className="blog-features line-bottom-left"
            style={{ backgroundImage: "url(images/bg-banner-white.jpg)" }}
          >
            <div className="wrapper">
              <div className="heading">
                <h3 className="title text-center text-dark">
                  Recent Resources
                </h3>
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
                        <img
                          loading="lazy"
                          src="images/blog-post-1.jpg"
                          alt=""
                        />
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
                        <img
                          loading="lazy"
                          src="images/blog-post-2.jpg"
                          alt=""
                        />
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
                        <img
                          loading="lazy"
                          src="images/blog-post-3.jpg"
                          alt=""
                        />
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
          <Faq className="margin-top padding-bottom padding-top line-bottom-left" />
          <SubscribeEmail className="newsletter-section bg-grey" />
        </main>
      </>
    </Layout>
  )
}

export default IndexPage
