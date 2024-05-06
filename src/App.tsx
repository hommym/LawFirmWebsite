import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Philosophy from "./pages/About/Philosophy";
import Team from "./pages/About/Team";
import History from "./pages/About/History";
import Clients from "./pages/Clients";
import References from "./pages/References";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicies";
import TermsOfUse from "./pages/TermsAndConditions";
import { useEffect } from "react";

function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<main>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Homepage />}></Route>
					<Route path="contact" element={<Contact />}></Route>

					<Route path="about">
						<Route path="our-philosophy" element={<Philosophy />}></Route>
						<Route path="history" element={<History />}></Route>
						<Route path="our-team" element={<Team />}></Route>
					</Route>

					<Route path="our-clients" element={<Clients />}></Route>
					<Route path="references" element={<References />}></Route>
					<Route path="disclaimer" element={<Disclaimer />}></Route>
					<Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
					<Route path="terms-of-use" element={<TermsOfUse />}></Route>
				</Route>
			</Routes>
		</main>
	);
}

export default App;
