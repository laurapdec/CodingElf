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
  }`;


  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};


export const GetAuthors = async() => {
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


export const GetTags = async() => {
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