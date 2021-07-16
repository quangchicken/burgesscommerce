import { RichText } from "prismic-reactjs";
import React from "react";

export default function ContentImage({ primary }) {
  const { image, text, has_shadow } = primary;
  const content = RichText.asText(text);
  if (has_shadow) {
    return (
      <div className='image full box-shadow'>
        <div className='box-shadow'>
          <img src={image?.url} alt='' />
        </div>
        {content && <p className='photo-caption'>{content}</p>}
      </div>
    );
  }
  return (
    <div className='image full'>
      <img src={image?.url} alt='' />
    </div>
  );
}
