import { RichText } from "prismic-reactjs";
import React from "react";

export default function ContentList({ items }) {
  return (
    <ul>
      {items.map((vl, idx) => (
        <li key={idx}>{RichText.asText(vl.text)}</li>
      ))}
    </ul>
  );
}
