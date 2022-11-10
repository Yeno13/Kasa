import StarIcon from "@mui/icons-material/Star";
import classes from "../styles/css/StarRating.module.scss";

const StarRating = ({ stars }) => {
  const totalStars = 5;
  const activeStars = stars;
  return (
    <div className={classes.rating}>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <StarIcon key={index} className={classes.icon} />
        ) : (
          <StarIcon key={index} className={classes.border} />
        );
      })}
    </div>
  );
};

export default StarRating;
