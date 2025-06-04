import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import ArticleModel from "./pages/ArticleModel";
import PosterPage from "./pages/PosterPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
			<Routes>
				<Route path="/" element={<Home/>} />
        <Route path="/articles" element={<ArticlePage/>} />
        <Route path="/posters" element={<PosterPage/>} />
        <Route path="/about" element={<AboutPage/>} />

        <Route path="/article" element={<ArticleModel/>} />
			</Routes>
  )
}

export default App
