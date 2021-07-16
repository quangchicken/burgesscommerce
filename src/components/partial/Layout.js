import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/reset.css";
import "../../styles/style.css";
import "../../styles/common.css";
import "../../styles/customs.css";
import Subscribe from "../container/home/Subscribe";
import Seo from "./SEO";

const DataContext = React.createContext();

const Layout = ({ data, isHomepage, children, title }) => {
  return (
    <DataContext.Provider value={data}>
      <Seo title={title} />
      <Header isHomepage={isHomepage} />
      {children}
      <Subscribe />
      <Footer />
    </DataContext.Provider>
  );
};

export function useDataContext() {
  const context = useContext(DataContext);

  if (context === undefined) {
    console.error("useDataContext must be used within a DataContext.Provider");
  }

  return context;
}

export default Layout;
