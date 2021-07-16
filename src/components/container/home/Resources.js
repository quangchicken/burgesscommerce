import { graphql, Link, StaticQuery } from "gatsby";
import { RichText } from "prismic-reactjs";
import React from "react";
import Slider from "react-slick";
import ResourceDetail from "../../presentational/ResourceDetail";
import ImgBackground from "../../../images/bg-banner-white.jpg";

function Resources({ data, articles }) {
  const { btn_text, title } = data;

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      className='blog-features line-bottom-left'
      style={{ backgroundImage: `url(${ImgBackground})` }}
    >
      <div className='wrapper'>
        <div className='heading'>
          <h3 className='title text-center text-dark'>
            {RichText.asText(title)}
          </h3>
        </div>
        <Slider {...settings}>
          {articles.map((vl, idx) => {
            const {
              banner,
              banner_m,
              created_at,
              main_title,
              read_time,
              list_category,
            } = vl.node.data;
            const { slugs } = vl.node;
            return (
              <div key={idx}>
                <ResourceDetail
                  key={idx}
                  img={banner.url}
                  imgMobile={banner_m.url}
                  title={main_title}
                  createdDate={created_at}
                  time={read_time}
                  listCategory={list_category}
                  to={slugs || "/"}
                />
              </div>
            );
          })}
        </Slider>
        <div className='row'>
          <Link to='/resources' className='button tertiary read-more'>
            {RichText.asText(btn_text)}
          </Link>
        </div>
      </div>
    </section>
  );
}

const ResourcesContainer = () => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const data = document.allPrismicHomeResources.edges[0].node.data;
      const articles = document.allPrismicArticle.edges;
      return <Resources data={data} articles={articles} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicHomeResources {
      edges {
        node {
          data {
            btn_text {
              text
            }
            title {
              text
            }
          }
        }
      }
    }
    allPrismicArticle(limit: 5) {
      edges {
        node {
          slugs
          id
          data {
            author {
              text
            }
            avatar {
              url
            }
            avatar_m {
              url
            }
            banner {
              url
            }
            banner_m {
              url
            }
            created_at(locale: "")
            main_title {
              text
            }
            read_time {
              text
            }
            list_category {
              category_id {
                slug
                id
              }
            }
          }
        }
      }
    }
  }
`;

export default ResourcesContainer;
