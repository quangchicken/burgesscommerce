import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import $ from "jquery"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage, encode, REGEX_EMAIL } from "../lib/common"
import SubscribeEmail from "../presentComponents/SubscribeEmail"

const TrustedBy = Loadable(() => import("../presentComponents/TrustedBy"))
const RecentResources = Loadable(() =>
  import("../presentComponents/RecentResources")
)

export default function Contact() {
  useEffect(() => {
    $(".input-js").each(function (e) {
      $(this)
        .find("input,textarea")
        .on("focus", function () {
          $(this).parent().addClass("active")
        })
      $(this)
        .find("input,textarea")
        .on("blur", function () {
          if ($(this).val() !== "") {
            $(this).parent().addClass("active")
          } else {
            $(this).parent().removeClass("active")
          }
        })
    })
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() =>
        alert(
          "Thank you for getting in touch! We appreciate you contacting us."
        )
      )
      .catch(error => console.error(error))
  }
  return (
    <Layout>
      <Seo title="Contact" />
      <main id="main" className="site-main cms-page contact">
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul>
                      <li className="title">
                        <div className="image">
                          <picture>
                            <source
                              media="(min-width: 768px)"
                              srcSet={getImage(
                                "thumbnail-contact-section_c0hvqs.png"
                              )}
                            />
                            <source
                              srcSet={getImage(
                                "thumbnail-contact-section-mobile_fhr9zs.png"
                              )}
                            />
                            <img
                              loading="lazy"
                              src={getImage(
                                "thumbnail-contact-section_c0hvqs.png"
                              )}
                              alt="thumbnail"
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
                          id="email"
                          {...register("email", {
                            required: "Email address is required",
                            pattern: {
                              value: REGEX_EMAIL,
                              message: "Incorrect format email",
                            },
                          })}
                          type="email"
                          placeholder="Your email address *"
                          className="required"
                          autoCorrect="off"
                          autoCapitalize="off"
                        />
                        <small style={{ color: "#ff0000" }}>
                          {errors.email?.message}
                        </small>
                      </li>
                      <li className="input-js">
                        <label>Your phone number</label>
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone")}
                          placeholder="Your phone number"
                          autoCorrect="off"
                          autoCapitalize="off"
                        />
                      </li>
                      <li className="input-js">
                        <label>Your name</label>
                        <input
                          type="text"
                          {...register("username")}
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
                          {...register("message")}
                          placeholder="Your message"
                          id="message"
                          autoCorrect="off"
                          autoCapitalize="off"
                          defaultValue=""
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
        <RecentResources className="blog-features line-bottom-left" />
        <SubscribeEmail className="newsletter-section bg-grey" />
      </main>
    </Layout>
  )
}
