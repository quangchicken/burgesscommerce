import React from "react";

export default function Map() {
  return (
    <section className='map padding-bottom-60'>
      <iframe
        title='map'
        loading='lazy'
        id='map'
        src='https://snazzymaps.com/embed/128637'
        width='100%'
        height='716px'
        style={{ border: "none" }}
      ></iframe>
    </section>
  );
}
