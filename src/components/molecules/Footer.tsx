import { Link } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";

const Footer = () => {
	return (
		<footer className="w-full min-h-[50vh] pt-20 pb-10 footer_bg">
			<div className="w-full max-w-6xl mx-auto ">
				<div className="flex items-center justify-between ">
					<div className="w-[70%]">
						<div className="w-full pb-8 border-b-[1px]">
							<h1 className="font-semibold text-4xl">Stay updated</h1>
							<p className="w-2/5 mt-2 text-white">Learn more about our services and get the latest legal insights.</p>

							<div className="w-1/2 border-[1px] rounded-[5px] flex items-center justify-between h-12 mt-8">
								<input type="text" className="w-full focus:outline-0 bg-transparent h-full text-white px-4" placeholder="What's your email" />
								<PrimaryButton text="Subscribe" sx="relative left-[2px] !h-[calc(100%+3px)] !rounded-[0px] !bg-[#BE9030] px-4" textSx="!text-[15px]" />
							</div>
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

						<p className="text-[15px] text-decs">&copy; 2023 Truong LLC Block B, Latifa Tower - Office No. 1107, 11th Floor - Sheikh Zayed Rd - Dubai - United Arab Emirates.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
