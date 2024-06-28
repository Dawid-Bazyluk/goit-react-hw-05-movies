import { Circles } from "react-loader-spinner";
import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="grey"
      ariaLabel="circles-loading"
      className={style.loader}
    />
  );
};

export default Loader;
