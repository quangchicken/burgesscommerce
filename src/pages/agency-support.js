import React from "react";
import FaqsContainer from "../components/container/home/Faqs";
import TrustedByContainer from "../components/container/home/TrustedBy";
import FormContact from "../components/container/rbcMagento/FormContact";
import Layout from "../components/partial/Layout";
import Newsletter from "../components/presentational/Newsletter";
import BannerThumbnail from "../components/container/rbcMagento/BannerThumbnail";
import Banner from "../components/container/rbcMagento/Banner";
import LogoList from "../components/container/rbcMagento/LogoList";
import ForClient from "../components/container/home/ForClient";
import LocatedImage from "../components/container/rbcMagento/LocatedImage";
import { graphql } from "gatsby";
import Title from "../components/container/agencySupport/Title";
import ExperienceContainer from "../components/container/home/Experience";
import Resources from "../components/container/home/Resources";
import MagentoInfo from "../components/container/rbcMagento/MagentoInfo";

const RenderSlice = ({ data }) => {
  const { slice_type } = data;
  switch (slice_type) {
    case "banner":
      return <Banner {...data} />;
    case "banner_thumbnail":
      return <BannerThumbnail {...data} />;
    case "logos":
      return <LogoList {...data} />;
    case "for_client":
      return (
        <ForClient
          {...data}
          className='banner-with-text twocols margin-bottom margin-top padding-bottom'
        />
      );
    case "located_image":
      return <LocatedImage {...data} />;
    case "title":
      return <Title {...data} />;
    case "impressed":
      return (
        <Newsletter
          title='Impressed? Get in touch'
          linkLabel="Let's Talk"
          description='I’ll give you a call or email reply shortly to discuss your
      project'
        />
      );
    case "faq":
      return <FaqsContainer />;
    case "trusted_by":
      return <TrustedByContainer position={"left"} />;
    case "magento_info":
      return <MagentoInfo {...data} />;
    case "experience":
      return <ExperienceContainer bgColor='bg-blue' />;

    default:
      return null;
  }
};
export default function AgencySupport({ data }) {
  if (!data) return null;
  const response = data.allPrismicAngencySupport.nodes[0].data.body;
  return (
    <Layout title='Agency Support'>
      <main id='main' className='site-main cms-page'>
        {response.map((vl, idx) => (
          <RenderSlice key={idx} data={vl} />
        ))}
        <Resources />
        <FormContact />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allPrismicAngencySupport {
      nodes {
        data {
          body {
            items {
              button_description {
                text
              }
              button_text {
                text
              }
              description {
                text
              }
              image {
                url
              }
              image_desktop {
                url
              }
              image_mobile {
                url
              }
              sub {
                text
              }
              text_link {
                text
              }
              title {
                text
              }
            }
            primary {
              action_description {
                text
              }
              action_name {
                text
              }
              banner_description {
                text
              }
              banner_title {
                text
              }
              description {
                text
              }
              image {
                url
              }
              image_m {
                url
              }
              sub_title {
                text
              }
              text {
                text
              }
              title {
                text
              }
              user_avatar {
                url
              }
              user_avatar_m {
                url
              }
              is_reverse
            }
            slice_type
          }
        }
      }
    }
  }
`;
