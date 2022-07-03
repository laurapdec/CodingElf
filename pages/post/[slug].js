import React from "react";
import { getPosts, getPostData } from "../../services";
import {
  Post,
  Comments,
  CommentForm,
  SimilarPosts,
  ElfCard,
} from "../../components";

const Article = ({post}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <Post post={post}/>
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky">
            <ElfCard author={post.author}/>
            <SimilarPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

export async function getStaticProps({ params }) {
  const data = (await getPostData(params.slug)) || [];;

  return {
    props: { post: data },
  };
}

export async function getStaticPaths (){
    const posts = (await getPosts()) || [];

    return{
        paths:posts.map(({node:{slug}}) => ({params:{slug}})),
        fallback: false
    }
}
