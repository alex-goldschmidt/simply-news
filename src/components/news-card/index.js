import styles from "./news-card.module.css";
import { CardMedia } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { useContext } from "react";
import { parentContext } from "../../App";

const NewsCard = (props) => {
  const { handleButtonChange } = useContext(parentContext);
  return (
    <div className={styles.container}>
      <CardMedia
        className={styles.picture}
        sx={{
          maxHeight: { xs: 233, md: 183 },
          maxWidth: { xs: 320, md: 225 },
        }}
        component="img"
        alt="No Image Here :("
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <div className={styles.ArticleContent}>
        <p className={styles.headline}>{props.headline}</p>
        <p className={styles.source}>{props.source}</p>
        <ToggleButtonGroup
          className={styles.ToggleButtonGroup}
          color="primary"
          exclusive
          onChange={handleButtonChange}
          aria-label="Platform"
        >
          <ToggleButton style={{ color: "Blue" }} value="Left">
            Left
          </ToggleButton>
          <ToggleButton style={{ color: "rgba(0, 0, 0, 0.54)" }} value="Center">
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
