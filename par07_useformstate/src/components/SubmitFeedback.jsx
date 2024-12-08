"use server";

export async function submitFeedback(prevState, queryData) {
  const feedback = queryData.get("feedback");
  if (feedback) {
    return "Thanks for your feedback!";
  } else {
    return "Please provide your feedback before submitting.";
  }
}
