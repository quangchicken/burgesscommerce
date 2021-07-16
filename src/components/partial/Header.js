import React, { useEffect, useState } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import logo from "../../images/logo.svg";
import { RichText } from "prismic-reactjs";

<script
  async
  defer
  src='https://static.cdn.prismic.io/prismic.js?new=true&repo=burgesscommerce'
></script>;
const Header = ({ isHomepage, navigation, navigationDropdown }) => {
  const { group_navigate } = navigation;

  const homepageClass = isHomepage ? "homepage-header" : "";
  const [isToggle, setToggle] = useState(true);
  const [navigateOpen, setNavigateOpen] = useState("");
  const [isOnMobile, setOnMobile] = useState(false);
  const [isScroll, setScroll] = useState("");
  const [isDown, setDown] = useState("");
  const [isOnTop, setOnTop] = useState(false);
  const [onHover, setHover] = useState("");

  useEffect(() => {
    if (!window) return;
    if (!document) return;

    setOnMobile(window.innerWidth < 1024);
    window.addEventListener("wheel", onWheel);
    window.onscroll = function () {
      let e = document.body.scrollTop || document.documentElement.scrollTop;
      let t =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let o = (e / t) * 100;
      const progress = document.getElementById("progress-bar-percent");
      if (progress) progress.style.width = o + "%";
    };
  }, []);

  // For mobile
  const handleToggleNavigation = () => {
    const root = document.getElementsByTagName("html")[0];
    if (isToggle) {
      root.classList.add("menu-active");
    } else {
      root.classList.remove("menu-active");
    }
    setToggle(!isToggle);
  };

  const onOpenDropdown = (event, nav) => {
    event.preventDefault();
    if (!isOnMobile) return;
    if (nav === navigateOpen) {
      setNavigateOpen("");
    } else {
      setNavigateOpen(nav);
    }
  };

  const RenderDropdownDetail = ({ params }) => {
    const { items, primary, slice_type } = params;
    if (slice_type === "group_text") {
      return (
        <div className='col-wide-3'>
          <strong className='level1 parent'>
            <a>{RichText.asText(primary.title)}</a>
            <span className='toggle-menu'></span>
          </strong>
          <ul>
            {items.map((vl, i) => {
              const link = vl.link_to ? RichText.asText(vl.link_to) : "";
              return (
                <li key={i}>
                  <Link to={"/" + link} onClick={handleToggleNavigation}>
                    {RichText.asText(vl.subtitle)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className='col-wide-3'>
        <strong className='level1 parent'>
          <a>{RichText.asText(primary.title)}</a>
          <span className='toggle-menu'></span>
        </strong>
        <ul>
          <li>
            <a>{RichText.asText(primary.text)}</a>
          </li>
          <li>
            <a
              href={`tel:${RichText.asText(primary.number)}`}
              className='phone'
            >
              {RichText.asText(primary.number)}
            </a>
          </li>
          <li>
            <a href='/' className=' button solid'>
              {RichText.asText(primary.button_label)}
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const renderTypeDropdown = (id, classNameDropdown) => {
    return navigationDropdown.map((vl, idx) => {
      return vl.data.dropdown_id[0].text === id ? (
        <div key={idx} className={classNameDropdown}>
          <div className='wrapper'>
            <div className='row'>
              {vl.data.body.map((vl, idx) => (
                <RenderDropdownDetail params={vl} key={idx} />
              ))}
            </div>
          </div>
        </div>
      ) : null;
    });
  };

  const renderNavigate = (nav, idx) => {
    const { has_sub, link_to, navigate_title, dropdown_id } = nav;
    const navigateTitle = navigate_title && RichText.asText(navigate_title);
    const linkTo = link_to && RichText.asText(link_to);
    const isOpen = navigateOpen === RichText.asText(navigate_title);
    const className = !has_sub ? "" : `parent ${isOpen ? "active" : ""}`;
    const classNameDropdown = `dropdown ${
      !isOnMobile ? "" : isOpen ? "d-block" : "d-none"
    }`;
    const onClick = has_sub
      ? (event) => onOpenDropdown(event, navigateTitle)
      : handleToggleNavigation;

    return (
      <li key={idx} className={className} onClick={onClick}>
        {has_sub ? (
          <>
            <a>{navigateTitle}</a>
            {renderTypeDropdown(dropdown_id[0].text, classNameDropdown)}
          </>
        ) : (
          <Link to={`/${linkTo}`} onKeyPress={() => console.log()}>
            {navigateTitle}
          </Link>
        )}
      </li>
    );
  };

  const onWheel = (event) => {
    const headerTop = 0;
    if (event.deltaY < 0) {
      if (window.scrollY === 0) {
        setScroll("");
        setDown("");
      } else {
        if (window.scrollY > headerTop) {
          setDown("");
        } else if (window.scrollY > headerTop) {
          setScroll("");
          setDown("down");
        }
      }
    } else {
      if (window.scrollY > headerTop) {
        if (!document.getElementById("header").classList.contains("active")) {
          setDown("down");
        }
      }
    }

    if (window.scrollY > headerTop) {
      setScroll("scroll");
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };

  return (
    <>
      {!isOnTop && (
        <a
          aria-label='aaa'
          className={`scrollToTop ${isToggle ? "show" : ""}`}
          onKeyPress={() => {
            if (document) {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }
          }}
        >
          <span className='icon'>
            <i className='icon-arrow-up-white'></i>
          </span>
        </a>
      )}
      <div id='header-bar' class='hide'>
        <div className='wrapper'>
          <div className='row'>
            <h6 className='h9'>
              Magento 1 End of Life is here. <a href='/'>Discuss a migration</a>
            </h6>
          </div>
        </div>
      </div>
      <header
        onMouseEnter={() => setHover("active")}
        onMouseLeave={() => setHover("")}
        id='header'
        className={`site-header ${onHover} ${homepageClass} ${isDown} ${isScroll} ${
          !isToggle ? "active" : ""
        }`}
      >
        <div className='wrapper'>
          <div className='row'>
            <Link to='/' className='logo'>
              <img src={logo} alt='' />
            </Link>
            <button
              id='menu-toggle'
              className={`border-0 menu-toggle ${!isToggle ? "active" : ""}`}
              onClick={handleToggleNavigation}
              aria-label='abc'
            >
              menu<span>close</span>
            </button>

            <div id='navigation' className='navigation'>
              <ul className='primary-menu'>
                {group_navigate.map(renderNavigate)}
              </ul>
            </div>
            <Link
              to='/contact'
              className='button small button-contact white-solid'
            >
              Contact
            </Link>
          </div>
        </div>
        <div id='progress-bar'>
          <div id='progress-bar-percent'></div>
        </div>
      </header>
    </>
  );
};

const HeaderContainer = () => (
  <StaticQuery
    query={`${Query}`}
    render={(document) => {
      const navigation = document.allPrismicNavigation.nodes[0].dataRaw;
      const navigationDropdown = document.allPrismicNavigateDropdown.nodes;
      return (
        <Header
          navigation={navigation}
          navigationDropdown={navigationDropdown}
        />
      );
    }}
  />
);

const Query = graphql`
  query {
    allPrismicNavigateDropdown {
      nodes {
        data {
          body {
            items {
              link_to {
                text
              }
              subtitle {
                text
              }
            }
            primary {
              title {
                text
              }
              number {
                text
              }
              button_label {
                text
              }
              text {
                text
              }
            }
            slice_type
          }
          dropdown_id {
            text
          }
        }
      }
    }
    allPrismicNavigation {
      nodes {
        dataRaw
      }
    }
  }
`;

export default HeaderContainer;
