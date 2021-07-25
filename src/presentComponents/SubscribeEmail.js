import React from "react"

export default function SubscribeEmail({ className }) {
  return (
    <section className={className}>
      <div className="wrapper">
        <div className="row-flex row-flex-aligncenter">
          <div className="col-wide-6 text-left">
            <h4 className="title">Subscribe for the latest updates</h4>
            <p>
              free ecommerce tips, tricks and hacks non-salesy, never spammy
            </p>
          </div>
          <div className="col-wide-6">
            <div className="newsletter-form">
              <form className="error">
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
                <span className="error hide">Email address is required</span>
                <p>
                  <span className="hide">Thank you! </span>I’ll give you a call
                  or email reply shortly to discuss your project
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
