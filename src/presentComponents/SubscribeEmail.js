import React from "react"
import { Mailchimp } from "./Newsletter"

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
              <Mailchimp
                placeholder="Your email address"
                showText
                textType="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
