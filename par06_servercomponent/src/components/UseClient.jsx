"use client";

import incrementLike from "./IncrementLike.jsx";
import { useState, useTransition } from "react";

function UseClient() {
  const [isPending, startTransition] = useTransition();
  const [likeCount, setLikeCount] = useState(0);

  const onClick = () => {
    startTransition(async () => {
      const currentCount = await incrementLike();
      setLikeCount(currentCount);
    });
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={onClick} disabled={isPending}>
        Like
      </button>
      ;
    </>
  );
}

export default UseClient;
