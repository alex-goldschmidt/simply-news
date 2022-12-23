import "./App.css";
import NewsCard from "./components/news-card/index";
import React from "react";
import { useEffect, useState } from "react";

const App = (props) => {
  const LeftContentArray = [];
  const [LeftRandomObjects, setLeftRandomObjects] = useState([]);

  const CenterContentArray = [];
  const [CenterRandomObjects, setCenterRandomObjects] = useState([]);

  const RightContentArray = [];
  const [RightRandomObjects, setRightRandomObjects] = useState([]);

  //https://newsapi.org/v2/everything?domains=foxnews.com,cnn.com,apnews.com&apiKey=03b38c07d43143d3b61f3e755ab81261
  //https://newsapi.org/v2/top-headlines?country=us&apiKey=03b38c07d43143d3b61f3e755ab81261

  useEffect(
    () =>
      async function FetchNews() {
        const NewsResponse = await fetch(
          "https://newsapi.org/v2/everything?domains=foxnews.com,cnn.com,apnews.com&apiKey=03b38c07d43143d3b61f3e755ab81261",
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
              console.log(`${LeftSource} leans Left`);
              LeftContentArray.push({
                source: LeftSource,
                title: LeftTitle,
                url: LeftURL,
                picture: LeftPicture,
              });
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
              CenterSource === "Financial Times" ||
              CenterSource === "Al Jazeera English" ||
              CenterSource === "Fortune" ||
              CenterSource === "Newsweek" ||
              CenterSource === "National Geographic" ||
              CenterSource === "Ars Technica" ||
              CenterSource === "New Scientist" ||
              CenterSource === "TechRadar"
            ) {
              console.log(`${CenterSource} leans Center`);
              CenterContentArray.push({
                source: CenterSource,
                title: CenterTitle,
                url: CenterURL,
                picture: CenterPicture,
              });
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
              RightSource === "Investor's Business Daily" ||
              RightSource === "The Next Web"
            ) {
              console.log(`${RightSource} leans Right`);
              RightContentArray.push({
                source: RightSource,
                title: RightTitle,
                url: RightURL,
                picture: RightPicture,
              });
            }
          });
        };
        FetchRightNews();
        console.log(LeftContentArray);
        console.log(RightContentArray);
        console.log(CenterContentArray);
        const numObjects = 8;

        // Generate an array of random indices for LeftContentArray
        const LeftIndices = Array.from({ length: numObjects }, () =>
          Math.floor(Math.random() * LeftContentArray.length)
        );

        // Use the indices to select the random objects from LeftContentArray
        const LeftRandomObjects = LeftIndices.map(
          (index) => LeftContentArray[index]
        );

        // Repeat the process for CenterContentArray and RightContentArray
        const CenterIndices = Array.from({ length: numObjects }, () =>
          Math.floor(Math.random() * CenterContentArray.length)
        );
        const CenterRandomObjects = CenterIndices.map(
          (index) => CenterContentArray[index]
        );

        const RightIndices = Array.from({ length: numObjects }, () =>
          Math.floor(Math.random() * RightContentArray.length)
        );
        const RightRandomObjects = RightIndices.map(
          (index) => RightContentArray[index]
        );

        // Update the state variables with the new random objects
        setLeftRandomObjects(LeftRandomObjects);
        setCenterRandomObjects(CenterRandomObjects);
        setRightRandomObjects(RightRandomObjects);
        console.log(LeftRandomObjects);
        console.log(CenterRandomObjects);
        console.log(RightRandomObjects);
      },
    []
  );
  return (
    <div className="App">
      {LeftRandomObjects.length > 0 &&
      LeftRandomObjects[0] &&
      CenterRandomObjects.length > 0 &&
      CenterRandomObjects[0] &&
      RightRandomObjects.length > 0 &&
      RightRandomObjects[0] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[0].source}
          LeftTitle={LeftRandomObjects[0].title}
          LeftURL={LeftRandomObjects[0].url}
          LeftPicture={LeftRandomObjects[0].picture}
          CenterSource={CenterRandomObjects[0].source}
          CenterTitle={CenterRandomObjects[0].title}
          CenterURL={CenterRandomObjects[0].url}
          CenterPicture={CenterRandomObjects[0].picture}
          RightSource={RightRandomObjects[0].source}
          RightTitle={RightRandomObjects[0].title}
          RightURL={RightRandomObjects[0].url}
          RightPicture={RightRandomObjects[0].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 1 &&
      LeftRandomObjects[1] &&
      CenterRandomObjects.length > 1 &&
      CenterRandomObjects[1] &&
      RightRandomObjects.length > 1 &&
      RightRandomObjects[1] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[1].source}
          LeftTitle={LeftRandomObjects[1].title}
          LeftURL={LeftRandomObjects[1].url}
          LeftPicture={LeftRandomObjects[1].picture}
          CenterSource={CenterRandomObjects[1].source}
          CenterTitle={CenterRandomObjects[1].title}
          CenterURL={CenterRandomObjects[1].url}
          CenterPicture={CenterRandomObjects[1].picture}
          RightSource={RightRandomObjects[1].source}
          RightTitle={RightRandomObjects[1].title}
          RightURL={RightRandomObjects[1].url}
          RightPicture={RightRandomObjects[1].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 2 &&
      LeftRandomObjects[2] &&
      CenterRandomObjects.length > 2 &&
      CenterRandomObjects[2] &&
      RightRandomObjects.length > 2 &&
      RightRandomObjects[2] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[2].source}
          LeftTitle={LeftRandomObjects[2].title}
          LeftURL={LeftRandomObjects[2].url}
          LeftPicture={LeftRandomObjects[2].picture}
          CenterSource={CenterRandomObjects[2].source}
          CenterTitle={CenterRandomObjects[2].title}
          CenterURL={CenterRandomObjects[2].url}
          CenterPicture={CenterRandomObjects[2].picture}
          RightSource={RightRandomObjects[2].source}
          RightTitle={RightRandomObjects[2].title}
          RightURL={RightRandomObjects[2].url}
          RightPicture={RightRandomObjects[2].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 3 &&
      LeftRandomObjects[3] &&
      CenterRandomObjects.length > 3 &&
      CenterRandomObjects[3] &&
      RightRandomObjects.length > 3 &&
      RightRandomObjects[3] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[3].source}
          LeftTitle={LeftRandomObjects[3].title}
          LeftURL={LeftRandomObjects[3].url}
          LeftPicture={LeftRandomObjects[3].picture}
          CenterSource={CenterRandomObjects[3].source}
          CenterTitle={CenterRandomObjects[3].title}
          CenterURL={CenterRandomObjects[3].url}
          CenterPicture={CenterRandomObjects[3].picture}
          RightSource={RightRandomObjects[3].source}
          RightTitle={RightRandomObjects[3].title}
          RightURL={RightRandomObjects[3].url}
          RightPicture={RightRandomObjects[3].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 4 &&
      LeftRandomObjects[4] &&
      CenterRandomObjects.length > 4 &&
      CenterRandomObjects[4] &&
      RightRandomObjects.length > 4 &&
      RightRandomObjects[4] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[4].source}
          LeftTitle={LeftRandomObjects[4].title}
          LeftURL={LeftRandomObjects[4].url}
          LeftPicture={LeftRandomObjects[4].picture}
          CenterSource={CenterRandomObjects[4].source}
          CenterTitle={CenterRandomObjects[4].title}
          CenterURL={CenterRandomObjects[4].url}
          CenterPicture={CenterRandomObjects[4].picture}
          RightSource={RightRandomObjects[4].source}
          RightTitle={RightRandomObjects[4].title}
          RightURL={RightRandomObjects[4].url}
          RightPicture={RightRandomObjects[4].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 5 &&
      LeftRandomObjects[5] &&
      CenterRandomObjects.length > 5 &&
      CenterRandomObjects[5] &&
      RightRandomObjects.length > 5 &&
      RightRandomObjects[5] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[5].source}
          LeftTitle={LeftRandomObjects[5].title}
          LeftURL={LeftRandomObjects[5].url}
          LeftPicture={LeftRandomObjects[5].picture}
          CenterSource={CenterRandomObjects[5].source}
          CenterTitle={CenterRandomObjects[5].title}
          CenterURL={CenterRandomObjects[5].url}
          CenterPicture={CenterRandomObjects[5].picture}
          RightSource={RightRandomObjects[5].source}
          RightTitle={RightRandomObjects[5].title}
          RightURL={RightRandomObjects[5].url}
          RightPicture={RightRandomObjects[5].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 6 &&
      LeftRandomObjects[6] &&
      CenterRandomObjects.length > 6 &&
      CenterRandomObjects[6] &&
      RightRandomObjects.length > 6 &&
      RightRandomObjects[6] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[6].source}
          LeftTitle={LeftRandomObjects[6].title}
          LeftURL={LeftRandomObjects[6].url}
          LeftPicture={LeftRandomObjects[6].picture}
          CenterSource={CenterRandomObjects[6].source}
          CenterTitle={CenterRandomObjects[6].title}
          CenterURL={CenterRandomObjects[1].url}
          CenterPicture={CenterRandomObjects[6].picture}
          RightSource={RightRandomObjects[6].source}
          RightTitle={RightRandomObjects[6].title}
          RightURL={RightRandomObjects[6].url}
          RightPicture={RightRandomObjects[6].picture}
        />
      ) : null}
      {LeftRandomObjects.length > 7 &&
      LeftRandomObjects[7] &&
      CenterRandomObjects.length > 7 &&
      CenterRandomObjects[7] &&
      RightRandomObjects.length > 7 &&
      RightRandomObjects[7] ? (
        // Access and pass the objects' properties as props to the component
        <NewsCard
          LeftSource={LeftRandomObjects[7].source}
          LeftTitle={LeftRandomObjects[7].title}
          LeftURL={LeftRandomObjects[7].url}
          LeftPicture={LeftRandomObjects[7].picture}
          CenterSource={CenterRandomObjects[7].source}
          CenterTitle={CenterRandomObjects[7].title}
          CenterURL={CenterRandomObjects[7].url}
          CenterPicture={CenterRandomObjects[7].picture}
          RightSource={RightRandomObjects[7].source}
          RightTitle={RightRandomObjects[7].title}
          RightURL={RightRandomObjects[7].url}
          RightPicture={RightRandomObjects[7].picture}
        />
      ) : null}
    </div>
  );
};

export default App;
