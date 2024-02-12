import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

export const App = () => {
  return (
    <Router basename="/MovieApp_nomard">
      <Routes>
        <Route path="/" element={<Home />} /> {/* 정적 라우터 지원 */}
        <Route path="/movie/:id"  element={<Detail />} /> {/* 동적 라우터 지원: [:id]로 적어야 됨 */}
      </Routes>
    </Router>
  );
}

export default App;