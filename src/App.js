import "./App.css";
import NewsCard from "./components/news-card/index";

function App(props) {
  return (
    <div className="App">
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
      <NewsCard headline="headline" source="source" />
    </div>
  );
}

export default App;
