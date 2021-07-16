import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

function PortofilioDetail({ data, idx }) {
  if (!data) return null;
  const {
    image,
    image_m,
    inner_background_color,
    main_background_color,
    second_image,
    second_image_m,
    title,
    type,
    border_color,
  } = data;
  return (
    <section
      className={`clients ${idx % 2 === 0 ? "image-left" : "image-right"}`}
      style={{ backgroundColor: RichText.asText(main_background_color) }}
    >
      <div className='wrapper'>
        <div className='row'>
          <div className='banner'>
            <div className='image'>
              <Picture
                media='(min-width: 1024px)'
                className='first'
                srcDesktop={image.url}
                srcMobile={image_m.url}
              />
              <Picture
                media='(min-width: 1024px)'
                className='second border-0'
                srcDesktop={second_image.url}
                srcMobile={second_image_m.url}
              />
            </div>
            <div
              className='content text-light text-center'
              style={{
                backgroundColor: RichText.asText(inner_background_color),
              }}
            >
              <div className='inner'>
                <h2 className='title'>{RichText.asText(title)}</h2>
                <div className='icon'>
                  <Picture
                    media='(min-width: 1024px)'
                    className='second'
                    srcDesktop={type.url}
                    srcMobile={type.url}
                  />
                </div>
              </div>
              <span
                className='background-second'
                style={{ backgroundColor: RichText.asText(border_color) }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortofilioList({ portofilio }) {
  return (
    <div>
      {portofilio.map((vl, idx) => (
        <PortofilioDetail idx={idx} key={idx} data={vl} />
      ))}
    </div>
  );
}
