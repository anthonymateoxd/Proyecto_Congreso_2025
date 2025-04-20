import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import HomePage from './pages/HomePage';
import VerifyTime from './verify/verifyTime';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<VerifyTime />}>
          <Route
            path='/'
            element={<ComingSoon />}
          />
          <Route
            path='/home'
            element={<HomePage />}
          />
          {/* Redirecciones para manejar accesos no permitidos */}
          <Route
            path='*'
            element={
              <Navigate
                to='/'
                replace
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
