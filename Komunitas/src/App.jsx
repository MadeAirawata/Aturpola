import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import KomunitasUser from "./pages/KomunitasUser";
import DetailPost from "./pages/DetailPost";
import KomunitasGuest from "./pages/KomunitasGuest";

function App() {
  const { param } = useParams();

  return (
    <Router>
      <Routes>
        <Route exact path="komunitas-guest" element={<KomunitasGuest />} />
        <Route path="komunitas-user/:name" element={<KomunitasUser />} />
        <Route path="detail-post/:name" element={<DetailPost />} />
      </Routes>
    </Router>
  );
}

export default App;
