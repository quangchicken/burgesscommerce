import React from "react";

import BgBanner from "../../../images/bg-banner-white.jpg";
import { RichText } from "prismic-reactjs";
import Picture from "../../presentational/Picture";

export default function Burgess({ primary }) {
  const {
    description,
    owner_name,
    thumbnail_desktop,
    thumbnail_mobile,
  } = primary;

  return (
    <section
      className='banner-with-text banner-thumbnail padding-top padding-bottom'
      style={{ backgroundImage: `url(${BgBanner})` }}
    >
      <div className='wrapper'>
        <div className='row-flex row-flex-reverse row-flex-aligncenter'>
          <div className='col-image'>
            <Picture
              media='(min-width: 1024px)'
              srcDesktop={thumbnail_desktop.url}
              srcMobile={thumbnail_mobile.url}
            />
          </div>
          <div className='col-text text-left'>
            <div className='heading'>
              <h2 className='title'>{RichText.asText(owner_name)}</h2>
            </div>
            <div className='content'>
              <p>{RichText.asText(description)}</p>
              <div className='action'>
                <a href='/' className='button'>
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
