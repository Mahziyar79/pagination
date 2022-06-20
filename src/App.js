import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<PostDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
