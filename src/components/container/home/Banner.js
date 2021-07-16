import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import bgBanner from "../../../images/bg-banner.jpg";

import ImgTripadvisor from "../../../images/tripadvisor.svg";
import Picture from "../../presentational/Picture";
import { Mailchimp } from "../../presentational/Newsletter";

export default function Banner({ data }) {
  const { banner_title, text, image_mobile, image_desktop } = data;
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        email,
      }),
    })
      .then(() => {
        alert(
          "Thank you for getting in touch! We appreciate you contacting us."
        );
        setEmail("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section
      className='main-banner home text-light text-center'
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <div className='screen'>
        <div className='wrapper'>
          <div className='row row-flex row-flex-direction'>
            <div className='col-text'>
              <div className='content'>
                <h3
                  dangerouslySetInnerHTML={{ __html: banner_title[0].text }}
                ></h3>
                <div className='newsletter-form'>
                  <form className='' onSubmit={handleSubmit}>
                    <div className='actions'>
                      <input
                        type='email'
                        name='contact[email]'
                        placeholder='Phone or email address'
                        id='newsletter-email'
                        className='required'
                        autoCorrect='off'
                        autoCapitalize='off'
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setIsSubmit(false);
                        }}
                      />
                      <button
                        disabled={!regexEmail.test(email)}
                        type='submit'
                        name='commit'
                        className='button'
                        onClick={handleSubmit}
                      >
                        Subscribe
                      </button>
                    </div>
                    <span className={isSubmit && !email ? "" : "hide"}>
                      Email address is required
                    </span>
                    <p className='text-light'>
                      <span>Thank you! </span>
                      {RichText.asText(text)}
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-image'>
              <div className='image'>
                <Picture
                  media='(min-width: 1024px)'
                  srcDesktop={image_desktop.url}
                  srcMobile={image_mobile.url}
                />
              </div>
              <div className='reviews-tripadvisor'>
                <img src={ImgTripadvisor} alt='' />
                <p>
                  <strong>4.9</strong> Average rating, <strong>33</strong> Total
                  reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
