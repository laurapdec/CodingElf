import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUB_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              createdAt
              date
              title
              slug
              content {
                html
                markdown
                raw
                text
              }
              tags
              author {
                biography
                name
                id
                picture {
                  url
                }
              }
              coverImage {
                url
              }
              excerpt {
                html
                markdown
                raw
                text
              }
            }
          }
        }
      }
      
    `

    const result = await request(graphqlAPI,query);

    return result.postsConnection.edges;
}