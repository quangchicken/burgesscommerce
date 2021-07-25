import React, { useEffect } from "react"
import $ from "jquery"

export default function TrustedBy({ className }) {
  useEffect(() => {
    if ($(".testimonials-carousel")) {
      $(".testimonials-carousel .owl-carousel").owlCarousel({
        items: 3,
        loop: false,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
            margin: 14,
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
    <section className={className}>
      <div className="wrapper">
        <div className="heading">
          <h4 className="title">
            Trusted by store owners and agencies worldwide
          </h4>
          <img src="images/stars.svg" alt="" />
          <p>
            <strong>33</strong> Total reviews <strong>4.9</strong> Average
            rating
          </p>
        </div>
        <div className="row-flex owl-carousel">
          <div className="item">
            <div className="image">
              <img src="images/rating-star.svg" alt="" />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
            </div>
            <ul className="reviewer">
              <li>Client</li>
              <li>Trustpilot</li>
            </ul>
          </div>
          <div className="item">
            <div className="image">
              <img src="images/rating-star.svg" alt="" />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
            </div>
            <ul className="reviewer">
              <li>Client</li>
              <li>Trustpilot</li>
            </ul>
          </div>
          <div className="item">
            <div className="image">
              <img src="images/rating-star.svg" alt="" />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
            </div>
            <ul className="reviewer">
              <li>Client</li>
              <li>Trustpilot</li>
            </ul>
          </div>
          <div className="item">
            <div className="image">
              <img src="images/rating-star.svg" alt="" />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
            </div>
            <ul className="reviewer">
              <li>Client</li>
              <li>Trustpilot</li>
            </ul>
          </div>
          <div className="item">
            <div className="image">
              <img src="images/rating-star.svg" alt="" />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet elit sagittis turpis gravida, sed imperdiet enim
                ullamcorper. Ut vel cursus odio, eget scelerisque erat.
              </p>
            </div>
            <ul className="reviewer">
              <li>Client</li>
              <li>Trustpilot</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <a href="#" className="read-more">
            <span className="icon">
              <i className="icon-director" />
            </span>
            Read My Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
