const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/article.js`);
  const oldPage = path.resolve(`./src/templates/oldpage.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      query {
        allPrismicArticle {
          nodes {
            data {
              author {
                text
              }
              avatar {
                url
              }
              avatar_m {
                url
              }
              banner {
                url
              }
              banner_m {
                url
              }
              body {
                items {
                  bg_color
                  col1 {
                    text
                  }
                  col2 {
                    text
                  }
                  col3 {
                    text
                  }
                  col4 {
                    text
                  }
                  col5 {
                    text
                  }
                  icon_name {
                    text
                  }
                  image {
                    url
                  }
                  image_m {
                    url
                  }
                  link_social {
                    text
                  }
                  text {
                    text
                  }
                  title {
                    text
                  }
                }
                slice_type
                primary {
                  has_shadow
                  image {
                    url
                  }
                  image_m {
                    url
                  }
                  link_youtube {
                    text
                  }
                  subtitle {
                    text
                  }
                  code {
                    text
                  }
                  text {
                    text
                  }
                  title {
                    text
                  }
                }
              }
              created_at
              main_title {
                text
              }
              read_time {
                text
              }
              table_of_content {
                text {
                  text
                }
              }
              list_category {
                category_id {
                  slug
                  id
                }
              }
            }
            id
            slugs
            url
          }
        }
      }
    `
  );

  const redirectsResult = await graphql(
    `
      query {
        allPrismicRedirectPage {
          nodes {
            data {
              group_old_page {
                new_url {
                  text
                }
                old_url {
                  text
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  if (redirectsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your old url`,
      redirectsResult.errors
    );
    return;
  }

  const posts = result.data.allPrismicArticle.nodes;
  const redirects =
    redirectsResult.data.allPrismicRedirectPage.nodes[0].data.group_old_page;

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: "/resources/" + post.slugs[0],
        component: blogPost,
        context: {
          id: post.id,
          post: post.data,
          url: post.url,
        },
      });
    });
  }
  if (redirects.length > 0) {
    redirects.forEach((redirect) => {
      if (redirect.old_url[0]) {
        return createPage({
          path: redirect.old_url[0].text,
          component: oldPage,
          context: {
            id: redirect.id,
            oldUrl: redirect.old_url[0].text,
            newUrl: redirect.new_url[0].text,
          },
        });
      }
    });
  }
};
