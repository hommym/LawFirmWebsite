import Breadcrumbs, { ILink } from "../../components/molecules/Breadcrumbs";
import PageDesc from "../../components/molecules/PageDesc";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Hsitory & Commitment",
		link: "/about/history",
	},
];
const History = () => {
	return (
		<div className="min-h-screen">
			<PageDesc text="History & Commitment" />

			<div className="w-full py-20 mx-auto max-w-6xl h-auto">
				<section className="w-full flex items-stretch justify-between gap-12">
					<div className="w-1/2">
						<Breadcrumbs links={links} />
						<h1 className="text-black w-[90%] font-semibold my-8 text-4xl leading-[50px]">Tradition and Unwavering Dedication</h1>

						<p className="mb-4">
							The firm is a collaboration of distinct legal practitioners in the United Arab Emirates -{" "}
							<span className="text-sec">Mr. Hassan Matar Al Riyami, LLB, LLM, MBA and Mr. Naser Muhyealdeen, Bachelor of Law, Juris Doctor in Law</span>
						</p>
						<p className="mb-4">
							Both Mr. Hassan Matar Al Riyami, LLB, LLM, MBA, and Mr. Naser Muhyealdeen, Bachelor of Law, Juris Doctor in Law, are well-respected members of the legal community in the
							United Arab Emirates, and they have worked together to establish this firm.
						</p>
						<p className="mb-4">
							The profound asset of the firm is the experience, knowledge of law, and strong relationship among its member of staffs and officers – the strong solidarity, team play
							spirit, and dynamism of each member of the firm brought it status at present.
						</p>
						<p>
							The law firm is firmly committed to the principle that every case, regardless of its size, will receive the same level of meticulous attention to detail in its handling. In
							addition, the highest level of professionalism, dedication, and expertise will be applied to each and every case.
						</p>
					</div>

					<div className="mt-8 w-1/2">
						<div className="w-full h-[50vh] rounded-[10px] ">
							<img src="https://alriyamiadvocates.com/wp-content/uploads/2023/05/law2.jpg" alt="" />
						</div>

						<p className="font-semibold mt-4">
							Since its humble beginnings, the company has grown to include more than fifty (50) lawyers across its offices in Dubai, Abu Dhabi, Riyadh, Al-Khobar, Istanbul, and New
							York. In addition, the company is made up of officers, paralegals, and administrative support staff members who possess a variety of skills. With the makeup of the firm, it
							faithfully ensures that it will be able to conquer the diversity and obstacles that are present in the field of legal profession by delivering a diverse array of
							professional and specialized services.
						</p>
					</div>
				</section>

				<section className="w-full my-24">
					<div className="w-full flex gap-8 items-start">
						<div className="w-[23%] h-auto rounded-[5px] overflow-hidden">
							<img src="https://alriyamiadvocates.com/wp-content/uploads/2023/08/Hassan-Al-Riyami.jpg" alt="" />
						</div>
						<div className="w-3/4">
							<h1 className="text-4xl font-semibold text-sec pb-[3px] mb-4 border-b-[1px]">Founding Partner</h1>
							<h3 className="text-2xl mb-6">
								<span className="font-semibold text-4xl">Hassan Matar Al Riyami,</span>
								LL.B, LLM, MBA
							</h3>

							<div className="flex items-stretch justify-between gap-8">
								<div className="w-1/2">
									<p>
										Mr. Hassan Matar Al Riyami, a prominent attorney in the United Arab Emirates, is a graduate of the Faculty of Law at the United Arab Emirates University (1989).
										Since then, he has been properly registered as an attorney in the country. In addition to his law degree, he also holds a Certificate in Information (1997) and
										has attended numerous courses with the Ministry of Justice (1989-2004) and Administrative Development Institute.
									</p>
								</div>

								<div className="w-1/2">
									<p className="mb-5">Also, he is currently pursuing a Master of Business Administration from United Arab Emirates University.</p>
									<p>
										With his humble beginnings as a full-time attorney, he was able to get numerous legal consultancies in the region, specializing in contract drafting,
										negotiations, arbitration, business formation, trademark registration, civil, commercial, and criminal law.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-8 mt-24 items-start">
						<div className="w-[23%] h-auto rounded-[5px] overflow-hidden">
							<img src="https://alriyamiadvocates.com/wp-content/uploads/2023/08/image-71.jpg" alt="" />
						</div>
						<div className="w-3/4">
							<h1 className="text-4xl font-semibold text-sec pb-[3px] mb-4 border-b-[1px]">Founding Partner & Director</h1>
							<h3 className="text-2xl mb-6">
								<span className="font-semibold text-4xl">Naser Muhyealdeen,</span>
								B.A., B.S., J.D.
							</h3>

							<div className="flex items-stretch justify-between gap-8 mt-12">
								<div className="w-1/2">
									<p>Naser Muhyealdeen is the founding partner and director of the Dubai office of Naser Muhiealdeen & Associates.</p>

									<ul className="list-disc pl-10 my-5">
										<li>Naser Muhyealdeen holds a B.A., a B.S., and a J.D.</li>
										<li>Qualified Member of the Legal Affairs Division of the Dubai Government</li>
										<li>Member of the UAE Rulers' Court as a Lawyer and Counsel</li>
										<li>
											Member of the International Law Bar Association and a member of the DIFC Courts, as well as an associate member of the Dubai International Arbitration
											Centre.
										</li>
										<li>A participant in the Abu Dhabi International Arbitration Centre</li>
									</ul>

									<p>
										Mr. Naser Muhyealdeen, B.A., B.S., J.D., of the State of California, United States, is a multilingual international attorney who delivers exceptional legal
										services in the area.
									</p>
								</div>

								<div className="w-1/2">
									<p>
										During the course of more than seventeen (17) years as an attorney, he has litigated more than two hundred (200) International Arbitration Cases against
										well-known developers and business entities in the GCC region; his client satisfaction record is 95%. In addition, he has overseen and participated in over 500
										mediation cases at the Dubai Courts Mediation Centre. Registered as a certified litigator in DIFC courts, he also represents high-net-worth individuals and
										businessmen from Saudi Arabia, the GCC, Europe, and Asia. Acting as a private advisor to royal families and private investors from the Kingdoms of Saudi Arabia
										and Bahrain at present.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default History;
