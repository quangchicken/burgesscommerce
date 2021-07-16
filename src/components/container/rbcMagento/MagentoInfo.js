import { RichText } from "prismic-reactjs";
import React from "react";
import { useState } from "react";
import Picture from "../../presentational/Picture";

export default function MagentoInfo({ items, primary }) {
  const [active, setActive] = useState(primary.highlight_index);
  return (
    <section className='banner-with-text cms-twocols line-bottom-left'>
      <div className='wrapper'>
        <div
          className={`row-flex ${primary.is_reverse ? "row-flex-reverse" : ""}`}
        >
          <div className='col-image hide-for-mobile'>
            <Picture
              media='(min-width: 1024px)'
              srcDesktop={primary.image.url}
              srcMobile={primary.image_m.url}
            />
          </div>
          <div className='col-text text-dark'>
            <div className='title'>
              <h4>{RichText.asText(primary.title)}</h4>
              <p>{RichText.asText(primary.description)}</p>
            </div>
            <div className='image hide-for-desktop'>
              <Picture
                media='(min-width: 1024px)'
                srcDesktop={primary.image.url}
                srcMobile={primary.image_m.url}
              />
            </div>
            <div className='dropdown'>
              <ul>
                {items.map((vl, idx) => {
                  return (
                    <li
                      key={idx}
                      className={idx === active ? "active" : ""}
                      onClick={() => setActive(idx)}
                    >
                      <h6 className='title'>{RichText.asText(vl.title)}</h6>
                      <p className='text'>{RichText.asText(vl.sub)}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
