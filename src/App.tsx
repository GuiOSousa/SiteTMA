import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import PosterPage from "./pages/PosterPage";
import AboutPage from "./pages/AboutPage";

import ArticleAICost from "./pages/articles/ArticleAICost";


function App() {
  return (
			<Routes>
				<Route path="/" element={<Home/>} />
        <Route path="/articles" element={<ArticlePage/>} />
        <Route path="/posters" element={<PosterPage/>} />
        <Route path="/about" element={<AboutPage/>} />

        <Route path="/articleAICost" element={<ArticleAICost/>} />
			</Routes>
  )
}

export default App
