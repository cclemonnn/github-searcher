import UserResults from "../components/users/UserResults";
import h from "./Home.module.css";

function Home() {
  return (
    <div className={h.container}>
      <UserResults />
    </div>
  );
}
export default Home;
