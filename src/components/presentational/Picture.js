import React from "react";

export default function Picture({
  media,
  srcDesktop = "https://picsum.photos/500",
  srcMobile = "https://picsum.photos/300",
  className,
}) {
  return (
    <picture className={className}>
      <source media={media} srcSet={srcDesktop} />
      <source srcSet={srcMobile} />
      <img loading='lazy' src={srcMobile} alt='owner' />
    </picture>
  );
}
