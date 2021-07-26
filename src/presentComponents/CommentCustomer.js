import React from "react"
import { Disqus } from "gatsby-plugin-disqus"

export default function CommentCustomer({ id, title, url }) {
  if (typeof window === undefined || !title) return null
  return (
    <section className="comment-customer">
      <div className="wrapper">
        <Disqus identifier={id + title} title={title} url={url} />
      </div>
    </section>
  )
}
