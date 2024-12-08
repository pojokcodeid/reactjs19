"use server";

let likeCount = 0;
export default async function IncrementLike() {
  likeCount++;
  return likeCount;
}
