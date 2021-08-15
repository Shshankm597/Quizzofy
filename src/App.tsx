import "./styles.css";
import { Dashboard, Home, Navbar, QuizPage } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz/:quizId"
            element={<QuizPage/>}
          />
          <Route path="/dashboard/:quizId" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
