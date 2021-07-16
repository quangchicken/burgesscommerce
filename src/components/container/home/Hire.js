import { RichText } from "prismic-reactjs";
import React from "react";
import { Mailchimp } from "../../presentational/Newsletter";

export default function Hire({ primary }) {
  const { title } = primary;

  return (
    <section className='newsletter-section bg-green'>
      <div className='wrapper'>
        <div className='row-flex row-flex-aligncenter'>
          <div className='col-wide-6'>
            <h2 className='title'>{RichText.asText(title)}</h2>
          </div>
          <div className='col-wide-6 text-center'>
            <div className='newsletter-form'>
              <Mailchimp btnClass='button secondary' />
            </div>
            <p>
              I’ll give you a call or email reply shortly to discuss your
              project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
