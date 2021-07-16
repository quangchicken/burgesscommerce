const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

const getEnv = (name) => {
  if (!name) {
    console.error(`${name}: Environment variable is not set.`);
    return "";
  }
  return process.env[name] || "";
};

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};
const slugToString = (slug) => {
  if (!slug || typeof slug !== "string") return "";
  const str = slug.replace(/\-/g, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = { linkResolver, getEnv, isTouchDevice, slugToString };
