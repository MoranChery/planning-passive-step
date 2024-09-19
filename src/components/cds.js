// Filename - App.js

import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import MainCalculator from "./components/MainCalculator";

function App() {
	return (
		<>
			<BrowserRouter>
				<div>
					<div>
						<NavLink to="/">מחשבון עיקרי</NavLink>
					</div>
					<div>
						<NavLink to="/about">השקעה פסיבית VS. דירה להשקעה</NavLink>
					</div>
				</div>
				<Routes>
					<Route
						exact
						path="/"
						element={<MainCalculator />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
