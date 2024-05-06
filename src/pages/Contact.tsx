import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import Header from "../components/molecules/Header";

const initial = {
	firstName: "",
	lastName: "",
	email: "",
	tel: "",
	orgName: "",
	address: "",
	industryInfo: "",
	position: "",
	message: "",
};

const Contact = () => {
	const [formData, setFormData] = useState(initial);
	const [loading, setLoading] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const storeData = (e: any) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sendContactMsg = async (e: any) => {
		e.preventDefault();
		const { firstName, lastName, email, tel, orgName, address, industryInfo, position, message } = formData;
		if (!firstName || !lastName || !email || !tel || !orgName || !address || !industryInfo || !position || !message) {
			toast.error("Please provide all required fields", { autoClose: 1500 });
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Please provide a valid email address", { autoClose: 1500 });
			return;
		}
		if (!/^\+?[0-9\s-()]{8,}$/.test(tel)) {
			toast.error("Please provide a valid phone number", { autoClose: 1500 });
			return;
		}
		try {
			setLoading(true);
			await axios.post("https://truongllc.pro/api/contact-us", {
				firstName,
				lastName,
				email,
				tel,
				orgName,
				address,
				industryInfo,
				position,
				message,
			});

			toast.success("Your message was successfully sent...", { autoClose: 1500 });
			setFormData(initial);
			setLoading(false);
		} catch (e) {
			setLoading(false);
		}
	};
	return (
		<>
			<Header sx="!relative" />
			<div id="contacts" className="">
				<div id="middle-section">
					<h4 id="first-text" className="">
						CONTACT US
					</h4>

					<h2 id="second-text" className="text-xl md:mt-2 md:mb-6 md:text-5xl">
						Book a Consultation
					</h2>

					<form id="form-section" className="max-w-[700px]  mx-auto py-4" method="post" aria-label="Contact form">
						<div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
							<div className="left-side">
								<div className="labels">FirstName*</div>
								<div>
									<input className="text-field" value={formData?.firstName} onChange={storeData} placeholder="First Name" type="text" name="firstName"></input>
								</div>
							</div>
							<div className="right-side ml-0">
								<div className="labels">LastName*</div>
								<div>
									<input className="text-field" value={formData?.lastName as string} onChange={storeData} placeholder="Last Name" type="text" name="lastName"></input>
								</div>
							</div>
						</div>
						<div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
							<div className="left-side">
								<div className="labels">Email*</div>
								<div>
									<input className="text-field" value={formData?.email as string} onChange={storeData} placeholder="your@company.com" type="text" name="email"></input>
								</div>
							</div>
							<div className="right-side ml-0">
								<div className="labels">Phone*</div>
								<div>
									<input className="text-field" onChange={storeData} value={formData?.tel as string} placeholder="2125552345" type="text" name="tel"></input>
								</div>
							</div>
						</div>
						<div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
							<div className="left-side">
								<div className="labels">Organisation*</div>
								<div>
									<input className="text-field" onChange={storeData} value={formData?.orgName as string} placeholder="Your Organisation" type="text" name="orgName"></input>
								</div>
							</div>
							<div className="right-side ml-0">
								<div className="labels">Address*</div>
								<div>
									<input className="text-field" onChange={storeData} value={formData?.address as string} placeholder="Your Address" type="text" name="address"></input>
								</div>
							</div>
						</div>
						<div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
							<div className="left-side">
								<div className="labels">Industry*</div>
								<div>
									<input className="text-field" onChange={storeData} value={formData?.industryInfo as string} placeholder="Information" type="text" name="industryInfo"></input>
								</div>
							</div>
							<div className="right-side ml-0">
								<div className="labels">Position*</div>
								<div>
									<input className="text-field" onChange={storeData} value={formData?.position as string} placeholder="your position" type="text" name="position"></input>
								</div>
							</div>
						</div>
						<div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row w-full">
							<div className="w-full">
								{/* <input id="message-box" placeholder="Leave us a message..." type="text" name="firstName"></input> */}
								<div className="left-side ">
									<div className="labels">Message*</div>
									<textarea
										name="message"
										value={formData?.message as string}
										onChange={storeData}
										className="hover:outline-[#be9030] w-full p-4 h-48 rounded-[10px]  border-[1px] resize-none mx-auto"></textarea>
								</div>
							</div>
						</div>
						<div className="mt-12">
							<button id="submit-button" className={`w-full md:w-[200px] ${loading ? "!bg-opacity-80" : ""}`} disabled={loading} onClick={sendContactMsg}>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Contact;
