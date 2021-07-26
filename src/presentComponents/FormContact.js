import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import $ from "jquery"

import { getImage, encode, REGEX_EMAIL } from "../lib/common"

export default function FormContact({
  className = "form-contact line-bottom-left",
}) {
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
    <section className={className}>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul>
                <li className="title">
                  <div className="image">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet={getImage("thumbnail-form-contact_z8wmea.png")}
                      />
                      <source
                        srcSet={getImage(
                          "thumbnail-form-contact-mobile_dk4rma.png"
                        )}
                      />
                      <img
                        loading="lazy"
                        src={getImage("thumbnail-form-contact_z8wmea.png")}
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
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: REGEX_EMAIL,
                        message: "Incorrect format email",
                      },
                    })}
                    placeholder="Your email address *"
                    id="email"
                    className="required"
                    defaultValue=""
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
                    {...register("phone")}
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
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
