import React from "react";
import Slider from "react-slick";
import { RichText } from "prismic-reactjs";
import iconStars from "../../../images/stars.svg";
import iconRatingStars from "../../../images/rating-star.svg";
import { graphql, StaticQuery } from "gatsby";

function TrustedBy({ data, position }) {
  const {
    rating_description,
    body,
    title,
    // total_rating,
    my_review,
  } = data;

  const settings = {
    centerMode: true,
    dots: true,
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
    <>
      <section className='testimonials-carousel bg-blue text-center text-light padding-top padding-bottom'>
        <div className=''>
          <div className='heading'>
            <h4 className='title'>{RichText.asText(title)}</h4>
            <img src={iconStars} alt='' />
            <p
              dangerouslySetInnerHTML={{ __html: rating_description[0].text }}
            ></p>
          </div>
          <Slider {...settings}>
            {body[0].items.map((vl, idx) => (
              <div key={idx}>
                <div className='item' style={{ margin: "0 15px" }}>
                  <div className='image'>
                    <img src={iconRatingStars} alt='' />
                  </div>
                  <div className='content'>
                    {vl.review.map((r, i) => (
                      <div key={i}>
                        <p>{r.text}</p>
                        <br />
                      </div>
                    ))}
                  </div>
                  <ul className='reviewer'>
                    <li>{vl.client[0].text}</li>
                    <li>{vl.client[1].text}</li>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
          <div className='row-flex owl-carousel owl-loaded owl-drag'></div>
          <div className='row'>
            <a href='/' className='read-more'>
              <span className='icon'>
                <i className='icon-director'></i>
              </span>
              {RichText.asText(my_review)}
            </a>
          </div>
        </div>
      </section>
      {position === "left" && <section className='line-bottom-left' />}
      {position === "right" && (
        <section className='line-bottom-right'></section>
      )}
    </>
  );
}

const TrustedByContainer = ({ position }) => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const data = document.allPrismicHomeTrustedBy.edges[0].node.data;
      return <TrustedBy data={data} position={position} />;
    }}
  />
);

const Query = graphql`
  query {
    allPrismicHomeTrustedBy {
      edges {
        node {
          data {
            body {
              items {
                rating
                review {
                  text
                }
                client {
                  text
                }
              }
              slice_type
            }
            total_rating
            title {
              text
            }
            rating_description {
              text
            }
            my_review {
              text
            }
          }
        }
      }
    }
  }
`;

export default TrustedByContainer;
