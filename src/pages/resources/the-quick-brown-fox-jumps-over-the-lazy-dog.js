import React, { useEffect } from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getImage } from "../../lib/common"
import FormContact from "../../presentComponents/FormContact"
import SubscribeEmail from "../../presentComponents/SubscribeEmail"
import ReactPlayer from "react-player"
import RecentResources from "../../presentComponents/RecentResources"
import CommentCustomer from "../../presentComponents/CommentCustomer"

import hljs from "highlight.js/lib/core"
import php from "highlight.js/lib/languages/php"

export default function Article1() {
  useEffect(() => {
    hljs.registerLanguage("php", php)
    hljs.highlightAll()
  }, [])

  return (
    <Layout>
      <Seo title="Resource" />
      <main id="main" className="site-main article cms-content">
        <section
          className="main-banner text-dark text-left line-bottom-right"
          style={{
            backgroundImage: `url(${getImage("bg-banner-white.jpg")})`,
          }}
        >
          <div className="wrapper">
            <div className="row row-flex row-flex-reverse">
              <div className="col-image hide-for-mobile">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={getImage("blog-post-3.jpg")}
                  />
                  <source srcSet={getImage("blog-post-3.jpg")} />
                  <img
                    loading="lazy"
                    src={getImage("blog-post-3.jpg")}
                    alt="blog"
                  />
                </picture>
              </div>
              <div className="col-text">
                <div className="content">
                  <h3 className="title">
                    The quick brown fox jumps over the lazy dog
                  </h3>
                  <div className="information">
                    <div className="thumbnail">
                      <picture>
                        <source
                          media="(min-width: 1024px)"
                          srcSet={getImage("thumbnail-blogs.png")}
                        />
                        <source
                          srcSet={getImage("thumbnail-blogs-mobile.png")}
                        />
                        <img
                          loading="lazy"
                          src={getImage("thumbnail-blogs.png")}
                          alt="blog"
                        />
                      </picture>
                    </div>
                    <div className="text">
                      <p>
                        <strong>Author:</strong>Rowan Burgess
                      </p>
                      <ul className="show-date">
                        <li>
                          <span className="icon">
                            <i className="icon-calendar" />
                          </span>
                          13 Feb 2021
                        </li>
                        <li>
                          <span className="icon">
                            <i className="icon-time" />
                          </span>
                          20 minutes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="show-tags">
                    <li>
                      <a href="#">Magento</a>
                    </li>
                    <li>
                      <a href="#">Ux</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="table-of-content">
          <div className="wrapper">
            <div className="row">
              <div className="content">
                <h6 className="title">Table of contents</h6>
                <div className="text">
                  <ul>
                    <li>
                      <a href="#">Praesent porta sem magna</a>
                    </li>
                    <li>
                      <a href="#">Vitae suscipit augue porttitor eget</a>
                    </li>
                    <li>
                      <a href="#">Nam quis aliquam ex</a>
                    </li>
                    <li>
                      <a href="#">Nunc lobortis sem sapien</a>
                    </li>
                    <li>
                      <a href="#">In bibendum turpis accumsan nec</a>
                    </li>
                    <li>
                      <a href="#">
                        Mauris sollicitudin arcu vitae mollis finibus
                      </a>
                    </li>
                    <li>
                      <a href="#">Fusce tincidunt nisi a lacus aliquam</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="article-content">
          <div className="social-sticky">
            <div className="wrapper">
              <ul>
                <li style={{ backgroundColor: "#1173B0" }}>
                  <a href="#">
                    <i className="icon-linkedin-white" />
                  </a>
                </li>
                <li style={{ backgroundColor: "#55ACEE" }}>
                  <a href="#">
                    <i className="icon-twitter-white" />
                  </a>
                </li>
                <li style={{ backgroundColor: "#3B5998" }}>
                  <a href="#">
                    <i className="icon-f-white" />
                  </a>
                </li>
                <li style={{ backgroundColor: "#C8232C" }}>
                  <a href="#">
                    <i className="icon-pinterest-white" />
                  </a>
                </li>
                <li style={{ backgroundColor: "#25D366" }}>
                  <a href="#">
                    <i className="icon-whatsapp-white" />
                  </a>
                </li>
                <li style={{ backgroundColor: "#999999" }}>
                  <a href="#">
                    <i className="icon-email-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wrapper">
            <div className="row">
              <h5 className="h5">Curabitur mollis lacus turpis</h5>
              <p>
                Quisque a fermentum sem. Ut quis nisi massa.{" "}
                <a href="#">Cras mattis</a> arcu sit amet nibh sodales, ut
                placerat ipsum faucibus. Pellentesque pretium mauris venenatis
                risus facilisis, eu placerat tellus bibendum. Morbi pellentesque
                ipsum eget libero auctor, id feugiat nisi consequat. Vestibulum
                aliquam non purus vitae finibus.
              </p>
              <h6>Quisque a fermentum sem</h6>
              <p>
                Morbi rhoncus, mi eu feugiat tempor, risus lacus accumsan dolor,
                vitae bibendum turpis neque at arcu. Fusce convallis risus dui,{" "}
                <a href="#">laoreet pharetra</a> sem sagittis ac. Curabitur
                mollis lacus turpis, elementum euismod nunc blandit ut.
              </p>
              <div className="image full box-shadow">
                <div className="box-shadow">
                  <img src={getImage("cms-image.jpg")} alt="blog" />
                </div>
                <p className="photo-caption">
                  This is a caption text for the image above.
                </p>
              </div>
              <p>
                Morbi rhoncus, mi eu feugiat tempor, risus lacus accumsan dolor,
                vitae bibendum turpis neque at arcu. Fusce convallis risus dui,
                laoreet pharetra sem sagittis ac. Curabitur mollis lacus turpis,
                elementum euismod nunc blandit ut. Quisque a fermentum sem. Ut
                quis nisi massa. Cras mattis arcu sit amet nibh sodales.
              </p>
              <pre>
                <code className="code">
                  {"\n"}
                  {"\n"}
                  {"    "}&lt;?php{"\n"}
                  {"        "}
                  $GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .=
                  ',tx_realurl_pathsegment';{"\n"}
                  {"\n"}
                  {"        "}// Adjust to your needs{"\n"}
                  {"        "}$domain = 'www.example.com';{"\n"}
                  {"        "}$rootPageUid = 123;{"\n"}
                  {"        "}$rssFeedPageType = 9181; // pageType of your RSS
                  feed page{"\n"}
                  {"\n"}
                </code>
                {"\n"}
                {"                    "}
              </pre>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec
              </p>
              <h5>Mauris sollicitudin arcu vitae mollis finibus</h5>
              <div className="twocols">
                <div className="row-flex">
                  <div className="col-image">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet={getImage("blog-post-1.jpg")}
                      />
                      <source srcSet={getImage("blog-post-1.jpg")} />
                      <img
                        loading="lazy"
                        src={getImage("blog-post-1.jpg")}
                        alt="blog"
                      />
                    </picture>
                  </div>
                  <div className="col-text">
                    <p>
                      Praesent porta sem magna, vitae suscipit augue porttitor
                      eget. Nam quis aliquam ex. Nunc lobortis sem sapien, in
                      bibendum turpis accumsan nec. Mauris sollicitudin arcu
                      vitae mollis finibus.
                    </p>
                    <p>
                      Fusce tincidunt nisi a lacus aliquam, vitae ultricies nisl
                      ornare. Nulla tempor vel ex.
                    </p>
                  </div>
                </div>
              </div>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th />
                      <th>Germany</th>
                      <th>France</th>
                      <th>Italy</th>
                      <th>Sweden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>648</td>
                      <td>124</td>
                      <td>647</td>
                      <td>687</td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>765</td>
                      <td>536</td>
                      <td>362</td>
                      <td>291</td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>382</td>
                      <td>947</td>
                      <td>253</td>
                      <td>379</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam.
              </p>
              <p className="quote">
                “Nulla tempor vel ex a condimentum. Cras a vulputate odio.
                Praesent consectetur velit mi, ac tempor metus interdum nec.
                Nulla dapibus laoreet elit lacinia viverra.”
              </p>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam, vitae ultricies
                nisl ornare. Nulla tempor vel ex a condimentum..
              </p>
              <ul>
                <li>Praesent porta sem magna</li>
                <li>Vitae suscipit augue porttitor eget</li>
                <li>Nam quis aliquam ex</li>
                <li>Nunc lobortis sem sapien</li>
                <li>In bibendum turpis accumsan nec</li>
                <li>Mauris sollicitudin arcu vitae mollis finibus</li>
                <li>Fusce tincidunt nisi a lacus aliquam</li>
              </ul>
              <div className="twocols">
                <div className="row-flex">
                  <div className="col-image">
                    <h6>Before situation</h6>
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet={getImage("blog-post-2.jpg")}
                      />
                      <source srcSet={getImage("blog-post-2.jpg")} />
                      <img
                        loading="lazy"
                        src={getImage("blog-post-2.jpg")}
                        alt="blog"
                      />
                    </picture>
                  </div>
                  <div className="col-image">
                    <h6>After situation</h6>
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet={getImage("blog-post-1.jpg")}
                      />
                      <source srcSet={getImage("blog-post-1.jpg")} />
                      <img
                        loading="lazy"
                        src={getImage("blog-post-1.jpg")}
                        alt="blog"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <h6>Mauris sollicitudin arcu vitae mollis finibus</h6>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam.
              </p>
              <div className="thumbnail-video">
                <ReactPlayer
                  width="100%"
                  url="https://www.youtube.com/watch?v=ArQvRDWulns&t=3345s"
                />
              </div>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam, vitae ultricies
                nisl ornare. Nulla tempor vel ex a condimentum. Cras a vulputate
                odio.
              </p>
              <h5>Nam quis aliquam ex</h5>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam, vitae ultricies
                nisl ornare. Nulla tempor vel ex a condimentum. Cras a vulputate
                odio.
              </p>
            </div>
          </div>
        </section>
        <RecentResources className="blog-features line-bottom-left margin-top" />
        <CommentCustomer
          id="232bf118-2753-4d7c-bdf9-3eeee9cbc2b0"
          title="The quick brown fox jumps over the lazy dog"
          url="https://burgesscommerce.netlify.app/resources/the-quick-brown-fox-jumps-over-the-lazy-dog"
        />
        <FormContact className="form-contact line-bottom-left" />
        <SubscribeEmail className="newsletter-section bg-grey" />
      </main>
    </Layout>
  )
}
