import React from "react";
import { Categories, PostCard, SocialMediaWidget,RecentCard } from "../../components";
import { getPostsFromTag, getTags , getRecentPosts} from "../../services";
import { TagFilter,FloatingBar } from "../../lib";


const Search = ({tags, selectedtag, tagposts,recentposts}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <RecentCard posts={recentposts}/>
      <TagFilter tags={tags} tagon={selectedtag}/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {tagposts.map((post) => (
          <PostCard post={post.node} tagon={selectedtag} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative  hidden lg:block lg:sticky">
            <SocialMediaWidget/>
            <Categories tags={tags} tagon={selectedtag} />
          </div>
          <div className="lg:hidden">
            <FloatingBar />
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Search;
  
export async function getStaticProps({ params }) {
  const postsdata = (await getPostsFromTag(params.slug)) || [];
  const tagsdata = (await getTags()) || [];
  const recentposts = (await getRecentPosts()) || [];
  return {
    props: { tagposts: postsdata, selectedtag : {'slug': params.slug,'title':params.slug}, tags: tagsdata ,recentposts: recentposts},
  };
}


export async function getStaticPaths (){
    const tags = (await getTags()) || [];
    return{
        paths:tags.map((tag) => ({params:tag})),
        fallback: false
    }
}
