import React, { useEffect } from "react"
import $ from "jquery"

export default function Faq({ className }) {
  useEffect(() => {
    $("#faqs dt").on("click", function (e) {
      e.preventDefault()
      $(this).toggleClass("active").next().slideToggle()
    })
  }, [])
  return (
    <section id="faqs" className={`faqs ${className}`}>
      <div className="wrapper medium">
        <div className="heading">
          <h2 className="title text-center">Frequently Asked Questions</h2>
        </div>
        <div className="row">
          <div className="faq" itemScope itemType="https://schema.org/FAQPage">
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="where-are-you-located"
            >
              <dt itemProp="name" className="">
                Where are you located?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="are-you-able-to-meet-clients"
            >
              <dt itemProp="name" className="">
                Are you able to meet clients?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                style={{ display: "none" }}
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="when-can-get-you-get-started-on-my-project"
            >
              <dt itemProp="name" className="">
                When can get you get started on my project?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="is-magento-the-right-platform-for-me"
            >
              <dt itemProp="name" className="">
                Is Magento the right platform for me?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="what-sort-of-clients-do-you-work-with"
            >
              <dt itemProp="name" className="">
                What sort of clients do you work with?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="how-do-you-price-work"
            >
              <dt itemProp="name" className="">
                How do you price work?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="do-you-only-do-magento-development"
            >
              <dt itemProp="name" className="">
                Do you only do Magento development?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
            <dl
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              id="how-do-you-manage-tasks"
            >
              <dt itemProp="name" className="">
                How do you manage tasks?
              </dt>
              <dd
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p>
                    No. I’ve worked in the field of ecommerce as an independent
                    contractor for many years which means I have have a wide
                    range of expertise and skills to draw on.
                  </p>
                  <p>
                    I work with professional Magento designers to build
                    beautiful Magento websites that convert very well.
                  </p>
                  <p>
                    If it’s related to ecommerce, it’s likely I can help,
                    whether it’s SEO advice, marketing advice, platform
                    migration consultation, hosting and management, security
                    consultation, third party integrations, data optimisation,
                    conversion optimisation, data feeds etc.
                  </p>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="action bg-blue text-light">
            <h6>Where are you located?</h6>
            <a href="#">Get In Touch</a>
          </div>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
