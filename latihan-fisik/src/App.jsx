import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';

const LatihanFisik = React.lazy(() =>
  import('../src/components/pages/LatihanFisik/LatihanFisik')
);
const RekomendasiLatihanFisik = React.lazy(() =>
  import(
    '../src/components/pages/RekomendasiLatihanFisik/RekomendasiLatihanFisik'
  )
);
const DetailLatihanFisik = React.lazy(() =>
  import('./components/pages/DetailLatihanFisik/DetailLatihanFisik')
);

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/latihan-fisik" />} />
            <Route path="/latihan-fisik" element={<LatihanFisik />} />
            <Route
              path="/rekomendasi-latihan-fisik"
              element={<RekomendasiLatihanFisik />}
            />
            <Route
              path="/detail-latihan-fisik"
              element={<DetailLatihanFisik />}
            />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
