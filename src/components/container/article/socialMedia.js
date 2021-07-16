import React from "react";

export default function SocialMedia({ items }) {
  return (
    <div className='social-sticky'>
      <div className='wrapper'>
        <ul>
          <li style={{ backgroundColor: "#1173B0" }}>
            <a href='#'>
              <i className='icon-linkedin-white'></i>
            </a>
          </li>
          <li style={{ backgroundColor: "#55ACEE" }}>
            <a href='#'>
              <i className='icon-twitter-white'></i>
            </a>
          </li>
          <li style={{ backgroundColor: "#3B5998" }}>
            <a href='#'>
              <i className='icon-f-white'></i>
            </a>
          </li>
          <li style={{ backgroundColor: "#C8232C" }}>
            <a href='#'>
              <i className='icon-pinterest-white'></i>
            </a>
          </li>
          <li style={{ backgroundColor: "#25D366" }}>
            <a href='#'>
              <i className='icon-whatsapp-white'></i>
            </a>
          </li>
          <li style={{ backgroundColor: "#999999" }}>
            <a href='#'>
              <i className='icon-email-white'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
