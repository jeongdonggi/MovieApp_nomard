import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import Search from "./routes/Search";
import "./App.css";
import ActorMovie from "./routes/ActorMovie";
import NowPlay from "./routes/NowPlay";
import SearchBar from "./components/SearchBar";
import Genres from "./routes/Genres";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="left-20">
          <h1>Movie Web</h1>
          <SearchBar />
          <Navigation />
        </div>
        <div className="right-80">
          <Routes>
            <Route path="/" element={<Home />} /> {/* 정적 라우터 지원 */}
            <Route path="/movie/:id"  element={<Detail />} /> {/* 동적 라우터 지원: [:id]로 적어야 됨 */}
            <Route path="/search/:word" element={<Search />} />
            <Route path="/find/:actid" element={<ActorMovie />} />
            <Route path="/now" element={<NowPlay />} />
            <Route path="/genre/:genresid" element={<Genres />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;