import React from "react";
import { navigate } from "gatsby";

export default function OldPage({ pageContext }) {
  React.useEffect(() => {
    if (
      window.location.pathname.replace(/\//g, "") ===
      pageContext.oldUrl.replace(/\//g, "")
    ) {
      navigate(pageContext.newUrl || "/");
    }
  }, [pageContext.oldUrl, pageContext.newUrl]);
  return <div>redirect...</div>;
}
