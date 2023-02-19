import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  if (alert !== null) {
    return <div>{alert.msg}</div>;
  } else {
    return <div className=""></div>;
  }
}
export default Alert;
