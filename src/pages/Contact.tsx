import Header from "../components/molecules/Header";

const Contact = () => {
	return (
		<>
			<Header sx="!relative" />
			<div id="contacts">
				<div id="middle-section">
					<h4 id="first-text">CONTACT US</h4>

					<h2 id="second-text">Book a Consultation</h2>

					<form id="form-scetion" action="/api/contact-us" method="post" aria-label="Contact form">
						<div className="contact-row">
							<div className="left-side">
								<div className="labels">FirstName*</div>
								<div>
									<input className="text-field" placeholder="First Name" type="text" name="firstName"></input>
								</div>
							</div>
							<div className="right-side">
								<div className="labels">LastName*</div>
								<div>
									<input className="text-field" placeholder="Last Name" type="text" name="lastName"></input>
								</div>
							</div>
						</div>
						<div className="contact-row">
							<div className="left-side">
								<div className="labels">Email*</div>
								<div>
									<input className="text-field" placeholder="your@company.com" type="text" name="email"></input>
								</div>
							</div>
							<div className="right-side">
								<div className="labels">Phone*</div>
								<div>
									<input className="text-field" placeholder="+1-212-555-2345" type="text" name="tel"></input>
								</div>
							</div>
						</div>
						<div className="contact-row">
							<div className="left-side">
								<div className="labels">Organisation*</div>
								<div>
									<input className="text-field" placeholder="Your Organisation" type="text" name="orgName"></input>
								</div>
							</div>
							<div className="right-side">
								<div className="labels">Address*</div>
								<div>
									<input className="text-field" placeholder="Your Address" type="text" name="address"></input>
								</div>
							</div>
						</div>
						<div className="contact-row">
							<div className="left-side">
								<div className="labels">Industry*</div>
								<div>
									<input className="text-field" placeholder="Information" type="text" name="industryInfo"></input>
								</div>
							</div>
							<div className="right-side">
								<div className="labels">Position*</div>
								<div>
									<input className="text-field" placeholder="your position" type="text" name="position"></input>
								</div>
							</div>
						</div>
						<div className="contact-row w-full">
							<div>
								{/* <input id="message-box" placeholder="Leave us a message..." type="text" name="firstName"></input> */}
								<div className="left-side ml-10">
									<div className="labels">Position*</div>
									<textarea name="" id="" className="hover:outline-[#be9030] p-4 h-48 rounded-[10px] w-[740px] border-[1px] resize-none mx-auto"></textarea>
								</div>
							</div>
						</div>
						<div>
							<input id="submit-button" type="submit" value="Send Message"></input>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
