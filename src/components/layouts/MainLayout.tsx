import { Outlet } from "react-router-dom";
import Footer from "../molecules/Footer";

const MainLayout = () => {
	return (
		<div className="w-full h-auto relative">
			<main className="w-full ">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
