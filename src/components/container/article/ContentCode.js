import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

hljs.configure({
  languages: ["php", "javascript", "json", "bash", "scss"],
});
export default function ContentCode({ primary }) {
  let convertText = "";
  primary.code.forEach((vl) => {
    convertText += vl.text + " \n ";
  });
  const html = hljs.highlightAuto(convertText).value;
  return (
    <div className='hljs'>
      <pre>
        <code
          className='code'
          dangerouslySetInnerHTML={{ __html: html }}
        ></code>
      </pre>
    </div>
  );
}
