import React from "react"
import { getImage } from "../lib/common"

export default function FormContact({
  className = "form-contact line-bottom-left",
}) {
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
            <form>
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
