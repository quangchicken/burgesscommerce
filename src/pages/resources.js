import React from "react";
import Layout from "../components/partial/Layout";
import TrustedBy from "../components/container/home/TrustedBy";
import FormContact from "../components/container/rbcMagento/FormContact";
import MainBanner from "../components/container/resources/MainBanner";
import Resources from "../components/container/resources/Resources";

export default function ResourcesContainer() {
  return (
    <Layout title='Resources'>
      <main id='main' className='site-main blogs'>
        <MainBanner />
        <Resources />
        <TrustedBy />
        <FormContact />
      </main>
    </Layout>
  );
}
