import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUB_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async (req,res) => {
    console.log(req.body)
    const mutation = gql`
    mutation AddLike ( $likes:Int! , $slug:String!) {
      updatePost(
        where: { slug: $slug }
        data: {likes:  $likes}
      ) {
        id
      }
      publishPost(where: {slug: $slug}) {
        likes
      }
    }  
  `;

  const client = new GraphQLClient(graphqlAPI, {
    headers: {
      Authorization: `Bearer ${graphcmsToken}`,
    },
  });


  const result = await client.request(mutation, req.body);

  res.status(200).json({ success: true });

}
