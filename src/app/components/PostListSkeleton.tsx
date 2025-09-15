import React from "react";

const CommentsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 space-y-4 animate-pulse">
      <div className="h-6 w-40 bg-gray-300 rounded"></div>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="p-4 border rounded-lg bg-gray-100 shadow-sm space-y-3"
        >
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSkeleton;
