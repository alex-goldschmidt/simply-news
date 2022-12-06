import "./App.css";
import NewsCard from "./components/news-card/index";
import { useEffect } from "react";

const App = (props) => {
  useEffect(
    () =>
      async function FetchNews() {
        const NewsResponse = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=03b38c07d43143d3b61f3e755ab81261",
          { mode: "cors" }
        );
        const NewsData = await NewsResponse.json();
        console.log(NewsData);

        const FetchLeftNews = () => {
          NewsData.articles.forEach((obj, i) => {
            let source = obj.source.name;
            if (source === "CNN" || source === "Axios") {
              console.log(`${source} leans left`);
            }
          });
        };
        FetchLeftNews();
      },
    []
  );

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
};

export default App;
