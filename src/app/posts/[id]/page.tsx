
import Comment from '@/app/components/Comment'
import PostListSkeleton from '@/app/components/PostListSkeleton'
import React, { Suspense } from 'react'
type Props={
    params:Promise<{id:string}>
}
type Post={
    userId:number,
    id:number,
    title:string,
    body:string
}

async function getPost(id:string):Promise<Post>{
   const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   return res.json()
}
const PostPage =async ({params}:Props) => {
  const {id}=await params;
  const post=await getPost(id)
  console.log(post)
  return (
    <div className='max-w-7xl container mx-auto py-8 space-y-3 '>
        <h1 className='text-xl '>Post Details</h1>
        <h1 className='capitalize font-semibold'>post title: {post.title}</h1>
        <p>{post.body}</p>
        <h2 className='text-lg '>Comment:</h2>
         <Suspense fallback={<PostListSkeleton />}>
            <Comment id={id} />
         </Suspense>
    </div>
  )
}

export default PostPage