import { RichText } from "prismic-reactjs";
import React from "react";
import Newsletter from "../../presentational/Newsletter";
import Picture from "../../presentational/Picture";

export default function Deliver({ primary }) {
  const {
    description,
    descripton_2,
    image_desktop,
    image_mobile,
    input_description,
    input_link,
    input_title,
    sub,
    title,
    title_2,
  } = primary;

  return (
    <>
      <section className='banner-with-text image-over'>
        <div className='heading title-reverse'>
          <div className='wrapper'>
            <div className='row'>
              <div className='col-heading title-reverse'>
                <h2 className='title'>{RichText.asText(title)}</h2>
                <h6 className='sub'>{RichText.asText(sub)}</h6>
              </div>
              <div className='col-image'>
                <Picture
                  media='(min-width: 1024px)'
                  srcDesktop={image_desktop.url}
                  src
                  srcMobile={image_mobile.url}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='caption bg-grey'>
          <div className='wrapper'>
            <div className='row'>
              <div className='content'>
                <strong>{RichText.asText(title_2)}</strong>
                {description.map((vl, i) => (
                  <p key={i}>{vl.text}</p>
                ))}
                <p>
                  <span>{RichText.asText(descripton_2)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter
        title={RichText.asText(input_title)}
        linkLabel={RichText.asText(input_link)}
        description={RichText.asText(input_description)}
        content='left'
      />
    </>
  );
}
