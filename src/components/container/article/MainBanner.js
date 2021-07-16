import { RichText } from "prismic-reactjs";
import React from "react";
import Picture from "../../presentational/Picture";
import BgBanner from "../../../images/bg-banner-white.jpg";
import { slugToString } from "../../../utils/common";
import { Link } from "gatsby";

export default function MainBanner({
  title,
  author,
  createdAt,
  readTime,
  listCategory,
  avatar,
  avatarM,
  banner,
  bannerM,
}) {
  return (
    <section
      className='main-banner text-dark text-left line-bottom-right'
      style={{ backgroundImage: `url(${BgBanner})` }}
    >
      <div className='wrapper'>
        <div className='row row-flex row-flex-reverse'>
          <div className='col-image hide-for-mobile'>
            <Picture
              media='(min-width: 1024px)'
              srcDesktop={banner?.url}
              srcMobile={bannerM?.url}
            ></Picture>
          </div>
          <div className='col-text'>
            <div className='content'>
              <h3 className='title'>{RichText.asText(title)}</h3>
              <div className='information'>
                <div className='thumbnail'>
                  <Picture
                    media='(min-width: 1024px)'
                    srcMobile={avatarM?.url}
                    srcDesktop={avatar?.url}
                  ></Picture>
                </div>
                <div className='text'>
                  <p>
                    <strong>Author: </strong>
                    {RichText.asText(author)}
                  </p>
                  <ul className='show-date'>
                    <li>
                      <span className='icon'>
                        <i className='icon-calendar'></i>
                      </span>
                      {new Date(createdAt).toLocaleString()}
                    </li>
                    <li>
                      <span className='icon'>
                        <i className='icon-time'></i>
                      </span>
                      {RichText.asText(readTime)}
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='show-tags'>
                {listCategory?.map((category, i) => (
                  <li key={i}>
                    <Link
                      aria-label='text'
                      to={`/resources?category=${category?.category_id.slug}`}
                    >
                      {slugToString(category?.category_id.slug)}
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
