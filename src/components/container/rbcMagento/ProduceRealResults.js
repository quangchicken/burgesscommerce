import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Picture from "../../presentational/Picture";

const Item = ({ title, description, initShow = false }) => {
  const [isOnMobile, setOnMobile] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(initShow);
    if (typeof window !== "undefined") setOnMobile(window.innerWidth < 768);
  }, []);

  return (
    <li onClick={() => setIsShow(!isShow)} className={isShow ? "active" : ""}>
      <h6 className='c-pointer' className='title'>
        {RichText.asText(title)}
      </h6>
      {(!isOnMobile || isShow) && (
        <div
          className='text'
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      )}
    </li>
  );
};

export default function ProduceRealResults({ primary, items }) {
  return (
    <>
      <section className='timeline'>
        <div className='row-first'>
          <div className='wrapper'>
            <div className='row-flex'>
              <div className='col-text'>
                <div className='heading'>
                  <p className='sub'>{RichText.asText(primary.description)}</p>
                  <h2>{RichText.asText(primary.title)}</h2>
                </div>
              </div>
              <div className='col-image'>
                <div className='image'>
                  <Picture
                    media='(min-width: 768px)'
                    srcMobile={primary.image_m_1.url}
                    srcDesktop={primary.image_1.url}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row-second bg-grey'>
          <div className='wrapper'>
            <div className='row '>
              {items.map((vl, idx) => (
                <div
                  key={idx}
                  className={`col-wide-6 col-${
                    idx % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className='content'>
                    <ul>
                      <Item
                        title={vl.title_1}
                        description={vl.description_1[0].text}
                        initShow={true && idx % 2 === 0}
                      />
                      <Item
                        title={vl.title_2}
                        description={vl.description_2[0].text}
                      />
                      <Item
                        title={vl.title_3}
                        description={vl.description_3[0].text}
                      />
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='row-third'>
          <div className='wrapper'>
            <div className='row'>
              <div className='col-wide-6 col-image'>
                <div className='image'>
                  <Picture
                    media='(min-width: 768px)'
                    srcMobile={primary.image_m_2.url}
                    srcDesktop={primary.image_2.url}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
