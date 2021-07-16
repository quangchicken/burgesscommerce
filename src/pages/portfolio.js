import React from "react";
import Layout from "../components/partial/Layout";
import Banner from "../components/container/rbcMagento/Banner";
import FormContact from "../components/container/rbcMagento/FormContact";
import PortofilioList from "../components/container/portofilio/PortofilioList";
import { graphql } from "gatsby";

export default function Portofilio({ data }) {
  const response = data.allPrismicPortofilio.nodes[0].data;

  return (
    <Layout title='Portfolio'>
      <main id='main' className='site-main cms-page'>
        <Banner primary={{ ...response }} hasHeroProfile />
        <PortofilioList portofilio={response.portofilio} />
        <FormContact />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allPrismicPortofilio {
      nodes {
        data {
          banner_description {
            text
          }
          banner_title {
            text
          }
          image {
            url
          }
          image_m {
            url
          }
          portofilio {
            image {
              url
            }
            image_m {
              url
            }
            inner_background_color {
              type
              text
            }
            main_background_color {
              type
              text
            }
            second_image {
              url
            }
            second_image_m {
              url
            }
            title {
              text
            }
            type {
              url
            }
            border_color {
              text
            }
          }
        }
      }
    }
  }
`;
