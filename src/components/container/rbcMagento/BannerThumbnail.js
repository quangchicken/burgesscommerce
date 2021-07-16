import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

export default function BannerThumbnail({ primary }) {
  if (!primary) return <div>BannerThumbnail</div>;
  return (
    <section className='banner-with-text banner-thumbnail-rbc padding-top bg-grey'>
      <div className='wrapper small'>
        <div className='row-flex row-flex-aligncenter'>
          <div className='col-image col-wide-3'>
            <Picture
              media='(min-width: 1024px)'
              srcMobile={primary.user_avatar_m?.url}
              srcDesktop={primary.user_avatar?.url}
            />
          </div>
          <div className='col-text text-left col-wide-9'>
            <div className='heading'>
              <h2 className='title'></h2>
            </div>
            <div className='content'>
              <p>{RichText.asText(primary.description)}</p>
              <div className='action'>
                <h6>{RichText.asText(primary.action_description)}</h6>
                <a href='/' className='button'>
                  {RichText.asText(primary.action_name)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
