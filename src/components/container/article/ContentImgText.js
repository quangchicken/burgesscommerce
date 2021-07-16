import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

export default function ContentImgText({ primary }) {
  const { image, image_m, text, title, subtitle } = primary;
  return (
    <>
      {title && title[0] && <h5 className='h5'>{RichText.asText(title)}</h5>}
      {subtitle && subtitle[0] && (
        <h6 className='h9'>{RichText.asText(subtitle)}</h6>
      )}
      <div className='twocols'>
        <div className='row-flex'>
          <div className='col-image'>
            <Picture
              media='(min-width: 1024px)'
              srcDesktop={image?.url}
              srcMobile={image_m?.url}
            ></Picture>
          </div>
          <div
            className='col-text'
            dangerouslySetInnerHTML={{ __html: text[0].text }}
          ></div>
        </div>
      </div>
    </>
  );
}
