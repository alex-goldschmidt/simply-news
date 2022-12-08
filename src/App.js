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
            if (
              source === "CNN" ||
              source === "Axios" ||
              source === "ABC News" ||
              source === "NBC News" ||
              source === "Bloomberg" ||
              source === "MSNBC" ||
              source === "The Guardian" ||
              source === "The Washington Post" ||
              source === "Business Insider" ||
              source === "Politico" ||
              source === "Buzzfeed" ||
              source === "CBS News" ||
              source === "Engadget" ||
              source === "Mashable" ||
              source === "New York Magazine" ||
              source === "TechCrunch" ||
              source === "Recode" ||
              source === "The Huffington Post" ||
              source === "The Verge" ||
              source === "Time"
            ) {
              console.log(`${source} leans left`);
            }
          });
        };
        FetchLeftNews();
        const FetchCenterNews = () => {
          NewsData.articles.forEach((obj, i) => {
            let source = obj.source.name;
            if (
              source === "The Hill" ||
              source === "Reuters" ||
              source === "BBC News" ||
              source === "Associated Press" ||
              source === "Al Jazeera English" ||
              source === "Fortune" ||
              source === "Newsweek" ||
              source === "National Geographic" ||
              source === "Ars Technica" ||
              source === "New Scientist" ||
              source === "TechRadar"
            ) {
              console.log(`${source} leans Center`);
            }
          });
        };
        FetchCenterNews();
        const FetchRightNews = () => {
          NewsData.articles.forEach((obj, i) => {
            let source = obj.source.name;
            if (
              source === "The Wall Street Journal" ||
              source === "Fox News" ||
              source === "Breitbart News" ||
              source === "The American Conservative" ||
              source === "National Review" ||
              source === "The Next Web"
            ) {
              console.log(`${source} leans Right`);
            }
          });
        };
        FetchRightNews();
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
