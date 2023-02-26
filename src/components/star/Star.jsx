import { FaStar, FaRegStar } from "react-icons/fa";
import s from "./Star.module.css";

function Star({ style }) {
  return (
    <>
      {/* <FaStar className={s.star} /> */}
      <FaRegStar className={s.star} style={style} />
    </>
  );
}
export default Star;
