import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import a from "./Alert.module.css";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <div
      className={`${a.alert} ${alert !== null && a.show} ${
        alert !== null && alert.type === "red" && a.red
      } ${alert !== null && alert.type === "green" && a.green}`}
    >
      {alert !== null && alert.msg}
    </div>
  );
}
export default Alert;
