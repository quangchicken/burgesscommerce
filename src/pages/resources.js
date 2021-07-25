import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage } from "../lib/common"
import SubscribeEmail from "../presentComponents/SubscribeEmail"
import TrustedBy from "../presentComponents/TrustedBy"

export default function Resource() {
  return (
    <Layout>
      <Seo title="Resource" />
      <main id="main" className="site-main blogs">
        <section
          className="main-banner text-dark text-center"
          style={{ backgroundImage: "url(images/bg-banner-white.jpg)" }}
        >
          <div className="wrapper">
            <div className="row row-flex">
              <div className="col-text">
                <div className="content">
                  <div className="heading">
                    <div className="image">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet="images/thumbnail-blogs.png"
                        />
                        <source srcSet="images/thumbnail-blogs-mobile.png" />
                        <img
                          loading="lazy"
                          src="images/thumbnail-blogs.png"
                          alt
                        />
                      </picture>
                    </div>
                    <h3 className="title">Resources</h3>
                  </div>
                  <div className="text">
                    <p>
                      Morbi rhoncus, mi eu feugiat tempor, risus lacus accumsan
                      dolor, vitae bibendum turpis neque at arcu. Fusce
                      convallis risus dui, laoreet pharetra sem sagittis ac.
                      Curabitur mollis lacus turpis.
                    </p>
                  </div>
                  <ul className="show-tags">
                    <li>
                      <a href="#">magento</a>
                    </li>
                    <li>
                      <a href="#">ux</a>
                    </li>
                    <li>
                      <a href="#">shopify</a>
                    </li>
                    <li>
                      <a href="#">ecommerce</a>
                    </li>
                    <li>
                      <a href="#">CRO</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-features">
          <div className="wrapper">
            <div className="row-flex">
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
            <div className="row pagination">
              <ul className="bg-grey">
                <li>
                  <a href="#">Prev</a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li
                  style={{
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ...
                </li>
                <li>
                  <a href="#">24</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <TrustedBy className="testimonials-carousel bg-blue text-center text-light padding-top padding-bottom" />

        <section className="form-contact line-bottom-left">
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
