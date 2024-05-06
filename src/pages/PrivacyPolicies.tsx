import Breadcrumbs, { ILink } from "../components/molecules/Breadcrumbs";
import Header from "../components/molecules/Header";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "PrivacyPolicy",
		link: "/privacy-policy",
	},
];
const PrivacyPolicy = () => {
	return (
		<>
			<Header sx="!relative" />
			<div className="min-h-screen max-w-6xl m-auto py-16 px-4">
				<Breadcrumbs links={links} />
				<h3 className="text-black text-2xl md:text-3xl font-semibold font-poppins my-4 md:my-8">Privacy Policy</h3>
				<div className="mb-8">
					<p className="text-lg mb-6">
						This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in
						US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an
						individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable
						Information in accordance with our website.
					</p>
					<h3 className="font-semibold text-xl mb-2 font-poppins">What personal information do we collect from the people that visit our blog, website or app?</h3>
					<p className="text-lg">We collect information from you when you fill out a form or enter information on our site.</p>
				</div>
				<div className="mb-8">
					<h3 className="font-semibold text-xl mb-2 font-poppins">How do we use your information?</h3>
					<p className="text-lg">
						We may use the information we collect from you when you fill up the form, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use
						certain other site features in the following ways:
						<ul className="list-disc pl-10 my-6">
							<li>To quickly adhere your inquiries.</li>
							<li>To serve as a reference and way to improve our services.</li>
						</ul>
					</p>
				</div>
				<div>
					<h3 className="font-semibold text-xl mb-2 font-poppins">How do we protect visitor information?</h3>
					<p className="text-lg">
						We use vulnerability scanning. We do not use an SSL certificate because:
						<ul className="list-disc pl-10 my-6">
							<li>Information regarding inquiry remains confidential within company</li>
						</ul>
					</p>
				</div>
				<div className="mt-8">
					<h3 className="font-semibold text-xl mb-2 font-poppins">Do we use 'cookies'?</h3>
					<p className="text-lg">
						We do not use cookies for tracking purposes You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do
						this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your
						cookies. If you disable cookies off, some features will be disabled that make your site experience more efficient and some of our services will not function properly. However,
						you can still send an inquiry.
					</p>
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
