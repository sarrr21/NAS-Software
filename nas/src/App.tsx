import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/contact';
import About from './components/About';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;