import client from "../client";

const sanityAPI = process.env.SANITY_API_LINK;
const sanityKey = process.env.GRAPHCMS_TOKEN;

export async function getAuthors() {
  const query = `*[_type=="author"]{
      "data":{
        name,
        bio,
        "image": image.asset->url
      },
      _id
    } `;
  const result = await client.fetch(query);

  return result;
}

export async function getCompanyBio() {
  const query = `*[_type=="company"]{
      body
    } `;
  const result = await client.fetch(query);

  return result[0];
}

export async function getPosts() {
  const query = `*[_type=="post"]{
    _id,
    "data":{
      title,
      "author":{
         "name":author->name,
        "image":author->image.asset->url,
      },
      "image":mainImage.asset->url,
      body,
      likes,
      categories[]->{
      title,
      "slug":slug.current
      },
      "slug":slug.current
    }
  }   `;
  const result = await client.fetch(query);

  return result;
}

export async function getTags() {
  const query = `*[_type=="category"]{
    _id,
    title,
    "slug":slug.current
  }`;
  const result = await client.fetch(query);

  return result;
}

export async function getRecentPosts() {
  const query = `*[_type=="post"]{
    _id,
    "data":{
      title,
      "author":{
         "name":author->name,
        "image":author->image.asset->url,
      },
      "image":mainImage.asset->url,
      body,
      likes,
      categories[]->{
      title,
      "slug":slug.current
      },
      "slug":slug.current
    }
  }    | order(_createdAt desc)`;
  const result = await client.fetch(query);

  return result;
}

export async function getPostsFromTag(tagslug) {
  const query = `*[_type=="post" && "${tagslug}" in categories[]->slug.current]{
    _id,
    "data":{
      title,
      "author":{
         "name":author->name,
        "image":author->image.asset->url,
      },
      "image":mainImage.asset->url,
      body,
      likes,
      categories[]->{
      title,
      "slug":slug.current
      },
      "slug":slug.current
    }
  }  `;
  const result = await client.fetch(query);

  return result;
}

export async function getSimilarPosts(tagslug, postslug) {
  const query = `*[_type=="post" && "${tagslug}" in categories[]->slug.current && !(slug.current=="${postslug}") ]{
    _id,
    "data":{
      title,
      "author":{
         "name":author->name,
         "bio":author->bio,
        "image":author->image.asset->url,
      },
      "image":mainImage.asset->url,
      body,
      likes,
      categories[]->{
      title,
      "slug":slug.current
      },
      "slug":slug.current
    }
  }  `;
  const result = await client.fetch(query);
  return result;
}

export async function getPostData(slug) {
  const query = `*[_type=="post" && slug.current=="${slug}"]{
    _id,
    "data":{
      title,
      _id,
      "author":{
         "name":author->name,
        "image":author->image.asset->url,
      },
      "image":mainImage.asset->url,
      description,
      body,
      likes,
      categories[]->{
      title,
      "slug":slug.current
      },
      "slug":slug.current
    }
  }  `;
  const result = await client.fetch(query);

  return result[0];
}

export async function addLike(id) {
  const doc = {
    "patch":{
      id:id,
      "inc": { "likes": 1 }
   }
  };

  client.mutate(doc).then((res) => {
    console.log(`Thanks for liking`);
  });

  client.patch(id);
}

export async function addComment(data) {
  const doc = {
    _type:'comment',
    name: data.name,
    email:data.email,
    message:data.comment,
    rate:0,
    post:{
      _type:'reference',
      _ref:data.postid }
  };

  client.create(doc).then((res) => {
    console.log(`Thanks for commenting`);
  });

}

export async function getComments(id) {
  const query = `*[_type=="comment" && post._ref== "${id}"]{
    _id,
    "data":{
      _createdAt,
      name,
      message,
      rate
    }
  }`;
  const result = (await client.fetch(query))||[];
  return result;
}

export async function searchPosts(string) {
  const query =     `*[_type == "post" && (title match "${string}" || description match "${string}" || body[].children[].text match "${string}") ]{
      _id,
      "data":{
        title,
        "author":{
           "name":author->name,
          "image":author->image.asset->url,
        },
        "image":mainImage.asset->url,
        body,
        likes,
        categories[]->{
        title,
        "slug":slug.current
        },
        "slug":slug.current
      }
    }   `;
    const result = await client.fetch(query);
  
    return result;
  }
