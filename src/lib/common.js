const CLOUDINARY_CLOUD_PATH =
  "https://res.cloudinary.com/burgess-commerce/image/upload/v1627207469/assets/"
export function getImage(name) {
  return CLOUDINARY_CLOUD_PATH + "/" + name
}
