import { RichText } from "prismic-reactjs";
import React from "react";

export default function ContentTable({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th aria-label='title'></th>
          <th>{RichText.asText(items[0].col2)}</th>
          <th>{RichText.asText(items[0].col3)}</th>
          <th>{RichText.asText(items[0].col4)}</th>
          <th>{RichText.asText(items[0].col5)}</th>
        </tr>
      </thead>
      <tbody>
        {items.slice(1).map((vl, idx) => (
          <tr key={idx}>
            <th>{RichText.asText(vl.col1)}</th>
            <th>{RichText.asText(vl.col2)}</th>
            <th>{RichText.asText(vl.col3)}</th>
            <th>{RichText.asText(vl.col4)}</th>
            <th>{RichText.asText(vl.col5)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
