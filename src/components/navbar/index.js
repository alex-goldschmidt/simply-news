import { Link } from "@mui/material";
import styles from "../navbar/navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className={styles.outline}>
      <div className={styles.content}>
        <div className={styles.LeftSide}>SimplyNews</div>

        <div className={styles.RightSide}>
          <Link className={styles.link} to="">
            Home
          </Link>
          <Link className={styles.link} to="">
            Tech
          </Link>
          <Link className={styles.link} to="">
            China
          </Link>
          <AccountCircleIcon className={styles.link} to="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
