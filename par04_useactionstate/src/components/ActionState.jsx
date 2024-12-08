"use client";

import incrementLike from "./Action.jsx";
import { useActionState } from "react";

function ActionState() {
  const [likes, likeCountAction, isPending] = useActionState(incrementLike, 0);

  return (
    <>
      <p>Total Likes: {likes}</p>
      <form action={likeCountAction}>
        <button
          type="submit"
          disabled={isPending}
          className="border box-shadow bg-[#fff] p-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Like
        </button>
      </form>
    </>
  );
}

export default ActionState;
