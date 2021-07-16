import { graphql, StaticQuery } from "gatsby";
import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";

function Partner({ data }) {
  const { image, image_mobile, text, title } = data;
  return (
    <section className='banner-with-text onecols text-dark text-center margin-top margin-bottom'>
      <div className='wrapper'>
        <div className='row'>
          <div className='col-wide-12'>
            <div className='heading'>
              <h2 className='title'>{RichText.asText(title)}</h2>
              <p>{RichText.asText(text)}</p>
            </div>
          </div>
          <div className='col-wide-12'>
            <Picture
              media='(min-width: 768px)'
              srcMobile={image_mobile.url}
              src
              srcDesktop={image.url}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const PartnerContainer = () => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const { data } = document.allPrismicHomeOnecol.edges[0].node;
      return <Partner data={data} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicHomeOnecol {
      edges {
        node {
          data {
            image {
              url
            }
            image_mobile {
              url
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
  }
`;

export default PartnerContainer;
