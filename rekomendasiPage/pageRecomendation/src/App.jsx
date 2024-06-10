import { Routes, Route } from 'react-router-dom'
import Makanansehat from './pages/Makanansehat';
import Latihanfisik from './pages/Latihanfisik';
import Navbarpage from './components/Navbarpage';
// import Footerpage from './components/footerpage';

function App() {
  return (
    <div>
      <Navbarpage />
      <Routes>
        <Route path="/Makanansehat" Component={Makanansehat} />
        <Route path="/Latihanfisik" Component={Latihanfisik} />
      </Routes>
      {/* <Footerpage /> */}
    </div>
  );
}

export default App
