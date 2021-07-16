import React from "react";

export default function LogoList({ items }) {
  return (
    <section className='logo-list margin-bottom line-bottom-right'>
      <div className='wrapper'>
        <div className='row-flex row-flex-aligncenter'>
          {items?.map((vl, idx) => (
            <div key={idx} className='item'>
              <img src={vl.image?.url} alt={vl.image?.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
