import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleModel from "./pages/ArticleModel";

function App() {
  return (
    <>
      <Routes>
				<Route path="/" element={<Home/>} />
        <Route path="article" element={<ArticleModel/>} />
			</Routes>
    </>
  )
}

export default App
