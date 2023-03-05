import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDark from '../views/HomeDark';
import NotFound from '../views/NotFound';

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeDark />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
