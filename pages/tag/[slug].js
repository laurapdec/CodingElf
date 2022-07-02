import React from "react";
import { Categories, PostCard, SocialMediaWidget } from "../../components";
import { getPostsfromTag, GetTags } from "../../services";


const Search = ({tag}) => {
    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostCard post={post}/>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky">
              <SocialMediaWidget/>
              <Categories tagon={tag}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Search;
  
  export async function getStaticProps({ params }) {
    const data = await getPostsfromTag(params.slug);
  
    return {
      props: { post: data },
    };
  }
  

export async function getStaticPaths (){
    const tags = await GetTags()

    return{
        paths:tags.map(({slug:{slug}}) => ({params:{slug}})),
        fallback: false
    }
}
