import React from "react";
import Layout from "../components/partial/Layout";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";

export default function ArticleStatic2({ data }) {
  if (!data) return null;
  const {content_html} = data.allPrismicArticleStatic.nodes[0].data;

  const content= RichText.asText(content_html)
  return (
    <Layout>
      <main id='main' className='site-main article cms-content' dangerouslySetInnerHTML={{__html: content}}>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allPrismicArticleStatic {
      nodes {
        data {
          content_html {
            text
          }
        }
      }
    }
  }
`;
