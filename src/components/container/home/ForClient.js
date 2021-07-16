import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

function BannerWithText({ vl, idx, className, reverse }) {
  const renderContent = (description, textLink) => {
    switch (description.length) {
      case 1:
        return (
          <>
            <p>{RichText.asText(description)}</p>
            {textLink && (
              <a href='button-text'>
                {RichText.asText(textLink)}{" "}
                <span className='icon'>
                  <i className='icon-chevron-right-green'></i>
                </span>
              </a>
            )}
          </>
        );

      case 2:
        return (
          <>
            {description.map((vl, idx) => (
              <p key={idx}>{vl.text}</p>
            ))}
            <a href='button-text'>
              {RichText.asText(textLink)}{" "}
              <span className='icon'>
                <i className='icon-chevron-right-green'></i>
              </span>
            </a>
          </>
        );

      default:
        return (
          <ul>
            {description.map((des, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: des.text }}></li>
            ))}
          </ul>
        );
    }
  };
  return (
    <section key={idx} className={className}>
      <div className='wrapper'>
        <div
          className={`row-flex  ${
            reverse ? "row-flex-reverse" : ""
          } row-flex-aligncenter`}
        >
          <div className='col-image'>
            <div className='image'>
              <Picture
                media='(min-width: 1024px)'
                srcDesktop={vl.image_desktop.url}
                srcMobile={vl.image_mobile.url}
              />
            </div>
          </div>
          <div className='col-text text-dark'>
            <div className='heading'>
              <h2
                className='title'
                dangerouslySetInnerHTML={{ __html: vl.title[0].text }}
              ></h2>
            </div>
            <div className='content'>
              {renderContent(vl.description, vl.text_link)}
            </div>
            {!!RichText.asText(vl.button_description) && (
              <div className='action'>
                <p>{RichText.asText(vl.button_description)}</p>
                <a href='/' className='button tertiary'>
                  Let's Talk
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ForClient({ primary, items, className }) {
  if (!items) return <div>ForClient</div>;
  return (
    <>
      {items.map((vl, idx) => (
        <BannerWithText
          key={idx}
          vl={vl}
          idx={idx}
          className={className}
          reverse={(primary.is_reverse ? idx + 1 : idx) % 2 === 0}
        />
      ))}
    </>
  );
}
