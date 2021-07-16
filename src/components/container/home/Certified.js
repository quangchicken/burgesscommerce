import { RichText } from "prismic-reactjs";
import React from "react";

export default function Certified({ items }) {
  return (
    <section className='logo-list margin-bottom line-bottom-left'>
      <div className='wrapper small'>
        <div className='row-flex row-flex-aligncenter'>
          {items.map((vl, idx) => (
            <div
              key={RichText.asText(vl.alt) + idx}
              className='col-wide-2 col-smallest-4'
            >
              <img src={vl.image_certified.url} alt={RichText.asText(vl.alt)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
