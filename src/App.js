import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 정적 라우터 지원 */}
        <Route path="/movie/:id"  element={<Detail />} /> {/* 동적 라우터 지원: [:id]로 적어야 됨 */}
      </Routes>
    </Router>
  );
}

export default App;