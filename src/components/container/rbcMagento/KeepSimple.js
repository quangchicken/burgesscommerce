import { RichText } from "prismic-reactjs";
import React from "react";
import ImgBackground from "../../../images/bg-banner-white.jpg";

export default function KeepSimple({ items, primary }) {
  return (
    <section
      className='text-cols padding-top padding-bottom hide-for-mobile'
      style={{
        backgroundImage: `url("${ImgBackground}")`,
      }}
    >
      <div className='wrapper'>
        <div className='row'>
          <div className='heading'>
            <h2>{RichText.asText(primary.title)}</h2>
          </div>
          <div className='content'>
            {items.map((vl, idx) => (
              <div key={idx} className='text-col'>
                <h5 className='title'> {RichText.asText(vl.sub_title)}</h5>
                <p>{RichText.asText(vl.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
