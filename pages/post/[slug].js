import React from "react";
import { getSimilarPosts, getPosts , getPostData, getComments } from "../../services";
import {
  Post,
  Comments,
  CommentForm,
  SimilarPosts,
  ElfCard,
} from "../../components";
import { FloatingBar } from "../../lib";
import Head from "next/head";

const Article = ({post, similarposts,comments}) => {
  if (post.description == null ){
    var short_desc = "";
  }
  else{
    var short_desc = post.description.slice(0,157);
  }
  
  return (
    <>
    <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${short_desc}...`}/>
    </Head>
    <div className="container mx-auto md:px-10  mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <Post post={post}/>
          <CommentForm id={post._id} />
          <Comments comments={comments} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky">
            <ElfCard author={post.author}/>
            <SimilarPosts posts={similarposts} />
          </div>
          <FloatingBar likes={post.likes} id={post._id}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Article;

export async function getStaticProps({ params }) {
  const data = (await getPostData(params.slug)) ||[];
  const posts = (await getSimilarPosts(data.data.categories[0].slug,params.slug))||  [];
  const comments = (await getComments(data._id))||[];
  return {
    props: { post: data.data, similarposts : posts,comments:comments},
  };
}

export async function getStaticPaths (){
    const posts = (await getPosts()) || [];
    return{
        paths:posts.map((post) => ({params:post.data})),
        fallback: false
    }
}
