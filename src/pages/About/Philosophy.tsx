import Breadcrumbs, { ILink } from "../../components/molecules/Breadcrumbs";
import PageDesc from "../../components/molecules/PageDesc";
import PrimaryButton from "../../components/atoms/PrimaryButton";
import Header from "../../components/molecules/Header";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Our Philosophy",
		link: "/about/our-philosophy",
	},
];

const Philosophy = () => {
	return (
		<div className="w-full relative min-h-screen">
			<Header isTransparent={true} />
			<PageDesc text="Our Philosophy" />

			<div className="px-4">
				<section id="who" className="bg-white py-10 md:py-20 ">
					<div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-3 md:gap-12">
						<article className="w-full md:w-1/2">
							<Breadcrumbs links={links} />
							<h1 className="text-sec w-full font-semibold mt-4 md:mt-8 text-2xl md:text-4xl leading-[45px]">
								The Legal <span className="text-black">Approach</span>{" "}
							</h1>
						</article>

						<article className="w-full md:w-1/2">
							<p className="leading-[30px]">
								Our company has cultivated a resilient legal system that is adept at managing and resolving complex legal matters. Our founders personally oversee each case and
								implement a hands-on strategy to ensure its successful resolution. We have a diverse customer base that spans numerous industries and countries, and we offer guidance
								to both individuals and businesses alike.
							</p>

							<p className="text-xl font-semibold my-8 text-black">
								“The firms commitment is to provide transparent, honest and flexible legal service to its client- a reasonable cost for state of the art legal services which brings
								clients trust and confidence”.
							</p>
							<p className="leading-[30px]">
								With a proven track record of success in our specialized fields, we have a high success rate and are proud to deliver exceptional results for our clients.
							</p>
						</article>
					</div>
				</section>
				<section className="pb-20">
					<div className="w-full max-w-6xl mx-auto flex-col md:flex-row flex justify-between items-center gap-4">
						<div className="md:px-4">
							<div className="w-8 h-8 mb-4">
								<img src="https://alriyamiadvocates.com/wp-content/uploads/2023/05/icon1.png" alt="" />
							</div>
							<h3>Our Mission</h3>
							<p>To deliver extraordinary, devoted, and efficient legal services that produce high-quality and prompt outcomes with care and dedication.</p>
						</div>
						<div className="md:px-8 border-l-[1px]">
							<div className="w-8 h-8 mb-4">
								<img src="https://alriyamiadvocates.com/wp-content/uploads/2023/05/icon2.png" alt="" />
							</div>
							<h3>The Vision</h3>
							<p>We are committed to defending the legal rights of our clients based on the values of excellence, integrity, and skill within the confines of the law.</p>
						</div>
						<div className="md:px-8 border-l-[1px]">
							<div className="w-8 h-8 mb-4">
								<img src="https://alriyamiadvocates.com/wp-content/uploads/2023/05/icon3.png" alt="" />
							</div>
							<h3>Core Values</h3>
							<p>Attorneys, consultants, and legal advisors, as well as legal support staff, committed to providing superior, devoted, and multilingual legal services and solutions.</p>
						</div>
					</div>
				</section>

				<section className="w-full h-[40vh] md:h-[60vh] philosophy_banner flex flex-col justify-center md:justify-end max-w-6xl mx-auto mb-24 p-8">
					<div className="w-full md:w-1/2 ">
						<h1 className="text-2xl md:text-4xl font-semibold">
							With UAE's <span className="text-sec">best lawyers,</span> we maintain a stellar reputation.
						</h1>

						<PrimaryButton text="Contact us" sx="!py-3 mt-3 !bg-sec" href="/contact" />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Philosophy;
