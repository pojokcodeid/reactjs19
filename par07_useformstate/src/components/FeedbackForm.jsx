import { useFormState } from "react-dom";
import { submitFeedback } from "./SubmitFeedback.jsx";

function FeedbackForm() {
  const [message, formAction] = useFormState(submitFeedback, null);

  return (
    <form action={formAction}>
      <h2>Product Feedback</h2>
      <label>
        Your Feedback:
        <textarea name="feedback" />
      </label>
      <button type="submit">Submit Feedback</button>
      {message}
    </form>
  );
}

export default FeedbackForm;
