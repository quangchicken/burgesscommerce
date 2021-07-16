import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const Mailchimp = ({
  label = "Let’s Talk",
  btnClass = "",
  placeholder = "Phone or email address",
}) => {
  const [email, setEmail] = useState("");
  return (
    <MailchimpSubscribe
      url={process.env.GATSBY_ACCESS_MAILCHIMP}
      render={({ subscribe, status, message }) => (
        <>
          <form className=''>
            <div className='actions'>
              <input
                onChange={(t) => {
                  setEmail(t.target.value);
                }}
                type='email'
                name='contact[email]'
                placeholder={placeholder}
                id='newsletter-email'
                value={email}
                autoCorrect='off'
                autoCapitalize='off'
                className={`required ${status}`}
              />
              <button
                disabled={!email}
                type='button'
                name='commit'
                className={`button ${btnClass}`}
                onClick={() => {
                  subscribe({
                    EMAIL: email,
                    NAME: email,
                  });
                }}
              >
                {label}
              </button>
            </div>
            {status && (
              <span dangerouslySetInnerHTML={{ __html: message }}></span>
            )}
            <p className='text-dark hide'>
              I’ll give you a call or email reply shortly to discuss your
              project
            </p>
          </form>
        </>
      )}
    />
  );
};
export default function Newsletter({ title, linkLabel, description, content }) {
  return (
    <section className='newsletter-section onecols text-light text-center bg-blue line-bottom-right'>
      <div className='wrapper'>
        <div className='row-flex row-flex-aligncenter'>
          {content === "right" && <div className='col-wide-6'></div>}
          <div className='col-wide-6'>
            <h4 className='title'>{title}</h4>
            <div className='newsletter-form'>
              <Mailchimp label="Let's Talk" />
            </div>
            <p class="text-light" dangerouslySetInnerHTML={{__html:description }}/>
          </div>

          {content === "left" && <div className='col-wide-6'></div>}
        </div>
      </div>
    </section>
  );
}
