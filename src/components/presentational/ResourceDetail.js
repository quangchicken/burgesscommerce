import { RichText } from "prismic-reactjs";
import { Link } from "gatsby";
import React from "react";
import Picture from "./Picture";
import { slugToString } from "../../utils/common";

export default function ResourceDetail({
  img,
  imgMobile,
  title,
  createdDate,
  time,
  listCategory,
  to,
}) {
  return (
    <div className='inner' style={{ margin: "20px" }}>
      <Link to={to ? "/resources/" + to[0] : "/"}>
        <Picture
          media='(min-width: 1024px)'
          srcDesktop={img}
          srcMobile={imgMobile}
          className='article-img'
        />
      </Link>
      <div className='content'>
        <h6 className='title'>
          <Link to={to ? "/resources/" + to[0] : "/"} className='txt-ellipsis'>
            {RichText.asText(title)}
          </Link>
        </h6>
        <ul className='show-tags'>
          {listCategory?.map((category, i) => (
            <li key={i}>
              <Link to={`/resources?category=${category?.category_id.slug}`}>
                {slugToString(category?.category_id.slug)}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='show-date'>
          <li>
            <span className='icon'>
              <i className='icon-calendar'></i>
            </span>
            {new Date(createdDate).toLocaleString()}
          </li>
          <li>
            <span className='icon'>
              <i className='icon-time'></i>
            </span>
            {RichText.asText(time)}
          </li>
        </ul>
      </div>
    </div>
  );
}
