import PrimaryButton from "../components/atoms/PrimaryButton";
import Header from "../components/molecules/Header";

import WhoWeAreImage from "../assets/who-we-are.jpeg";

const Homepage = () => {
	return (
		<div className="w-full relative min-h-screen bg-[green]">
			<section className="w-full h-[93vh] border-b-[1px] bg-black hero_bg flex items-center justify-center flex-col">
				<Header isTransparent={true} />
				<h1 className="text-4xl capitalize font-bold w-[80%] text-center">Welcome To TRUONG LLC legal professionals</h1>
				<p className="mt-6 text-xl text-white">Choose one of the most reputed law firms in the UAE</p>

				<PrimaryButton text="Explore More" href="/about/history" sx="mt-8 hover:bg-sec" />
			</section>
			<section className="w-full bg-black ">
				<div className="w-full py-4 max-w-6xl mx-auto flex items-center justify-between">
					<div className="w-2/3 flex items-center justify-between">
						<div className="w-1/2 flex items-center justify-start gap-6">
							<div className="w-20 h-20 bg-white rounded-full overflow-hidden">
								<img src="https://tlrwebsites.s3.eu-north-1.amazonaws.com/nyk.ae/teams/Nasser-Alkhamis-scaled-e1660628624513+(1).jpg" alt="" />
							</div>
							<div>
								<h3 className="text-sec">Founding Partner</h3>
								<p className="text-white">Nasser Yousuf Alkhamis</p>
							</div>
						</div>
						<div className="w-1/2 flex items-center justify-start gap-6">
							<div className="w-20 h-20 bg-white rounded-full overflow-hidden">
								<img src="https://tlrwebsites.s3.eu-north-1.amazonaws.com/nyk.ae/teams/Sunil-Ambalavelil-2.jpg" alt="" />
							</div>
							<div>
								<h3 className="text-sec">Founding Partner</h3>
								<p className="text-white">Sunil Ambalavelil</p>
							</div>
						</div>
					</div>
					<PrimaryButton text="View All Attorneys" sx="!bg-transparent border-[1px] !py-3" textSx="text-white !text-lg font-inria" />
				</div>
			</section>

			<section id="who" className="bg-white py-20">
				<div className="w-full max-w-6xl mx-auto flex items-stretch justify-between gap-12">
					<article className="w-3/5">
						<h3 className="mb-3 font-semibold">WHO WE ARE</h3>
						<h1 className="text-sec font-semibold mb-8 text-4xl leading-[45px]">Our firm is home to Dubai's most qualified legal experts.</h1>

						<p className="text-lg">
							Truong LLC & Advocates is a full-service law firm, providing integrated professional and top legal consultant services in Dubai UAE to its local and international clients.
							Unparalleled legal representation is offered across various practice areas. The set of legal services includes Enterprises Level Services especially tailored for large
							organizations having operations spanning multiple cities. SME Services for small and medium entrepreneurs, and personalized solutions for individual and start-up
							businesses.
						</p>

						<div className="flex mt-8 items-center gap-2 justify-between">
							<div className="flex items-end justify-start gap-3 w-full">
								<h3 className="text-5xl font-semibold font-inria-serif text-black">7,000</h3>
								<p className="font-medium font-poppins text-[16px]">Court Cases</p>
							</div>
							<div className="flex items-end justify-start gap-3 w-full">
								<h3 className="text-5xl font-semibold font-inria-serif text-black">300</h3>
								<p className="font-medium font-poppins text-[16px]">Arbitration Proceedings</p>
							</div>
							<div className="flex items-end justify-start gap-3 w-full">
								<h3 className="text-5xl font-semibold font-inria-serif text-black">25</h3>
								<p className="font-medium font-poppins text-[16px]">Years of Experience</p>
							</div>
						</div>
					</article>
					<article className="w-2/5 h-[80vh] bg-[red]">
						<img src={WhoWeAreImage} className="w-[300%] h-full" alt="" />
					</article>
				</div>
			</section>

			<section id="who" className="bg-white py-20">
				<div className="w-full max-w-6xl mx-auto flex items-stretch justify-between gap-12">
					<article className="w-full">
						<h3 className="mb-3 font-semibold">OUR LOCATIONS</h3>
						<h1 className="text-sec w-1/2 font-semibold mb-8 text-4xl leading-[45px]">Discover elite legal services with our vast network.</h1>

						<div className="w-full h-[90vh]">
							<video autoPlay muted loop className="w-full h-full">
								<source src="map-video.mp4" type="video/mp4" />
							</video>
						</div>
					</article>
				</div>
			</section>

			<section className="w-full bg-white h-[60vh]">
				<div className="w-full max-w-6xl mx-auto flex gap-12 items-stretch justify-between">
					<article className="w-1/2">
						<h3 className="mb-3 font-semibold">CO-OPERATION</h3>
						<h1 className="text-sec  font-semibold mb-8 text-5xl leading-[45px]">International Legal Consultants Associate in Moscow.</h1>
					</article>
					<article className="w-1/2 mt-8">
						<p className="text-lg">
							<span className="text-sec">Yakovlev & Partners Law Group®</span> is based in Moscow, with regional offices in Kirov, Nizhny Novgorod, Samara, Tver, and Makhachkala. It was
							founded more than <span className="text-sec">25 years</span> ago with the establishment of MaTEC® Limited Liability Company (Marketing, Trading, Engineering, and Consulting
							agency), by lawyers with extensive experience of work in state-owned institutions. With over 500 members in over 80 countries, the company belongs to a worldwide law-audit
							firm network. Over 75 highly qualified professionals work for it, many with vast government and commercial experience.
						</p>
					</article>
				</div>
			</section>

			<section className="w-full bg-white h-[60vh] join_us"></section>
		</div>
	);
};

export default Homepage;
