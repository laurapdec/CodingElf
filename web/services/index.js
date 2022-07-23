import client from '../client'

export async function getAuthors(){
  const query =  `*[_type=="author"]{
      "data":{
        name,
        bio,
        "image": image.asset->url
      },
      _id
    } `;
  const result = await client.fetch( query );
  
  return result;
};


export async function getCompanyBio(){
  const query =  `*[_type=="company"]{
      body
    } `;
  const result = await client.fetch( query );
  
  return result[0];
};