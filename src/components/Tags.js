import classes from "../styles/css/Tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {tags.map((tags, index) => {
          return (
            <li className={classes.tags} key={index}>
              {tags}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
