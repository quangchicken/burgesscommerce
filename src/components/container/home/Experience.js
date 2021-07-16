import { graphql, StaticQuery } from "gatsby";
import { RichText } from "prismic-reactjs";
import React from "react";

function Experience({ bgColor, data }) {
  const { group } = data;

  return (
    <section className={`what-we-are ${bgColor || `bg-grey`} line-top`}>
      <div className='wrapper'>
        <div className='row-flex'>
          {group.map((vl, idx) => (
            <div key={idx} className='col-wide-4'>
              <span className='title h1'>{RichText.asText(vl.title)}</span>
              <span className='sub h5'>{RichText.asText(vl.sub)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceContainer = ({ bgColor }) => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const { data } = document.allPrismicWhatWeAre.edges[0].node;
      return <Experience data={data} bgColor={bgColor} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicWhatWeAre {
      edges {
        node {
          data {
            group {
              title {
                text
              }
              sub {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default ExperienceContainer;
