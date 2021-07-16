import React, { useState } from "react";
import BgBanner from "../../../images/bg-banner-white.jpg";
import Picture from "../../presentational/Picture";
import { graphql, StaticQuery } from "gatsby";

function FormContactContentApi({ type, response }) {
  const [isActive, setActive] = useState("");
  const [invalid, setInvalid] = useState(false);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setName] = useState("");
  const [message, setMsg] = useState("");
  const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!regexEmail.test(email)) {
      setInvalid(true);
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          email,
          phone,
          username,
          message,
        }),
      })
        .then(() =>
          alert(
            "Thank you for getting in touch! We appreciate you contacting us."
          )
        )
        .catch((error) => console.error(error));
    }
  };

  return (
    <form
      name='contact'
      onSubmit={handleSubmit}
      data-netlify='true'
      netlify-honeypot='bot-field'
    >
      <ul>
        {type === 1 ? (
          <li className='title'>
            <div className='image'>
              <Picture
                media='(min-width: 768px)'
                srcDesktop={response.image_xl.url}
                srcMobile={response.image_m.url}
              />
            </div>
            <h6 className='hide-for-desktop'>
              Let’s talk about how I can help you
            </h6>
          </li>
        ) : (
          <li className='title'>
            <div className='image bg-blue'>
              <Picture
                media='(min-width: 1024px)'
                srcDesktop={response.image.url}
                srcMobile={response.image_m.url}
              />
            </div>
            <h2>Let’s talk about how I can help you</h2>
          </li>
        )}
        <li
          className={`input-js ${invalid ? "error" : ""} ${
            isActive === "email" ? "active" : ""
          }`}
        >
          <label htmlFor='email'>Your email address *</label>
          <input
            type='email'
            name='contact[email]'
            placeholder='Your email address *'
            id='email'
            className='required'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setInvalid(false);
            }}
            autoCorrect='off'
            autoCapitalize='off'
            onClick={() => setActive("email")}
            onBlur={() => setActive("")}
          />
          {invalid && <span>Email address is required</span>}
        </li>
        <li className={`input-js ${isActive === "phone" ? "active" : ""}`}>
          <label htmlFor='phone'>Your phone number</label>
          <input
            type='tel'
            name='contact[number]'
            placeholder='Your phone number'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoCorrect='off'
            autoCapitalize='off'
            onClick={() => setActive("phone")}
            onBlur={() => setActive("")}
          />
        </li>
        <li className={`input-js ${isActive === "name" ? "active" : ""}`}>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            name='contact[name]'
            placeholder='Your name'
            id='name'
            value={username}
            onChange={(e) => setName(e.target.value)}
            autoCorrect='off'
            autoCapitalize='off'
            onClick={() => setActive("name")}
            onBlur={() => setActive("")}
          />
        </li>
        <li className={`input-js ${isActive === "message" ? "active" : ""}`}>
          <label htmlFor='message'>Your message</label>
          <textarea
            type='textarea'
            name='contact[message]'
            placeholder='Your message'
            id='message'
            value={message}
            onChange={(e) => setMsg(e.target.value)}
            autoCorrect='off'
            autoCapitalize='off'
            onClick={() => setActive("message")}
            onBlur={() => setActive("")}
          ></textarea>
        </li>
        <li className=''>
          <button
            disabled={invalid}
            type='submit'
            name='commit'
            className='button secondary'
          >
            Let’s Talk
          </button>
          {type === 1 && (
            <p>
              I’ll give you a call or email reply shortly to discuss your
              project
            </p>
          )}
        </li>
      </ul>
    </form>
  );
}

export default function FormContact() {
  return (
    <section className='form-contact line-bottom-left'>
      <div className='wrapper full-width'>
        <div className='row'>
          <div className='col-image'>
            <div className='image'>
              <Picture
                media='(min-width: 768px)'
                srcDesktop={BgBanner}
                srcMobile={BgBanner}
              />
            </div>
          </div>
          <div className='content'>
            <FormContactContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export const FormContactContent = ({ type }) => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const response = document.allPrismicContact.nodes[0].data;
      return <FormContactContentApi type={type} response={response} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicContact {
      nodes {
        data {
          image {
            url
          }
          image_m {
            url
          }
          image_xl {
            url
          }
        }
      }
    }
  }
`;
