import { useFormStatus } from "react-dom";
import { Action } from "./Action.jsx";
import PropTypes from "prop-types";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export default function UseFromSts() {
  return <Form action={Action} />;
}

Form.propTypes = {
  action: PropTypes.string.isRequired,
};
