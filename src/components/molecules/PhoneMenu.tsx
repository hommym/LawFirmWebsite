// import links from "@/data/links";
import React, { useState } from "react";

import { IoClose } from "react-icons/io5";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";

const links = [
	{
		name: "Our Expertise",
		href: "/expertise",
		start: "/expertise",
	},
	{
		name: "Our Clients",
		href: "/our-clients",
		start: "/our-clients",
	},
	{
		name: "Contact Us",
		href: "/contact",
		start: "/contact",
	},
];

const PhoneMenu = ({ setShowMenu, showMenu }: { setShowMenu: React.Dispatch<React.SetStateAction<boolean>>; showMenu: boolean }) => {
	const { pathname } = useLocation();
	const [showAccordion, setShowAccordion] = useState(pathname.startsWith("/about") || false);
	return (
		<aside className={`block lg:hidden md:w-1/2 w-full transition-all duration-350 z-[5] bg-black top-0 ${showMenu ? "right-0" : "-right-[100%]"} fixed h-screen p-4`}>
			<div className="w-full">
				<button className="w-10 h-10 hover:bg-projectDesc text-white ml-auto  flex items-center justify-center" onClick={() => setShowMenu(false)}>
					<IoClose className="text-default text-3xl" />
				</button>
			</div>

			<nav className="w-full h-auto mt-8">
				<div className="w-full mb-6">
					<button className={`text-white  hover:bg-sec w-full p-3  flex items-center justify-between font-medium text-sm`} onClick={() => setShowAccordion((prev) => !prev)}>
						About
						<span>{!showAccordion ? <IoChevronDownOutline className="text-2xl" /> : <IoChevronUpOutline className="text-2xl" />}</span>
					</button>

					<div className={`w-full px-4 ${showAccordion ? "h-40 mt-2" : "h-0"}  overflow-hidden transition-all duration-200`}>
						<Link
							className={` p-3 mb-3 block font-medium ${pathname === "/about/our-team" ? "bg-slate-400" : "hover:bg-slate-400"} text-sm`}
							to={"/about/our-team"}
							onClick={() => setShowMenu(false)}>
							Our Team
						</Link>
						<Link
							className={` p-3 mb-3 block font-medium ${pathname === "/about/our-philosophy" ? "bg-slate-400" : "hover:bg-slate-400"} text-sm`}
							to={"/about/our-philosophy"}
							onClick={() => setShowMenu(false)}>
							Our Philosophy
						</Link>
						<Link
							className={`p-3 mb-3 block font-medium ${pathname === "/about/history" ? "bg-slate-400" : "hover:bg-slate-400"} text-sm`}
							to="/about/history"
							onClick={() => setShowMenu(false)}>
							History
						</Link>
					</div>
				</div>
				{links?.map((link, index) => (
					<Link
						className={`${pathname.startsWith(link.start) ? "bg-sec" : "text-white hover:bg-sec"} p-3 mb-6  block font-medium text-sm`}
						key={index}
						to={link?.href}
						onClick={() => setShowMenu(false)}>
						{link?.name}
					</Link>
				))}
			</nav>
		</aside>
	);
};

export default PhoneMenu;
