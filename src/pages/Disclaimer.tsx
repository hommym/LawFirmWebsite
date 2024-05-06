import Breadcrumbs, { ILink } from "../components/molecules/Breadcrumbs";
import Header from "../components/molecules/Header";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Disclaimer",
		link: "/disclaimer",
	},
];
const Disclaimer = () => {
	return (
		<div className="w-full">
			<Header sx="!relative" />
			<div className="min-h-screen relative max-w-6xl m-auto px-4 py-16">
				<Breadcrumbs links={links} />
				<h3 className="text-black text-2xl md:text-3xl font-semibold font-poppins my-4 md:my-8">Disclaimer</h3>
				<div className="mb-8">
					<h3 className="font-semibold text-xl font-poppins">No Attorney-Client Relationship Created by Use of this Website:</h3>
					<p className="text-lg">
						Neither your receipt of information from this website, nor your use of this website to contact Al Reyami Advocates and Muhyealdeen International Legal Consultants or one of its
						attorneys creates an attorney-client relationship between you and Al Reyami Advocates and Muhyealdeen International Legal Consultants. As a matter of policy, Al Reyami
						Advocates and Muhyealdeen International Legal Consultants does not accept a new client without first investigating for possible conflicts of interests and obtaining a signed
						engagement letter. (Al Reyami Advocates and Muhyealdeen International Legal Consultants may, for example, already represent another party involved in your matter.) Accordingly,
						you should not use this website to provide confidential information about a legal matter of yours to Al Reyami Advocates and Muhyealdeen International Legal Consultants.
					</p>
				</div>
				<div className="mb-8">
					<h3 className="font-semibold text-xl font-poppins">No Legal Advice Intended:</h3>
					<p className="text-lg">
						This website includes information about legal issues and legal developments. Such materials are for informational purposes only and may not reflect the most current legal
						developments. These informational materials are not intended, and should not be taken, as legal advice on any particular set of facts or circumstances. You should contact an
						attorney for advice on specific legal problems. The communications with us through the website and the live chat are only a mode of getting in touch with us and no information
						shared through such communications should be considered as legal advice. Acting on any information provided through such communications is not advisable and Al Reyami Advocates
						and Muhyealdeen International Legal Consultants takes no responsibility and will not be liable for the same. Legal information provided through this website does not in any way
						stand as legal advice and it is always recommended to consult with a lawyer for the same.
					</p>
				</div>
				<div>
					<h3 className="font-semibold text-xl font-poppins">No Guarantee of Results:</h3>
					<p className="text-lg">
						Many of the practice summaries and individual attorney biographies on this website describe results obtained in matters handled for Al Reyami Advocates and Muhyealdeen
						International Legal Consultants clients. These descriptions are meant only to provide information about the activities and experience of our attorneys. They are not intended as
						a guarantee that the same or similar results can be obtained in every matter undertaken by our attorneys; and you should not assume that a similar result can be obtained in a
						legal matter of interest to you. The outcome of a particular matter can depend on a variety of factors? including the specific factual and legal circumstances, the ability of
						opposing counsel, and, often, unexpected developments beyond the control of any client or attorney.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Disclaimer;
