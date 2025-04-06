import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<ComingSoon />}
        />
        <Route
          path='/home'
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
