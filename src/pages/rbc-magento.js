import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import Experience from "../components/container/home/Experience";
import Faqs from "../components/container/home/Faqs";
import Partner from "../components/container/home/Partner";
import Banner from "../components/container/rbcMagento/Banner";
import Layout from "../components/partial/Layout";
import BannerThumbnail from "../components/container/rbcMagento/BannerThumbnail";
import LogoList from "../components/container/rbcMagento/LogoList";
import Newsletter from "../components/presentational/Newsletter";
import ForClient from "../components/container/home/ForClient";
import KeepSimple from "../components/container/rbcMagento/KeepSimple";
import LocatedImage from "../components/container/rbcMagento/LocatedImage";
import ProduceRealResults from "../components/container/rbcMagento/ProduceRealResults";
import FormContact from "../components/container/rbcMagento/FormContact";
import MagentoInfo from "../components/container/rbcMagento/MagentoInfo";

const RenderSlice = ({ data }) => {
  const { primary, slice_type } = data;
  switch (slice_type) {
    case "banner":
      return <Banner {...data} />;
    case "banner_thumbnail":
      return <BannerThumbnail {...data} />;
    case "partners_logo":
      return <LogoList {...data} />;
    case "get_in_touch":
      return (
        <Newsletter
          title={RichText.asText(primary.title)}
          linkLabel={RichText.asText(primary.description)}
          description={RichText.asText(primary.input_btn_label)}
        />
      );
    case "magento_info":
      return <MagentoInfo {...data} />;

    case "for_client":
      return (
        <ForClient
          {...data}
          className='banner-with-text twocols margin-bottom margin-top padding-bottom'
        />
      );
    case "keep_simple":
      return <KeepSimple {...data} />;
    case "owner_experience":
      return <Experience bgColor='bg-blue' />;
    case "located_image":
      return <LocatedImage {...data} />;

    case "partners":
      return <Partner />;
    case "produce_real_results":
      return <ProduceRealResults {...data} />;
    default:
      return null;
  }
};

const RbcDesktopMagento = ({ data }) => {
  if (!data) return null;
  const rbcData = data.allPrismicRbc.nodes[0].data.body;
  return (
    <Layout title='Rbc Magento' data={data}>
      <main id='main' className='site-main cms-page'>
        {rbcData.map((vl, idx) => (
          <RenderSlice data={vl} key={idx} />
        ))}
        <Newsletter
          content='right'
          title='Sound good? Get in touch'
          linkLabel="Let's Talk"
          description='I’ll give you a call or email reply shortly to discuss your
          project'
        />
        <section className='line-bottom-left hide-for-desktop'></section>
        <Faqs />
        <FormContact />
      </main>
    </Layout>
  );
};
<script
  async
  defer
  src='https://static.cdn.prismic.io/prismic.js?new=true&repo=burgesscommerce'
></script>;

export const query = graphql`
  query RbcDesktopMagento {
    allPrismicRbc {
      nodes {
        data {
          body {
            slice_type
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
              description_1 {
                text
              }
              description_2 {
                text
              }
              description_3 {
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
              link {
                link_type
              }
              sub {
                text
              }
              sub_title {
                text
              }
              text_link {
                text
              }
              title {
                text
              }
              title_1 {
                text
              }
              title_2 {
                text
              }
              title_3 {
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
              image_1 {
                url
              }
              image_2 {
                url
              }
              image_m {
                url
              }
              image_m_1 {
                url
              }
              image_m_2 {
                url
              }
              input_btn_label {
                text
              }
              input_description {
                text
              }
              input_title {
                text
              }
              sub_title {
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
              highlight_index
            }
          }
        }
      }
    }
  }
`;

export default RbcDesktopMagento;
