import "./App.css";
import NewsCard from "./components/news-card/index";
import React from "react";
import { useEffect, useState } from "react";

const App = (props) => {
  const [LeftTitle, setLeftTitle] = useState("");
  const [LeftSource, setLeftSource] = useState("");
  const [LeftURL, setLeftURL] = useState("");
  const [LeftPicture, setLeftPicture] = useState("Toggle for News");
  const [CenterTitle, setCenterTitle] = useState("");
  const [CenterSource, setCenterSource] = useState("");
  const [CenterURL, setCenterURL] = useState("");
  const [CenterPicture, setCenterPicture] = useState("Toggle for News");
  const [RightTitle, setRightTitle] = useState("");
  const [RightSource, setRightSource] = useState("");
  const [RightURL, setRightURL] = useState("");
  const [RightPicture, setRightPicture] = useState("Toggle for News");

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
            let LeftSource = obj.source.name;
            let LeftTitle = obj.title;
            let LeftURL = obj.url;
            let LeftPicture = obj.urlToImage;
            if (
              LeftSource === "CNN" ||
              LeftSource === "CNBC" ||
              LeftSource === "Axios" ||
              LeftSource === "ABC News" ||
              LeftSource === "NBC News" ||
              LeftSource === "Bloomberg" ||
              LeftSource === "MSNBC" ||
              LeftSource === "The Guardian" ||
              LeftSource === "The Washington Post" ||
              LeftSource === "Business Insider" ||
              LeftSource === "Politico" ||
              LeftSource === "Buzzfeed" ||
              LeftSource === "CBS News" ||
              LeftSource === "Engadget" ||
              LeftSource === "Mashable" ||
              LeftSource === "New York Magazine" ||
              LeftSource === "TechCrunch" ||
              LeftSource === "Recode" ||
              LeftSource === "The Huffington Post" ||
              LeftSource === "The Verge" ||
              LeftSource === "Time"
            ) {
              console.log(`${LeftSource} leans left`);
              setLeftSource(LeftSource);
              setLeftTitle(LeftTitle);
              setLeftURL(LeftURL);
              setLeftPicture(LeftPicture);
            }
          });
        };
        FetchLeftNews();
        const FetchCenterNews = () => {
          NewsData.articles.forEach((obj, i) => {
            let CenterSource = obj.source.name;
            let CenterTitle = obj.title;
            let CenterURL = obj.url;
            let CenterPicture = obj.urlToImage;
            if (
              CenterSource === "The Hill" ||
              CenterSource === "Reuters" ||
              CenterSource === "BBC News" ||
              CenterSource === "Associated Press" ||
              CenterSource === "Al Jazeera English" ||
              CenterSource === "Fortune" ||
              CenterSource === "Newsweek" ||
              CenterSource === "National Geographic" ||
              CenterSource === "Ars Technica" ||
              CenterSource === "New Scientist" ||
              CenterSource === "TechRadar"
            ) {
              console.log(`${CenterSource} leans Center`);
              setCenterSource(CenterSource);
              setCenterTitle(CenterTitle);
              setCenterURL(CenterURL);
              setCenterPicture(CenterPicture);
            }
          });
        };
        FetchCenterNews();
        const FetchRightNews = () => {
          NewsData.articles.forEach((obj, i) => {
            let RightSource = obj.source.name;
            let RightTitle = obj.title;
            let RightURL = obj.url;
            let RightPicture = obj.urlToImage;
            if (
              RightSource === "The Wall Street Journal" ||
              RightSource === "Fox News" ||
              RightSource === "Breitbart News" ||
              RightSource === "The American Conservative" ||
              RightSource === "National Review" ||
              RightSource === "The Next Web"
            ) {
              console.log(`${RightSource} leans Right`);
              setRightSource(RightSource);
              setRightTitle(RightTitle);
              setRightURL(RightURL);
              setRightPicture(RightPicture);
            }
          });
        };
        FetchRightNews();
      },
    []
  );

  return (
    <div className="App">
      <NewsCard
        LeftSource={LeftSource}
        LeftTitle={LeftTitle}
        LeftURL={LeftURL}
        RightSource={RightSource}
        RightTitle={RightTitle}
        RightURL={RightURL}
        CenterSource={CenterSource}
        CenterTitle={CenterTitle}
        CenterURL={CenterURL}
        LeftPicture={LeftPicture}
        CenterPicture={CenterPicture}
        RightPicture={RightPicture}
      />

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
