"use server";

export default async function incrementLike(prevState) {
  // Simulate delay
  return new Promise((resolve) =>
    setTimeout(() => resolve(prevState + 1), 3000)
  );
}
