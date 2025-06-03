import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ResetScroll from "./functions/ResetScroll.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ResetScroll/>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);