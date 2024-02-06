import '@/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/routes/Home/Home';
import Challenges from '@/routes/Challenges/Challenges';
import Layout from '@/components/Layout/Layout';
import Palindrome from '@/routes/Challenges/Palindrome/Palindrome';
import ArrayDeduplication from '@/routes/Challenges/ArrayDeduplication/ArrayDeduplication';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges/palindrome" element={<Palindrome />} />
          <Route
            path="/challenges/arraydeduplication"
            element={<ArrayDeduplication />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
