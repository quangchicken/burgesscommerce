import { RichText } from "prismic-reactjs";
import React from "react";

export default function ContentQuote({ primary }) {
  return !RichText.asText(primary.text) ? null : (
    <p className='quote'>{RichText.asText(primary.text)}</p>
  );
}
