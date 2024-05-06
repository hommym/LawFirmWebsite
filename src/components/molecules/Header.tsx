import { Link, useLocation } from "react-router-dom";

import links from "../../data/header";
import DropDown from "./NavDrops";
import PhoneMenu from "./PhoneMenu";

import LogoImage from "../../assets/logo.jpeg";

import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

const Header = ({ isTransparent = false, sx = "" }: { isTransparent?: boolean; sx?: string }) => {
	const { pathname } = useLocation();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<header className={`${sx} ${!isTransparent ? "bg-black" : "bg-transparent"} absolute px-4 w-full py-2 top-0 left-0`}>
			<div className="w-full flex items-center h-auto  max-w-6xl justify-between mx-auto">
				<Link to="/" className="w-[150px] md:w-[200px] md:h-12 ">
					<img src={LogoImage} alt="" />
				</Link>

				<nav className="hidden h-full md:flex gap-12 items-stretch">
					{links?.map((link, index) => (
						<DropDown {...link} key={index} isActive={pathname?.startsWith(link.check)} />
					))}
					<Link className={`py-8  ${pathname === "/expertise" ? "text-sec" : "text-white hover:text-sec"} text-sm`} to="/our-clients">
						Our Expertise
					</Link>
					<Link className={`py-8  ${pathname === "/our-clients" ? "text-sec" : "text-white hover:text-sec"} text-sm`} to="/our-clients">
						Our Clients
					</Link>
					<Link className={`py-8 ${pathname === "/contact" ? "text-sec" : "text-white hover:text-sec"} text-sm`} to="/contact">
						Contact Us
					</Link>
				</nav>

				<button className="md:hidden w-8 h-8 bg-sec flex items-center justify-center" onClick={() => setShowMobileMenu(true)}>
					<AiOutlineMenuFold className="text-2xl" />
				</button>
			</div>
			{<PhoneMenu setShowMenu={setShowMobileMenu} showMenu={showMobileMenu} />}
		</header>
	);
};

export default Header;
