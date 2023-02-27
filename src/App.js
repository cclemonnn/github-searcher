import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Favourites from "./components/layout/Favourites";
import Main from "./components/layout/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Alert from "./components/layout/Alert";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import { FavListProvider } from "./context/favList/FavListContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <FavListProvider>
          <BrowserRouter>
            <Navbar />
            <Alert />
            <Main>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </Main>
            <Favourites />
          </BrowserRouter>
        </FavListProvider>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
