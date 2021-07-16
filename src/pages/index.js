import { graphql } from "gatsby";
import React from "react";
import Agency from "../components/container/home/Agency";
import Banner from "../components/container/home/Banner";
import Burgess from "../components/container/home/Burgess";
import Certified from "../components/container/home/Certified";
import Deliver from "../components/container/home/Deliver";
import Experience from "../components/container/home/Experience";
import Faqs from "../components/container/home/Faqs";
import ForClient from "../components/container/home/ForClient";
import Hire from "../components/container/home/Hire";
import OurService from "../components/container/home/ourService";
import Partner from "../components/container/home/Partner";
import Resources from "../components/container/home/Resources";
import TrustedBy from "../components/container/home/TrustedBy";
import Layout from "../components/partial/Layout";

const RenderSlice = ({ data }) => {
  const { primary, slice_type } = data;
  switch (slice_type) {
    case "our_services":
      return <OurService />;
    case "an_agency":
      return <Agency {...data} />;
    case "owner":
      return <Burgess {...data} />;
    case "logos":
      return <Certified {...data} />;
    case "for_client":
      let className = !primary.is_reverse
        ? "banner-with-text twocols margin-bottom"
        : "banner-with-text twocols margin-top margin-bottom padding-top hide-for-mobile";
      return <ForClient {...data} className={className} />;
    case "experience":
      return <Experience />;
    case "trusted_by":
      return <TrustedBy position={"left"} />;
    case "hire_a_magento":
      return <Hire {...data} />;
    case "deliver":
      return <Deliver {...data} />;
    case "partner":
      return <Partner />;
    case "resources":
      return <Resources />;
    case "fqa":
      return <Faqs hasLineBottom />;
    default:
      return null;
  }
};

const Homepage = ({ data }) => {
  if (!data) return null;
  const { body, logo_partnership } = data.allPrismicHomepage.nodes[0].data;
  return (
    <Layout data={data} isHomepage title='Home'>
      <Banner data={logo_partnership[0]} />
      {body.map((vl, idx) => (
        <RenderSlice data={vl} key={idx} />
      ))}
    </Layout>
  );
};
<script
  async
  defer
  src='https://static.cdn.prismic.io/prismic.js?new=true&repo=burgesscommerce'
></script>;

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      nodes {
        data {
          logo_partnership {
            banner_title {
              text
            }
            image_desktop {
              url
            }
            image_mobile {
              url
            }
            text {
              text
            }
          }
          body {
            items {
              button_description {
                text
              }
              description {
                text
              }
              image_certified {
                url
              }
              image_desktop {
                url
              }
              image_mobile {
                url
              }
              text_link {
                text
              }
              title {
                text
              }
            }
            primary {
              description {
                text
              }
              descripton_2 {
                text
              }
              image {
                url
              }
              image_desktop {
                url
              }
              image_m {
                url
              }
              image_mobile {
                url
              }
              input_description {
                text
              }
              input_title {
                text
              }
              is_reverse
              owner_name {
                text
              }
              sub {
                text
              }
              thumbnail_desktop {
                url
              }
              thumbnail_mobile {
                url
              }
              title {
                text
              }
              title_2 {
                text
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

export default Homepage;
