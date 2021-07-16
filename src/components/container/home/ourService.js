import React from "react";

import { RichText } from "prismic-reactjs";
import { graphql, Link, StaticQuery } from "gatsby";
import Picture from "../../presentational/Picture";

function OurService({ data }) {
  const { logo_partnership, group_service } = data;

  return (
    <section className='our-services'>
      <div className='wrapper'>
        <div className='row'>
          <div className='partnership'>
            <div className='row'>
              {logo_partnership.map((vl, idx) => (
                <div
                  key={idx}
                  className={`col-wide-4 col-small-3${
                    vl.hide_on_desktop ? " hide-for-desktop" : ""
                  }`}
                >
                  <Picture
                    media='(min-width: 960px)'
                    srcMobile={vl.image_mobile.url}
                    srcDesktop={vl.image_desktop.url}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='services'>
            <div className='row'>
              {group_service.map((vl, idx) => (
                <div key={idx} className='col-wide-4'>
                  <div className='content'>
                    <h3 className='title'>
                      <span className='icon'>
                        <img
                          src={vl.image_service.url}
                          alt={RichText.asText(vl.title_service)}
                        />
                      </span>
                      {RichText.asText(vl.title_service)}
                    </h3>
                    <p>{RichText.asText(vl.text_service)}</p>
                    <ul>
                      <li>
                        <Link to={vl.type_1[1].text}>{vl.type_1[0].text}</Link>
                      </li>
                      <li>
                        <Link to={vl.type_2[1].text}>{vl.type_2[0].text}</Link>
                      </li>
                      <li>
                        <Link to={vl.type_3[1].text}>{vl.type_3[0].text}</Link>
                      </li>
                      <li>
                        <Link to={vl.type_4[1].text}>{vl.type_4[0].text}</Link>
                      </li>
                      <li>
                        <Link to={vl.type_5[1].text}>{vl.type_5[0].text}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OurServiceContainer = () => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const data = document.allPrismicHomeOurServices.edges[0].node.data;
      return <OurService data={data} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicHomeOurServices {
      edges {
        node {
          data {
            group_service {
              text_service {
                text
              }
              image_service {
                url
              }
              title_service {
                text
              }
              type_1 {
                text
              }
              type_2 {
                text
              }
              type_3 {
                text
              }
              type_4 {
                text
              }
              type_5 {
                text
              }
            }
            logo_partnership {
              alt {
                text
              }
              image_desktop {
                url
              }
              image_mobile {
                url
              }
              hide_on_desktop
            }
          }
        }
      }
    }
  }
`;

export default OurServiceContainer;
