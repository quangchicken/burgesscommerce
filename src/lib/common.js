export const REGEX_EMAIL = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

const CLOUDINARY_CLOUD_PATH =
  "https://res.cloudinary.com/burgess-commerce/image/upload/v1627207469/assets/"
export function getImage(name) {
  return CLOUDINARY_CLOUD_PATH + "/" + name
}

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
