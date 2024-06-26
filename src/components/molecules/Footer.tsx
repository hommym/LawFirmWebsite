import { Link } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
	const [newsletter, setNewsletter] = useState("");

	const newsLetter = (e: FormEvent) => {
		e.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(newsletter)) {
			toast.error("Please provide a valid email address", { autoClose: 1500 });
			return;
		}

		setTimeout(() => {
			toast.success("Newsletter registration successful...", { autoClose: 1500 });
			setNewsletter("");
		}, 2000);
	};
	return (
		<footer className="w-full px-4 lg:min-h-[50vh] pt-20 pb-10 footer_bg">
			<div className="w-full max-w-6xl mx-auto ">
				<div className="flex items-center justify-between ">
					<div className="w-full md:w-[70%]">
						<div className="w-full pb-8 border-b-[1px]">
							<h1 className="font-semibold text-4xl">Stay updated</h1>
							<p className="md:w-2/5 mt-2 text-white">Learn more about our services and get the latest legal insights.</p>

							<div className="lg:w-1/2 border-[1px] rounded-[5px] flex items-center justify-between h-12 mt-8">
								<input
									type="text"
									value={newsletter}
									onChange={(e) => setNewsletter(e.target.value)}
									className="w-full focus:outline-0 bg-transparent h-full text-white px-4"
									placeholder="What's your email"
								/>
								<PrimaryButton
									text="Subscribe"
									sx="relative left-[2px] !h-[calc(100%+3px)] !rounded-[0px] !bg-[#BE9030] px-4"
									textSx="!text-[15px]"
									handleClick={(e) => newsLetter(e)}
								/>
							</div>
						</div>
						<nav className="my-5 w-full md:w-4/5 lg:w-3/5 flex items-center justify-between">
							<Link to="/terms-of-use" className="text-white font-poppins text-[10px] md:text-sm">
								Terms & Conditions
							</Link>
							<Link to="/privacy-policy" className="text-white font-poppins text-[10px] md:text-sm">
								Privacy Policies
							</Link>
							<Link to="/disclaimer" className="text-white font-poppins text-[10px] md:text-sm">
								Disclaimer
							</Link>
							<Link to="/references" className="text-white font-poppins text-[10px] md:text-sm">
								References
							</Link>
						</nav>

						<p className="text-[12px] md:text-[15px] text-decs">
							&copy; 2023 Truong LLC Block B, Latifa Tower - Office No. 1107, 11th Floor - Sheikh Zayed Rd - Dubai - United Arab Emirates.
						</p>
					</div>
				</div>
			</div>
			<ToastContainer />
		</footer>
	);
};

export default Footer;
