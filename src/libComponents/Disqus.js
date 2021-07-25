import React from "react"
import { Disqus } from "gatsby-plugin-disqus"
import { RichText } from "prismic-reactjs"

export default function CommentCustomer({ id, title, url }) {
  if (typeof window === undefined || !title) return null
  return (
    <section className="comment-customer">
      <div className="wrapper">
        <Disqus
          identifier={id + title}
          title={RichText.asText(title)}
          url={url}
        />
      </div>
    </section>
  )
}
