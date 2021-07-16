import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import ResourceDetail from "../../presentational/ResourceDetail";

function Resources() {
  const limit = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const document = useStaticQuery(queryResource);
  const { nodes } = document.allPrismicArticle;
  const search = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search.substring(1) : ""
  );
  const categorySearch = search.get("category");

  const filter = (vl) => {
    const { list_category } = vl.data;
    const listCategory = list_category.map((c) => c.category_id.slug);
    return !categorySearch || listCategory.includes(categorySearch);
  };
  const pageCount = (nodes.filter(filter).length + limit - 1) / limit;

  const renderPage = () => {
    let pages = [];

    switch (true) {
      case pageCount > 5 && pageCount - currentPage > 5:
        for (let index = currentPage; index <= currentPage + 5; index++) {
          pages.push(index);
        }
        break;
      case pageCount > 5 && pageCount - currentPage < 5:
        let start = currentPage - (pageCount - currentPage);
        for (let index = start; index <= pageCount; index++) {
          pages.push(index);
        }
        break;
      default:
        for (let index = 1; index <= pageCount; index++) {
          pages.push(index);
        }
        break;
    }
    return pages.map((vl, idx) => (
      <li key={idx} className={currentPage === vl ? "active" : ""}>
        <a onClick={() => setCurrentPage(vl)}>{vl}</a>
      </li>
    ));
  };

  return (
    <section className='blog-features'>
      <div className='wrapper'>
        <div className='row-flex'>
          {nodes
            .filter(filter)
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((vl, idx) => {
              const {
                banner,
                banner_m,
                created_at,
                main_title,
                read_time,
                list_category,
              } = vl.data;
              return (
                <div className='col-wide-4' key={idx}>
                  <ResourceDetail
                    img={banner.url}
                    imgMobile={banner_m.url}
                    title={main_title}
                    createdDate={created_at}
                    time={read_time}
                    listCategory={list_category}
                    to={vl?.slugs || "/"}
                  />
                </div>
              );
            })}
        </div>
        <div className='row pagination'>
          <ul className='bg-grey'>
            <li>
              <a
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                Prev
              </a>
            </li>
            {renderPage()}
            {pageCount > 5 && (
              <>
                <li>...</li>
                <li>
                  <a onClick={() => setCurrentPage(pageCount)}>{pageCount}</a>
                </li>
              </>
            )}
            <li>
              <a
                onClick={() =>
                  currentPage < pageCount - 1 && setCurrentPage(currentPage + 1)
                }
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const queryResource = graphql`
  query {
    allPrismicArticle {
      nodes {
        data {
          author {
            text
          }
          avatar {
            url
          }
          avatar_m {
            url
          }
          banner {
            url
          }
          banner_m {
            url
          }
          created_at
          main_title {
            text
          }
          read_time {
            text
          }
          list_category {
            category_id {
              slug
              id
            }
          }
        }
        slugs
      }
    }
  }
`;
export default Resources;
