import React from "react";
import { RichText } from "prismic-reactjs";
import { StaticQuery, graphql } from "gatsby";
import ImgTripadvisor from "../../images/tripadvisor.svg";

const Footer = () => {
  const renderInfoDetail = (info, idx) => {
    const { icon, info_detail, href, info_type } = info;
    return (
      <li
        className={RichText.asText(info_type)}
        key={RichText.asText(info_type) + idx}
      >
        <a href={RichText.asText(href)}>
          <img src={icon.url} className='icon-sm' alt='' />
          {RichText.asText(info_detail)}
        </a>
      </li>
    );
  };

  return (
    <footer id='footer' className='site-footer'>
      <StaticQuery
        query={`${FooterQuery}`}
        render={(data) => {
          const footerLeft = data.allPrismicFooterleft.edges[0].node.data;
          const footerRight = data.allPrismicFooterRight.edges[0].node.data;
          const { group_info, text, title } = footerLeft;

          const { copyright, group, group_img } = footerRight;

          return (
            <div className='wrapper'>
              <div className='row'>
                <div className='col-wide-6 col-left'>
                  <div className='inner'>
                    <h2
                      className='title'
                      dangerouslySetInnerHTML={{ __html: title[0].text }}
                    />
                    <ul>
                      {group_info.map((info, idx) =>
                        renderInfoDetail(info, idx)
                      )}
                      <li className='tripadvisor'>
                        <div className='reviews-tripadvisor'>
                          <img src={ImgTripadvisor} alt='' />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: RichText.asText(text),
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-wide-6 col-right'>
                  <div className='inner'>
                    <h2 className='title'>
                      {RichText.asText(footerRight.title)}
                    </h2>
                    <div className='menu-footer'>
                      {group.map((vl, idx) => (
                        <div key={idx} className='links'>
                          <h6 className='title'>
                            {RichText.asText(vl.title_1)}
                          </h6>
                          <ul>
                            {vl.text.map((t, i) => (
                              <li key={i}>
                                <a href='/'>{t.text}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className='logos'>
                      <ul>
                        {group_img.map((vl, idx) => (
                          <li key={idx}>
                            <img src={vl.img.url} alt='' />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className='copyright'>{RichText.asText(copyright)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    </footer>
  );
};

const FooterQuery = graphql`
  query {
    allPrismicFooterleft {
      edges {
        node {
          data {
            group_info {
              icon {
                url
              }
              info_detail {
                text
              }
              info_type {
                text
              }
              href {
                text
              }
            }
            text {
              text
            }

            title {
              text
            }
          }
        }
      }
    }
    allPrismicFooterRight {
      edges {
        node {
          data {
            copyright {
              text
            }
            group {
              text {
                text
              }
              title_1 {
                text
              }
            }
            group_img {
              img {
                url
              }
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`;

export default Footer;
