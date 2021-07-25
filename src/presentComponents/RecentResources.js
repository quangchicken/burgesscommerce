import React, { useEffect } from "react"
import $ from "jquery"
import { getImage } from "../lib/common"

export default function RecentResources({
  mainTitle = "Recent Resources",
  className = "blog-features line-bottom-left",
}) {
  useEffect(() => {
    if ($(".blog-features")) {
      $(".blog-features .owl-carousel").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
          0: {
            loop: true,
            items: 1,
            margin: 10,
          },
          768: {
            items: 2,
            margin: 20,
          },
          1024: {
            items: 3,
            margin: 44,
          },
        },
      })
    }
  }, [])
  return (
    <section
      className={className}
      style={{
        backgroundImage: `url(${getImage("bg-banner-white_zkei7f.jpg")})`,
      }}
    >
      <div className="wrapper">
        <div className="heading">
          <h3 className="title text-center text-dark">{mainTitle}</h3>
        </div>
        <div className="row-flex owl-carousel">
          <div className="col-wide-4">
            <div className="inner">
              <a href="#">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={getImage("blog-post-1_vtefug.jpg")}
                  />
                  <source srcSet={getImage("blog-post-1_vtefug.jpg")} />
                  <img
                    loading="lazy"
                    src={getImage("blog-post-1_vtefug.jpg")}
                    alt="blog"
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
                    srcSet={getImage("blog-post-2_k0svpt.jpg")}
                  />
                  <source srcSet={getImage("blog-post-2_k0svpt.jpg")} />
                  <img
                    loading="lazy"
                    src={getImage("blog-post-2_k0svpt.jpg")}
                    alt="blog"
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
                    srcSet={getImage("blog-post-3_t6eada.jpg")}
                  />
                  <source srcSet={getImage("blog-post-3_t6eada.jpg")} />
                  <img
                    loading="lazy"
                    src={getImage("blog-post-3_t6eada.jpg")}
                    alt="blog"
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
  )
}
