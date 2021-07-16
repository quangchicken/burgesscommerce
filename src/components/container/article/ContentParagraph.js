import { RichText } from "prismic-reactjs";
import React from "react";

export default function ContentParagraph({ primary }) {
  const { text, title, subtitle } = primary;
  return (
    <>
      {title[0] && RichText.asText(title) && (
        <h5 className='h5'>{RichText.asText(title)}</h5>
      )}
      {subtitle && subtitle[0] && RichText.asText(subtitle) && (
        <h6 className='h9'>{RichText.asText(subtitle)}</h6>
      )}
      {text[0].text && <p dangerouslySetInnerHTML={{ __html: text[0].text }} />}
    </>
  );
}
