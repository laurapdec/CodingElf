import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUB_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query GetPosts {
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
  query GetAuthors {
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
  query GetTags {
    tags {
          title
          slug
    }
  }
  `;

  const result = await request(graphqlAPI, query);

  return result.tags;
};



export const getPostData = async(slug) => {
  const query = gql`
  query GetPostData ($slug:String!){
    post(where:{slug:$slug}){
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


  const result = await request(graphqlAPI, query,{slug});

  return result.post;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments',{
    method: 'POST',
    body: JSON.stringify(obj),
  })


  return result.json();
}


export const getPostsFromTag = async(slug) => {
  const query = gql`
  query getPostsFromTag ($slug:String!){
    tag(where: {slug: $slug}) {
      post {
        slug
      }
    }
  }
  `;


  const result = await request(graphqlAPI, query,{slug});

  return result.tag;
};