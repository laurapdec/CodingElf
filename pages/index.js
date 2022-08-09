import Head from "next/head";
import { PostCard, SocialMediaWidget, Categories , PostsCarousel } from "../components";
import { FloatingBar  } from "../lib";
import { getPosts, getTags,getRecentPosts } from "../services";
import React from "react";

export default function Home({ posts ,tags , recentposts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Coding Elf</title>
        <meta name="description" content="Um site de programação desde desenvolvimento web até data science. Estamos criando uma comunidade, venha fazer parte."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsCarousel posts={recentposts}/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        
          {posts.map((post) => (
            <PostCard post={post.data} key={post._id} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="hidden lg:block lg:sticky relatve top-8 ">
            <SocialMediaWidget />

            <Categories tags={tags}/>
          </div>
          <div className="lg:hidden">
            <FloatingBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const tags = (await getTags()) || [];
  const recentposts = (await getRecentPosts()) || [];

  return {
    props: { posts , tags , recentposts},
  };
}
