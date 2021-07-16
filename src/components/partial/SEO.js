import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";

const Seo = ({ title }) => (
  <StaticQuery
    query={`${SeoQuery}`}
    render={(data) => {
      const { meta_title, metagroup } = data.allPrismicSeo.nodes[0].data;
      const metaTitle = RichText.asText(meta_title) || title;

      return (
        <Helmet>
          <title>{metaTitle}</title>
          {metagroup.map((vl, idx) => (
            <meta
              key={idx}
              name={RichText.asText(vl.meta_name)}
              content={RichText.asText(vl.meta_content)}
            />
          ))}
        </Helmet>
      );
    }}
  />
);

const SeoQuery = graphql`
  query {
    allPrismicSeo {
      nodes {
        data {
          meta_title {
            text
          }
          metagroup {
            meta_content {
              text
            }
            meta_name {
              text
            }
          }
        }
      }
    }
  }
`;

export default Seo;
