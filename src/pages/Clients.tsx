import Header from "../components/molecules/Header";
import PageDesc from "../components/molecules/PageDesc";
import clients from "../data/clients";

const Clients = () => {
	return (
		<div className="relative min-h-screen">
			<Header isTransparent={true} />
			<PageDesc text="Clients" />

			<section className="w-full bg-white py-12 pb-24">
				<div className="w-full max-w-5xl mx-auto">
					<div className="w-full flex justify-between items-center border-b-[1px] pb-10">
						<h3 className="font-poppins text-black font-semibold text-3xl">Some of our Clients</h3>
						<p className="w-1/2 text-xl">Our valuable corporate clients who have benefitted from us by trusting our team's expertise.</p>
					</div>
					<div className="grid grid-cols-5 mt-20 gap-10">
						{clients?.map((client, index) => (
							<div className="w-full h-24 flex items-center justify-center p-5" key={index}>
								<img src={client} alt={`Client ${index + 1}`} className="" />
							</div>
						))}
					</div>

					<p className="mt-8 text-lg">*Note: All Logos are used with approval from our Client's Management</p>
				</div>
			</section>
		</div>
	);
};

export default Clients;
