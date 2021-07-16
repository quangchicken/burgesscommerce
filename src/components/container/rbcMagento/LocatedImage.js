import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

export default function LocatedImage({ primary }) {
  if (!primary) return <div>LocatedImage</div>;
  return (
    <section className='banner-one line-bottom-right'>
      <div className='wrapper full-width'>
        <div className='row'>
          <div className='image'>
            <Picture
              media='(min-width: 960px)'
              srcDesktop={primary.image.url}
              srcMobile={primary.image_m.url}
            />
          </div>
          <div className='caption located-image text-center'>
            <div className='wrapper'>
              <div className='content'>
                <h2
                  className='title'
                  dangerouslySetInnerHTML={{ __html: primary.title[0].text }}
                />

                <p className='sub'>
                  <span>{RichText.asText(primary.sub_title)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
