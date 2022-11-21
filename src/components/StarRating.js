// import StarIcon from "@mui/icons-material/Star";
import { FaStar } from "react-icons/fa";
import classes from "../styles/css/StarRating.module.scss";

const StarRating = ({ stars }) => {
  const totalStars = 5;
  const activeStars = stars;
  return (
    <div className={classes.rating}>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <FaStar key={index} className={classes.red} />
        ) : (
          <FaStar key={index} className={classes.grey} />
        );
      })}
    </div>
  );
};

export default StarRating;
