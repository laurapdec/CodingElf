import React from "react";
import { Categories, PostCard, SocialMediaWidget } from "../../components";
import { getPostsFromTag, GetTags } from "../../services";
import { TagFilter } from "../../lib";


const Search = ({tags, selectedtag, posts}) => {
    console.log(selectedtag);
    return (
      <div className="container mx-auto px-10 mb-8">
        <TagFilter tags={tags} tagon={selectedtag}/>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post) => (
            <PostCard post={post.node} tagon={selectedtag} key={post.title} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative  hidden lg:block lg:sticky">
              <SocialMediaWidget/>
              <Categories tags={tags} tagon={selectedtag} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Search;
  
  export async function getStaticProps({ params , title }) {
    const postsdata = (await getPostsFromTag(params.slug)) || [];
    const tagsdata = (await GetTags()) || [];
    
    console.log(tagsdata);
    return {
      props: { posts: postsdata, selectedtag : {'slug': params,'title': 'u' }, tags: tagsdata },
    };
  }
  

export async function getStaticPaths (){
    const tags = (await GetTags()) || [];
    return{
        paths:tags.map((tag) => ({params:tag})),
        fallback: false
    }
}
