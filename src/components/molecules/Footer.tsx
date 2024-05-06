import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full min-h-[50vh] pt-20 pb-10 footer_bg">
			<div className="w-full max-w-6xl mx-auto ">
				<div className="flex items-center justify-between ">
					<div className="w-[70%]">
						<div className="w-full pb-5 border-b-[1px]">
							<h1 className="font-semibold text-4xl">Stay updated</h1>
							<p className="w-2/5 mt-4 text-desc">Learn more about our services and get the latest legal insights.</p>

							<div className="w-1/2 bg-[red] h-12 mt-4"></div>
						</div>
						<nav className="my-5 w-3/5 flex items-center justify-between">
							<Link to="/terms-of-use" className="text-white font-poppins text-sm">
								Terms & Conditions
							</Link>
							<Link to="/privacy-policy" className="text-white font-poppins text-sm">
								Privacy Policies
							</Link>
							<Link to="/disclaimer" className="text-white font-poppins text-sm">
								Disclaimer
							</Link>
							<Link to="/references" className="text-white font-poppins text-sm">
								References
							</Link>
						</nav>

						<p>&copy; Al Riyami Advocates & Muhyealdeen International Legal Consultants.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
