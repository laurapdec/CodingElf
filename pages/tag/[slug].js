import React from "react";
import { Categories, PostCard, SocialMediaWidget } from "../../components";
import { getPostsFromTag, GetTags } from "../../services";


const Search = ({tags, selectedtag, posts}) => {
    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post) => (
            <PostCard post={post.node} tagon={selectedtag} key={post.title} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky">
              <SocialMediaWidget/>
              <Categories tags={tags} tagon={selectedtag} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Search;
  
  export async function getStaticProps({ params }) {
    const postsdata = (await getPostsFromTag(params.slug)) || [];
    const tagsdata = (await GetTags()) || [];
    return {
      props: { posts: postsdata, selectedtag : params.slug, tags: tagsdata },
    };
  }
  

export async function getStaticPaths (){
    const tags = (await GetTags()) || [];
    return{
        paths:tags.map(({slug}) => ({params:{slug}})),
        fallback: false
    }
}
