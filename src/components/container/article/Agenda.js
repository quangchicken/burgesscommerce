import { RichText } from "prismic-reactjs";
import React from "react";

export default function Agenda({ tableOfContent }) {
  return (
    <section className='table-of-content'>
      <div className='wrapper'>
        <div className='row'>
          <div className='content'>
            <h6 className='title'>Table of contents</h6>
            <div className='text'>
              <ul>
                {tableOfContent?.map((vl, idx) => (
                  <li key={idx}>
                    <a href='/'>{RichText.asText(vl.text)}</a>
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
