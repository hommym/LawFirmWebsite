import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Philosophy from "./pages/About/Philosophy";
import Team from "./pages/About/Team";
import History from "./pages/About/History";
import Clients from "./pages/Clients";

function App() {
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
				</Route>
			</Routes>
		</main>
	);
}

export default App;
