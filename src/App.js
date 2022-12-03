import "./App.css";
import NewsCard from "./components/news-card/index";
import { useEffect } from "react";

function App(props) {
  /*
  useEffect(
    () =>
      async function FetchNews() {
        const NewsResponse = await fetch(
          "https://newsapi.org/v2/top-headlines?q=ukraine&apiKey=03b38c07d43143d3b61f3e755ab81261",
          { mode: "cors" }
        );
        const NewsData = await NewsResponse.json();
        console.log(NewsData);
      },
    []
  );
  */

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
