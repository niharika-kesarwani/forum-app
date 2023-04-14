import { Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { Questions } from './pages/Questions';
import { Answer } from './pages/Answer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/questions" element={<Questions />}/>
        <Route path="/answer/:questionId" element={<Answer />}/>
      </Routes>
    </div>
  );
}

export default App;
