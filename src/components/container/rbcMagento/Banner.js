import { RichText } from "prismic-reactjs";
import React from "react";
import ImgBanner from "../../../images/bg-banner.jpg";

import ImgTripadvisor from "../../../images/tripadvisor.svg";

export default function Banner({ primary, hasHeroProfile }) {
  if (!primary) return <div>Banner</div>;
  return (
    <section
      className='main-banner rbc-page text-light text-left'
      style={{
        backgroundImage: `url("${ImgBanner}")`,
      }}
    >
      <div className='wrapper small'>
        <div className='row row-flex'>
          <div className='col-text col-wide-6'>
            <div className='content'>
              <h3 className='title'>{RichText.asText(primary.banner_title)}</h3>
              <p>{RichText.asText(primary.banner_description)}</p>
            </div>
          </div>
          <div className='col-image col-wide-6 text-center'>
            <div className='reviews-tripadvisor'>
              <img src={ImgTripadvisor} alt='' />
              <p>
                <strong>4.9</strong> Average rating, <strong>33</strong> Total
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      {hasHeroProfile && (
        <div className='hero-profile'>
          <div className='wrapper wide'>
            <img alt='Rowan Burgess Ecommerce Expert' src={primary.image.url} />
          </div>
        </div>
      )}
    </section>
  );
}
