import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
