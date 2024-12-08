import { createContext, use } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext(null);

export default function UseHook() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button show={true}>Sign up</Button>
      <Button show={false}>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = use(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ show, children }) {
  if (show) {
    const theme = use(ThemeContext);
    const className = "button-" + theme;
    return <button className={className}>{children}</button>;
  }
  return false;
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Button.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
