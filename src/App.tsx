import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import PosterPage from "./pages/PosterPage";
import AboutPage from "./pages/AboutPage";

import ArticleAICost from "./pages/articles/ArticleAICost";
import ArticleCrypto from "./pages/articles/ArticleCrypto";
import ArticleDigitalRecycling from "./pages/articles/ArticleDigitalRecycling";
import ArticleEletronicsLifeCycle from "./pages/articles/ArticleEletronicsLifeCycle";

function App() {
  return (
			<Routes>
				<Route path="/" element={<Home/>} />
        <Route path="/articles" element={<ArticlePage/>} />
        <Route path="/posters" element={<PosterPage/>} />
        <Route path="/about" element={<AboutPage/>} />

        <Route path="/articleAICost" element={<ArticleAICost/>} />
        <Route path="/articleCrypto" element={<ArticleCrypto/>} />
        <Route path="/articleDigitalRecycling" element={<ArticleDigitalRecycling/>} />
        <Route path="/articleEletronicsLifeCycle" element={<ArticleEletronicsLifeCycle/>} />
			</Routes>
  )
}

export default App
