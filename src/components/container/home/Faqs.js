import { graphql, StaticQuery } from "gatsby";
import { RichText } from "prismic-reactjs";
import React, { useState } from "react";
import { Link } from "gatsby";

function Faqs({ hasLineBottom, data }) {
  const [active, setActive] = useState();
  const { content, text_link, text_more, title } = data;

  const handleActive = (idx) => {
    setActive(active === idx ? "" : idx);
  };

  return (
    <section
      className={`faqs margin-top padding-bottom padding-top ${
        hasLineBottom ? "line-bottom-left" : ""
      }`}
    >
      <div className='wrapper medium'>
        <div className='heading'>
          <h2 className='title text-center'>Frequently Asked Questions</h2>
        </div>
        <div className='row'>
          <div
            className='faq'
            itemScope=''
            itemType='https://schema.org/FAQPage'
          >
            {content.map((vl, idx) => (
              <dl
                key={idx}
                itemScope=''
                itemProp='mainEntity'
                itemType='https://schema.org/Question'
                id='what-is-cbd'
              >
                <dt
                  role='presentation'
                  itemProp='name'
                  className={active === idx ? "acive" : ""}
                  onKeyDown={() => {}}
                  onClick={() => handleActive(idx)}
                >
                  {RichText.asText(vl.title)}
                </dt>
                <dd
                  itemScope=''
                  itemProp='acceptedAnswer'
                  itemType='https://schema.org/Answer'
                  style={{ display: active === idx ? "block" : "none" }}
                >
                  <div itemProp='text'>
                    {vl.text.map((t, i) => (
                      <p key={i}>{t.text}</p>
                    ))}
                  </div>
                </dd>
              </dl>
            ))}
          </div>
        </div>
        <div className='row'>
          <div className='action bg-blue text-light'>
            <h6>{RichText.asText(title)}</h6>
            <Link to='/contact'>{RichText.asText(text_link)}</Link>
          </div>
          <Link to='/' className='read-more'>
            {RichText.asText(text_more)}
          </Link>
        </div>
      </div>
    </section>
  );
}

const FaqsContainer = ({ hasLineBottom }) => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const data = document.allPrismicFaqs.edges[0].node.data;
      return <Faqs data={data} hasLineBottom={hasLineBottom} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicFaqs {
      edges {
        node {
          data {
            content {
              text {
                text
                type
              }
              title {
                text
              }
            }
            text_link {
              text
            }
            text_more {
              text
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

export default FaqsContainer;
