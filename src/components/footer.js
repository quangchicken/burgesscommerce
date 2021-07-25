import * as React from "react"
import { getImage } from "../lib/common"

const Footer = ({ siteTitle }) => (
  <footer id="footer" className="site-footer">
    <div className="wrapper">
      <div className="row">
        <div className="col-wide-6 col-left">
          <div className="inner">
            <h2 className="title">
              Ready to get started?<span>Let’s talk.</span>
            </h2>
            <ul>
              <li className="email">
                <a href="mailto:rowan@burgesscommerce.com">
                  <i className="icon-email" />
                  rowan@burgesscommerce.com
                </a>
              </li>
              <li className="phone">
                <a href="tel:07885 910 429">
                  <i className="icon-phone" />
                  07885 910 429
                </a>
              </li>
              <li className="linkedin">
                <a href="#">
                  <i className="icon-in" />
                  linkedin.com/in/rowan-burgess
                </a>
              </li>
              <li className="tripadvisor">
                <div className="reviews-tripadvisor">
                  <img src={getImage("tripadvisor_ay47ta.svg")} alt="" />
                  <p>
                    <strong>4.9</strong> Average rating, <strong>33</strong>{" "}
                    Total reviews
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-wide-6 col-right">
          <div className="inner">
            <h2 className="title">What We Do</h2>
            <div className="menu-footer">
              <div className="links">
                <h6 className="title">Platforms</h6>
                <ul>
                  <li>
                    <a href="#">Magento</a>
                  </li>
                  <li>
                    <a href="#">Shopify</a>
                  </li>
                  <li>
                    <a href="#">BigCommerce</a>
                  </li>
                  <li>
                    <a href="#">WooCommerce</a>
                  </li>
                  <li>
                    <a href="#">Shopware</a>
                  </li>
                </ul>
              </div>
              <div className="links">
                <h6 className="title">Platforms</h6>
                <ul>
                  <li>
                    <a href="#">Magento</a>
                  </li>
                  <li>
                    <a href="#">Shopify</a>
                  </li>
                  <li>
                    <a href="#">BigCommerce</a>
                  </li>
                  <li>
                    <a href="#">WooCommerce</a>
                  </li>
                  <li>
                    <a href="#">Shopware</a>
                  </li>
                </ul>
              </div>
              <div className="links">
                <h6 className="title">Platforms</h6>
                <ul>
                  <li>
                    <a href="#">Magento</a>
                  </li>
                  <li>
                    <a href="#">Shopify</a>
                  </li>
                  <li>
                    <a href="#">BigCommerce</a>
                  </li>
                  <li>
                    <a href="#">WooCommerce</a>
                  </li>
                  <li>
                    <a href="#">Shopware</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="logos">
              <ul>
                <li>
                  <img
                    src={getImage("magento-certified-3-footer_ljysr6.svg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={getImage("magento-certified-2-footer_g9mlfx.svg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={getImage("professional-footer_cy68ic.svg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={getImage("google-partner-footer_dwglbd.svg")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={getImage("google-shopping-footer_sse7pu.svg")}
                    alt=""
                  />
                </li>
                <li>
                  <img src={getImage("google-ads-footer_krfqxx.svg")} alt="" />
                </li>
              </ul>
            </div>
            <p className="copyright">
              © 2020 Burgess Commerce - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
