import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUB_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            title
            likes
            slug
            excerpt {
              html
            }
            content {
              html
            }
            author {
              name
              surname
              picture {
                url
              }
            }
            coverImage {
              url
            }
            tag {
              title
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            createdAt
            title
            likes
            slug
            excerpt {
              html
            }
            content {
              html
            }
            author {
              name
              surname
              picture {
                url
              }
            }
            coverImage {
              url
            }
            tag {
              title
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authorsConnection {
        edges {
          node {
            name
            biography
            picture {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.authorsConnection.edges;
};

export const getTags = async () => {
  const query = gql`
    query MyQuery {
      tags {
        title
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.tags;
};

export const getPostData = async (slug) => {
  const query = gql`
    query GetPostData($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        title
        slug
        likes
        excerpt {
          html
        }
        content {
          html
        }
        author {
          name
          surname
          biography
          picture {
            url
          }
        }
        coverImage {
          url
        }
        tag {
          title
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getPostsFromTag = async (tagslug) => {
  const query = gql`
    query GetPostsFromTag($tagslug: String!) {
      postsConnection(where: { tag_some: { slug: $tagslug } }) {
        edges {
          node {
            createdAt
            title
            likes
            slug
            excerpt {
              html
            }
            content {
              html
            }
            author {
              name
              surname
              picture {
                url
              }
            }
            coverImage {
              url
            }
            tag {
              title
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { tagslug });

  return result.postsConnection.edges;
};

export const addLike = async ({slug}) => {
  console.log(slug)
  if (slug===undefined){
    return "#"
  }

  var qtd = getPostData({slug}).likes + 1;

  
  const result = await request(graphqlAPI,mutation,{qtd: qtd,slug:slug});

  return result
};


