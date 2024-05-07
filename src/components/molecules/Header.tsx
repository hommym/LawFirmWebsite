import { Link, useLocation } from "react-router-dom";

import links from "../../data/header";
import DropDown from "./NavDrops";
import PhoneMenu from "./PhoneMenu";

import LogoImage from "../../assets/logo.png";

import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

const Header = ({ isTransparent = false, sx = "" }: { isTransparent?: boolean; sx?: string }) => {
	const { pathname } = useLocation();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<header className={`${sx} ${!isTransparent ? "bg-white" : "bg-transparent"} absolute z-[4] px-4 w-full py-2 top-0 left-0`}>
			<div className="w-full flex items-center h-auto  max-w-6xl justify-between mx-auto">
				<Link to="/" className="w-[200px] md:w-[300px] md:h-18">
					<img src={LogoImage} alt="" className="w-full h-full" />
				</Link>

				<nav className="hidden h-full md:flex gap-12 items-stretch">
					{links?.map((link, index) => (
						<DropDown {...link} key={index} isActive={pathname?.startsWith(link.check)} isTransparent={isTransparent} />
					))}
					<Link className={`py-8  ${pathname === "/expertise" ? "text-sec" : !isTransparent ? "text-black" : "text-white"} hover:text-sec text-sm`} to="/expertise">
						Our Expertise
					</Link>
					<Link className={`py-8  ${pathname === "/our-clients" ? "text-sec" : !isTransparent ? "text-black" : "text-white"} hover:text-sec text-sm`} to="/our-clients">
						Our Clients
					</Link>
					<Link className={`py-8 ${pathname === "/contact" ? "text-sec" : !isTransparent ? "text-black" : "text-white"} hover:text-sec text-sm`} to="/contact">
						Contact Us
					</Link>
				</nav>

				<button className="md:hidden w-8 h-8 bg-black text-white flex items-center justify-center" onClick={() => setShowMobileMenu(true)}>
					<AiOutlineMenuFold className="text-2xl" />
				</button>
			</div>
			{<PhoneMenu setShowMenu={setShowMobileMenu} showMenu={showMobileMenu} />}
		</header>
	);
};

export default Header;
