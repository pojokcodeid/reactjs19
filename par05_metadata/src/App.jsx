import "./App.css";
import MetaData from "./components/MetaData";

function App() {
  const post = {
    title: "Eee equals em-see-squared",
    keywords: "em, see, squared",
  };
  return (
    <>
      <MetaData post={post} />
    </>
  );
}

export default App;
