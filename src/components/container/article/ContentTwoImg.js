import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

export default function ContentTwoImg({ items }) {
  return (
    <div className='twocols'>
      <div className='row-flex'>
        {items.map((vl, idx) => (
          <div key={idx} className='col-image'>
            {vl.title[0] && <h6>{RichText.asText(vl.title)}</h6>}
            <Picture
              media='(min-width: 1024px)'
              srcDesktop={vl.image.url}
              srcMobile={vl.image_m.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
