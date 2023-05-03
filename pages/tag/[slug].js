import React from "react";
import { Categories, PostCard, SocialMediaWidget, PostsCarousel } from "../../components";
import { getPostsFromTag, getTags , getRecentPosts} from "../../services";
import { FloatingBar , ScrollUp } from "../../lib";
import Head from "next/head";

const Search = ({tags, selectedtag, tagposts,recentposts}) => {

  const text = selectedtag.title;
  return (
    <>
    <Head>
      <title>{text}</title>
      <meta name="description" content={`Descubra os artigos mais populares sobre ${text} no Coding Elf até agora. Fique por dentro das últimas tendências em ${text}.`}/>
    </Head>
      <div className="container mx-auto md:px-10 mb-8">
        <PostsCarousel posts={recentposts}/>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {tagposts.map((post) => (
            <PostCard post={post.data} tagon={selectedtag} key={post.title} />
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

      <div className="hidden lg:block">
        <ScrollUp/>
      </div>
    </>
  );
};
  
export default Search;
  
export async function getStaticProps({ params }) {
  const tagposts = (await getPostsFromTag(params.slug)) || [];
  const tags = (await getTags()) || [];
  const recentposts = (await getRecentPosts()) || [];
  var tagtitle = params.slug;
  for(var x in tags) {
    if(tags[x].slug == params.slug) {
      tagtitle = tags[x].title;
    }
  }
  return {
    props: { tagposts: tagposts, selectedtag : {'slug': params.slug,'title':tagtitle}, tags: tags ,recentposts: recentposts},
  };
}


export async function getStaticPaths (){
    const tags = (await getTags()) || [];
    return{
        paths:tags.map((tag) => ({params:tag})),
        fallback: false
    }
}
