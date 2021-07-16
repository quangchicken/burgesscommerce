import { RichText } from "prismic-reactjs";
import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { Mailchimp } from "../../presentational/Newsletter";

function Subscribe({ data }) {
  const { decription, link_text, title } = data;

  return (
    <section className='newsletter-section bg-grey'>
      <div className='wrapper'>
        <div className='row-flex row-flex-aligncenter'>
          <div className='col-wide-6 text-left'>
            <h4 className='title'>{RichText.asText(title)}</h4>
            <p>{RichText.asText(decription)}</p>
          </div>
          <div className='col-wide-6'>
            <div className='newsletter-form'>
              <Mailchimp
                placeholder='Your email address'
                label={RichText.asText(link_text)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SubscribeContainer = () => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const data = document.allPrismicHomeSubscribe.edges[0].node.data;
      return <Subscribe data={data} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicHomeSubscribe {
      edges {
        node {
          data {
            decription {
              text
            }
            link_text {
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

export default SubscribeContainer;
