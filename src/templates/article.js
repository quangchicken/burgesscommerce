import React from "react";
import Agenda from "../components/container/article/Agenda";
import CommentCustomer from "../components/container/article/CommentCustomer";
import ContentCode from "../components/container/article/ContentCode";
import ContentImage from "../components/container/article/ContentImage";
import ContentImgText from "../components/container/article/ContentImgText";
import ContentList from "../components/container/article/ContentList";
import ContentParagraph from "../components/container/article/ContentParagraph";
import ContentQuote from "../components/container/article/ContentQuote";
import ContentTable from "../components/container/article/ContentTable";
import ContentTwoImg from "../components/container/article/ContentTwoImg";
import ContentVideo from "../components/container/article/ContentVideo";
import MainBanner from "../components/container/article/MainBanner";
import Resources from "../components/container/article/Resources";
import SocialMedia from "../components/container/article/socialMedia";
import FormContact from "../components/container/rbcMagento/FormContact";
import Layout from "../components/partial/Layout";

const RenderSlice = ({ value }) => {
  switch (value.slice_type) {
    case "paragraph":
      return <ContentParagraph {...value} />;
    case "image":
      return <ContentImage {...value} />;
    case "image_and_text":
      return <ContentImgText {...value} />;
    case "table":
      return <ContentTable {...value} />;
    case "quote":
      return <ContentQuote {...value} />;
    case "list":
      return <ContentList {...value} />;
    case "two_image":
      return <ContentTwoImg {...value} />;
    case "video":
      return <ContentVideo {...value} />;
    case "code":
      return <ContentCode {...value} />;
    default:
      return null;
  }
};

export default function BlogPost({ pageContext }) {
  const {
    author,
    avatar,
    avatar_m,
    banner,
    banner_m,
    created_at,
    main_title,
    read_time,
    table_of_content,
    list_category,
    body,
  } = pageContext.post;
  const socialMedia = body.find((vl) => vl.slice_type === "social_media");
  return (
    <Layout>
      <main id='main' className='site-main article cms-content'>
        <MainBanner
          title={main_title}
          author={author}
          avatar={avatar}
          avatarM={avatar_m}
          banner={banner}
          bannerM={banner_m}
          createdAt={created_at}
          listCategory={list_category}
          readTime={read_time}
        />
        <Agenda tableOfContent={table_of_content} />
        <section className='article-content'>
          <SocialMedia {...socialMedia} />
          <div className='wrapper'>
            {body.map((vl, idx) => (
              <RenderSlice key={idx} value={vl} />
            ))}
          </div>
        </section>
        <Resources />
        <CommentCustomer
          title={main_title}
          id={pageContext.id}
          url={pageContext.url}
        />
        <FormContact />
      </main>
    </Layout>
  );
}
