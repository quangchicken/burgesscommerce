import { graphql, StaticQuery, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";
import BgBanner from "../../../images/bg-banner-white.jpg";

function MainBanner({ data, categories }) {
  const { description, image, image_m, title } = data;
  return (
    <section
      className='main-banner text-dark text-center'
      style={{ backgroundImage: `url(${BgBanner})` }}
    >
      <div className='wrapper'>
        <div className='row row-flex'>
          <div className='col-text'>
            <div className='content'>
              <div className='heading'>
                <div className='image'>
                  <Picture
                    media='(min-width: 1024px)'
                    srcDesktop={image.url}
                    srcMobile={image_m.url}
                  />
                </div>
                <h3 className='title'> {RichText.asText(title)}</h3>
              </div>
              <div className='text'>
                <p>{RichText.asText(description)}</p>
              </div>
              <ul className='show-tags'>
                {categories.map((vl, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/resources?category=${RichText.asText(
                        vl.data.category_name
                      )
                        .toLocaleLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      {RichText.asText(vl.data.category_name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MainBannerContainer = () => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const data = document.allPrismicBlogsMainBanner.edges[0].node.data;
      const categories = document.allPrismicCategories.nodes;
      return <MainBanner data={data} categories={categories} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicBlogsMainBanner {
      edges {
        node {
          data {
            description {
              text
            }
            image {
              url
            }
            image_m {
              url
            }
            title {
              text
            }
          }
        }
      }
    }
    allPrismicCategories {
      nodes {
        data {
          category_name {
            type
            text
          }
        }
      }
    }
  }
`;

export default MainBannerContainer;
