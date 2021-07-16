import { graphql } from "gatsby";
import React from "react";
import GetInTouch from "../components/container/contact/GetInTouch";
import Map from "../components/container/contact/Map";
import ResourcesContainer from "../components/container/home/Resources";
import TrustedByContainer from "../components/container/home/TrustedBy";
import Banner from "../components/container/rbcMagento/Banner";
import Layout from "../components/partial/Layout";

export default function Contact({ data }) {
  if (!data) return null;
  const response = data.allPrismicContact.edges[0].node.data;
  return (
    <Layout title='Contact'>
      <main id='main' className='site-main cms-page contact'>
        <Banner primary={{ ...response }} />
        <GetInTouch {...response} />
        <Map />
        <TrustedByContainer position={"right"} />
        <ResourcesContainer />
      </main>
    </Layout>
  );
}
export const query = graphql`
  query {
    allPrismicContact {
      edges {
        node {
          data {
            banner_description {
              text
            }
            banner_title {
              text
            }
            descriptions {
              text
            }
            emai {
              text
            }
            linkedin {
              text
            }
            main_title {
              text
            }
            phone {
              text
            }
          }
        }
      }
    }
  }
`;
