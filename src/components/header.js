import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header id="header" className="site-header" role="banner">
    <div className="wrapper">
      <div className="row">
        <a href="/" className="logo">
          <img src="images/logo.svg" alt="" />
        </a>
        <a href="" id="menu-toggle" className="menu-toggle">
          menu<span>close</span>
        </a>
        <div id="navigation" className="navigation">
          <div className="wrapper">
            <ul className="primary-menu">
              <li className="parent">
                <a href="#faq">Ecommerce</a>
                <div className="dropdown">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-wide-3">
                        <strong className="level1 parent">
                          <a href="/">Platforms</a>
                          <span className="toggle-menu" />
                        </strong>
                        <ul>
                          <li>
                            <a href="/rbc-magento">Magento</a>
                          </li>
                          <li>
                            <a href="/">Shopify</a>
                          </li>
                          <li>
                            <a href="/">BigCommerce</a>
                          </li>
                          <li>
                            <a href="/">WooCommerce</a>
                          </li>
                          <li>
                            <a href="/">Shopware</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-wide-3">
                        <strong className="level1 parent">
                          <a href="/">SEO &amp; Best Practice</a>
                          <span className="toggle-menu" />
                        </strong>
                        <ul>
                          <li>
                            <a href="/">SEO Audit</a>
                          </li>
                          <li>
                            <a href="/">Monthly SEO</a>
                          </li>
                          <li>
                            <a href="/">Consultancy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-wide-3">
                        <strong className="level1 parent">
                          <a href="/">Audit</a>
                          <span className="toggle-menu" />
                        </strong>
                        <ul>
                          <li>
                            <a href="/">Ecommerce Audit</a>
                          </li>
                          <li>
                            <a href="/">Code &amp; Performance Audit</a>
                          </li>
                          <li>
                            <a href="/">UX &amp; CRO Audit</a>
                          </li>
                          <li>
                            <a href="/">Security Audit</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-wide-3">
                        <strong className="level1 parent">
                          <a href="/">Call Me</a>
                          <span className="toggle-menu" />
                        </strong>
                        <ul>
                          <li>
                            <a href="/">Any time</a>
                          </li>
                          <li>
                            <a href="tel:07885910429" className="phone">
                              07885 910 429
                            </a>
                          </li>
                          <li>
                            <a href="/" className="button solid">
                              Let's Talk
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="parent">
                <a href="#how-it-work">Industries</a>
                <div className="dropdown">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-wide-3">
                        <strong className="level1 parent">
                          <a href="/" />
                          <span className="toggle-menu" />
                        </strong>
                        <ul>
                          <li>
                            <a href="/">Fashion</a>
                          </li>
                          <li>
                            <a href="/">Distributors</a>
                          </li>
                          <li>
                            <a href="/">Hobby</a>
                          </li>
                          <li>
                            <a href="/">Food &amp; Beverage</a>
                          </li>
                          <li>
                            <a href="/">Sports, Fitness and Wellbeing</a>
                          </li>
                          <li>
                            <a href="/">Manufacturers</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-wide-3">
                        <strong className="level1 parent">
                          <a href="/" />
                          <span className="toggle-menu" />
                        </strong>
                        <ul>
                          <li>
                            <a href="/">Education</a>
                          </li>
                          <li>
                            <a href="/">Health &amp; Beauty</a>
                          </li>
                          <li>
                            <a href="/">Toys &amp; Games</a>
                          </li>
                          <li>
                            <a href="/">Rpmotional Products</a>
                          </li>
                          <li>
                            <a href="/">Automotive</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/agency-support">Agency Support</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
            </ul>
          </div>
        </div>
        <a className="button small button-contact" href="/contact">
          Contact
        </a>
      </div>
    </div>
    <div id="progress-bar">
      <div id="progress-bar-percent" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
