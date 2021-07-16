import { RichText } from "prismic-reactjs";
import React from "react";
import { FormContactContent } from "../rbcMagento/FormContact";

export default function GetInTouch({
  main_title,
  descriptions,
  linkedin,
  emai,
  phone,
}) {
  return (
    <section className='contact-section'>
      <div className='wrapper'>
        <div className='row-flex'>
          <div className='col-info'>
            <h2 className='title'>{RichText.asText(main_title)}</h2>
            <p className='text'>{RichText.asText(descriptions)}</p>
            <ul className='information'>
              <li>
                <span className='icon'>
                  <i className='icon-email-black'></i>
                </span>
                <a href={`mailto:${RichText.asText(emai)}`}>
                  {RichText.asText(emai)}
                </a>
              </li>
              <li>
                <span className='icon'>
                  <i className='icon-phone-black'></i>
                </span>
                <a href={`tel:${RichText.asText(phone)}`}>
                  {RichText.asText(phone)}
                </a>
              </li>
              <li>
                <span className='icon'>
                  <i className='icon-in-square'></i>
                </span>
                <a href={RichText.asText(linkedin)}>
                  {RichText.asText(linkedin)}
                </a>
              </li>
            </ul>
          </div>
          <div className='col-form'>
            <div className='form-contact'>
              <FormContactContent type={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
