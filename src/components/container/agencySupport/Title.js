import React from "react";

export default function Title({ primary }) {
  return (
    <section
      className='banner-content padding-top padding-bottom'
      style={{ backgroundColor: "#01D6A7" }}
    >
      <div className='wrapper'>
        <div className='row'>
          <div className='content text-center'>
            <h2
              dangerouslySetInnerHTML={{ __html: primary.title[0].text }}
            ></h2>
          </div>
        </div>
      </div>
    </section>
  );
}
