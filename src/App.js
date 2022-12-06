import "./App.css";
import NewsCard from "./components/news-card/index";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";

export const parentContext = React.createContext();
const App = (props) => {
  const [value, setValue] = useState(0);

  const handleButtonChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "Left") {
      console.log("Left click");
    }
    if (newValue === "Center") {
      console.log("Center click");
    }
    if (newValue === "Right") {
      console.log("Right click");
    }
  };

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
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
      <parentContext.Provider value={{ value, handleButtonChange }}>
        <NewsCard headline="headline" source="source" />
      </parentContext.Provider>
    </div>
  );
};

export default App;
