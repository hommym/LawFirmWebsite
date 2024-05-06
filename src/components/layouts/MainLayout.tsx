import { Outlet } from "react-router-dom";
import Footer from "../molecules/Footer";
// import Header from "../molecules/Header";
// import { useState } from "react";

const MainLayout = () => {
	// const [isTransparent, setIsTransparent] = useState(false);
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
