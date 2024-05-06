import Breadcrumbs, { ILink } from "../components/molecules/Breadcrumbs";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Terms of Use",
		link: "/terms-of-use",
	},
];
const TermsOfUse = () => {
	return (
		<div className="min-h-screen max-w-6xl m-auto py-24">
			<Breadcrumbs links={links} />
			<h3 className="text-black text-3xl font-semibold font-poppins my-8">Terms of Use</h3>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Introduction</h3>
				<p className="text-lg">
					These terms and conditions, as well as any other additional terms, conditions, notices and disclaimers displayed elsewhere on this Website [
					<span className="text-sec">www.alriyamiadvocates.com</span>] (<span className="text-black font-semibold">Terms</span>
					) apply to your use of this Website. Please read these Terms carefully before accessing or using the information and services available through this Website. These Terms may be
					modified from time to time without notice to you and you should therefore regularly review these Terms for any such modifications. <br />
					<br />
					Your access and/or use of this Website constitutes your continued acceptance of all terms, conditions, and notices that are effective as of the date and time you use or access the
					Website. These Terms will constitute a legal agreement between ?you? (the user of this Website) and ?us? (Al Riyami Advocates and Muheyeldin International Legal Consultants,
					hereinafter <span className="text-black font-semibold">Hassan Al Riyami </span> )
				</p>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Use of the Website</h3>
				<p className="text-lg">
					This Website is owned by Al Reyami Advocates and Muhyealdeen International Legal Consultants. The material on this Website has been produced by Hassan Al Riyami and has been
					prepared as general information about Hassan Al Riyami and its services. It is not intended to provide legal advice and, as such, the content does not constitute legal advice, and
					you should not act on the information provided on this Website without seeking proper legal advice. Use of this Website does not create any solicitor-client relationship between
					you and Hassan Al Riyami.
				</p>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Be careful with confidential information</h3>
				<p className="text-lg">
					Communications via this Website do not establish a lawyer-client relationship and any information sent to Hassan Al Riyami before establishing a lawyer-client relationship as
					evidenced by signed terms of engagement can and will be used for the benefit of the firm's existing clients; accordingly, until we have formally established a lawyer-client
					relationship, do NOT send any confidential information or any information you would expect to be maintained in confidence through this Website or through any email address posted
					on this Website.
				</p>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Copyright</h3>
				<p className="text-lg">
					Unless otherwise expressly indicated, copyright of the contents of this Website (<span className="font-semibold text-black">Website Content</span> ) is owned by or is licensed to
					Hassan Al Riyami . The Website Content may not be copied, reproduced, republished, uploaded, posted, transmitted or distributed in whole or part for any purpose other than
					individual viewing of this Website without the express prior permission of Hassan Al Riyami .
				</p>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Privacy</h3>
				<p className="text-lg">
					Hassan Al Riyami may collect personal information from you when if you use e-mail links via the Website to communicate with Al Riyami Advocates and Muheyeldin International Legal
					Consultants, access password-protected areas or otherwise provide us with personally identifiable information.
					<br />
					<br />
					In addition to the personal information Hassan Al Riyami may collect through this Website, Hassan Al Riyami collects other non-personal information. For each visitor to this
					Website, the Website?s server will automatically recognize and store your Internet Protocol address, but not any personally identifiable information about you. In addition, this
					Website uses cookies. Most web browsers are set by default to accept cookies, however you may set your browser to either prompt or refuse cookies. Please note that rejecting
					cookies will restrict the functionality of this Website as a whole. Hassan Al Riyami uses the non-personal information collected for tracking the statistics of this Website, which
					allows us to better understand our users and improve the layout and functionality of this Website.
					<br />
					<br />
					Hassan Al Riyami will not share your personal information with any third party without your prior consent. Hassan Al Riyami is not responsible for the actions of any third party to
					which it provides your personal information with your prior consent.
				</p>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Third party links</h3>
				<p className="text-lg">
					This Website may contain links to third party sites. Hassan Al Riyami does not recommend or endorse the content or privacy practices of any third party sites which may be linked to
					or from this Website, or products or services of any third party organization mentioned or described on this Website or linked to or from this Website. You acknowledge that you
					enter any third party sites at your own risk.
				</p>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold mb-3 text-xl font-poppins">Limitation of liability</h3>
				<p className="text-lg">
					To the extent permitted by the law, Hassan Al Riyami will not be liable for any direct, indirect, punitive, incidental, special, or consequential damages or loss (including,
					without limitation, incidental and consequential damages, lost profits, or damages resulting from lost data or business interruption) arising out of, or in way connected with, the
					use or inability to use the Website and the Website Content.
				</p>
			</div>
			<div>
				<h3 className="font-semibold mb-3 text-xl font-poppins">Jurisdiction</h3>
				<p className="text-lg">
					Your use of this Website and any dispute arising out of such use of this Website is subject to the laws of the United Arab Emirates.
					<br />
					<br />
					Legal content is based on laws applicable in the countries in which Hassan Al Riyami practices. Hassan Al Riyami does not represent that it is authorized to provide legal advice in
					all the jurisdictions from which this website can be viewed.
					<br />
					<br />
					Thank you for your cooperation. We hope you find the Website helpful and convenient to use. If you have questions or comments regarding this website please email us at
					<span className="text-sec"> info@alriyamiadvocates.com.</span>
					<br />
					<br />
					If there are any technical problems with this Website, contact us at <span className="text-sec"> info@alriyamiadvocates.com.</span>
				</p>
			</div>
		</div>
	);
};

export default TermsOfUse;
