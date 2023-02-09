import m from "./Main.module.css";

function Main({ children }) {
  return <main className={m.main}>{children}</main>;
}
export default Main;
