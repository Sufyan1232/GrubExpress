import React from 'react';
import Footer from './components/Footer';
import Top from "./components/Top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import New from './Header';
import Aboutus from "./pages/Aboutus";
import Courier from "./pages/Courier";
import Logistic from "./pages/Logistic";
import Cod from './pages/Cod';
import Contact from "./pages/Contact";
import Carrers from "./pages/Carrers";
import GrubHome from './pages/GrubHome';
import Faq from './components/Faq';
import "./App.css";



function App() {
	return (
		
		<React.Fragment className="desktop">
			<Router>
			
			<Top />
			<New />
			<div>
			<Routes>
				<Route exact path="/" element={<GrubHome />} />
				<Route exact path="/aboutus" element={<Aboutus />} />
				<Route exact path="/courier" element={<Courier />} />
				<Route exact path="/logistic" element={<Logistic />} />
				<Route exact path="/cod" element={<Cod />} />				
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/carrers" element={<Carrers />} />
        <Route exact path="/faq" element={<Faq />} />
			</Routes>
		</div>
			<Footer />


			</Router>
		</React.Fragment>
		
	);
}

export default App;

