import React from "react";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }
  setTimeout(()=>{
   console.log("first")
  },4000)
  return res.json();
}

const Comments = async ({ id }: { id: string }) => {
  const commentData = await getComments(id);

  return (
    <div className="max-w-7xl mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">
        Comments ({commentData.length})
      </h2>
      {commentData.map((comment) => (
        <div
          key={comment.id}
          className="p-4 border rounded-lg bg-gray-50 shadow-sm"
        >
          <p className="text-gray-700 mb-2">{comment.body}</p>
          <div className="text-sm text-gray-500">
            <span className="font-semibold">{comment.name}</span> –{" "}
            <a href={`mailto:${comment.email}`} className="text-blue-600">
              {comment.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
