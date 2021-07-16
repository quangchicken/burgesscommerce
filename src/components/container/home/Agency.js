import React from "react";

import Picture from "../../presentational/Picture";

export default function Agency({ primary }) {
  const { image, image_m, title } = primary;
  return (
    <>
      <section className='hide-for-desktop line-top-right'></section>

      <section className='image-with-text padding-top padding-bottom'>
        <div className='wrapper small'>
          <div className='row-flex row-flex-aligncenter'>
            <div className='col-image'>
              <Picture
                media='(min-width:480px)'
                srcDesktop={image.url}
                srcMobile={image_m.url}
              />
            </div>
            <div className='col-text text-dark'>
              <h4
                className='title'
                dangerouslySetInnerHTML={{ __html: title[0].text }}
              ></h4>
            </div>
          </div>
        </div>
      </section>

      <section className='hide-for-mobile line-top-right'></section>
    </>
  );
}
