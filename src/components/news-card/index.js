import styles from "./news-card.module.css";
import { CardMedia } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { useState } from "react";

const NewsCard = (props) => {
  const [value, setValue] = useState("");
  const [headline, setHeadline] = useState("");
  const [source, setSource] = useState("");
  const [URL, setURL] = useState("");
  const [picture, setPicture] = useState("");
  const {
    LeftTitle,
    LeftURL,
    LeftSource,
    LeftPicture,
    RightTitle,
    RightURL,
    RightSource,
    RightPicture,
    CenterTitle,
    CenterURL,
    CenterSource,
    CenterPicture,
  } = props;

  const handleButtonChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "Left") {
      console.log("Left click");
      setHeadline(LeftTitle);
      setSource(LeftSource);
      setURL(LeftURL);
      setPicture(LeftPicture);
    }
    if (newValue === "Center") {
      console.log("Center click");
      setHeadline(CenterTitle);
      setSource(CenterSource);
      setURL(CenterURL);
      setPicture(CenterPicture);
    }
    if (newValue === "Right") {
      console.log("Right click");
      setHeadline(RightTitle);
      setSource(RightSource);
      setURL(RightURL);
      setPicture(RightPicture);
    }
  };

  return (
    <div className={styles.container}>
      <CardMedia
        className={styles.picture}
        sx={{
          maxHeight: { xs: 233, md: 183 },
          maxWidth: { xs: 320, md: 225 },
        }}
        component="img"
        alt="Toggle for Image"
        src={picture} //"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <div className={styles.ArticleContent}>
        <p className={styles.headline}>
          <a href={URL}>{headline}</a>
        </p>
        <p className={styles.source}>{source}</p>
        <ToggleButtonGroup
          className={styles.ToggleButtonGroup}
          color="primary"
          value={value}
          exclusive
          onChange={handleButtonChange}
          aria-label="Platform"
        >
          <ToggleButton style={{ color: "Blue" }} value="Left">
            Left
          </ToggleButton>
          <ToggleButton style={{ color: "Gray" }} value="Center">
            Center
          </ToggleButton>
          <ToggleButton style={{ color: "Red" }} value="Right">
            Right
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default NewsCard;
