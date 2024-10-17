import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/contact';
import About from './components/About';
import Layout from './components/Layout';
import Team from './components/OurTeam';
import ProductList from './components/work';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<ProductList />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;