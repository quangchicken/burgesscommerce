import { RichText } from "prismic-reactjs";
import React from "react";
import ReactPlayer from "react-player";

export default function ContentVideo({ items, primary }) {
  return (
    <div className='thumbnail-video'>
      <ReactPlayer width='100%' url={RichText.asText(primary.link_youtube)} />
    </div>
  );
}
