import Breadcrumbs, { ILink } from "../components/molecules/Breadcrumbs";
import Header from "../components/molecules/Header";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "References",
		link: "/references",
	},
];
const References = () => {
	return (
		<>
			<Header sx="!relative" />
			<div className="px-4 min-h-screen max-w-6xl m-auto py-16">
				<Breadcrumbs links={links} />
				<h3 className="text-black text-2xl md:text-3xl font-semibold font-poppins my-4 md:my-8">References</h3>
				<ul className="list-disc pl-5 text-lg">
					<li>Dispense Express, a multimillion dollars pharmaceutical company in California.</li>
					<li>Emar Al Al Dir Alarabi and Oasis Developers owned by Shiekh Fahad Bin Rakan Hithleen in Saudi Arabia</li>
					<li>
						Almutawei Investments, Dubai, a multimillion dollar family owns investment company with investmens in the Palms and other similar projects in Dubai and owns manufacturing &
						industry companies.
					</li>
					<li>Dr. Khaleed Mansour, CEO of Al-Juma Group in Saudi Arabia. Owners of the Meridien hotel chain and the Movenpick hotels in Damam.</li>
					<li>Al Manna, in Qatar. They own and operate many investments in Qatar and are shareholders in Qatar Islamic Bank.</li>
					<li>Mr. Ghanim Al Mazroui, Chairman of Emirates Fortune Group, previously Minister Pleni for UAE Foreign Ministry</li>
					<li>Turklerler Construction, one of the top developers worldwide and one of the top 10 in Turkey.</li>
					<li>ADNOC Petroleum, Mr. Ahmad Al Dhari</li>
					<li>The Republic of Turkey Prime Ministry Investment Support and Promotion Agency</li>
					<li>Dubai Investment Bank</li>
					<li>Noor Investment, Kuwait</li>
					<li>Capital Eye Investment Group (Kuwait)</li>
					<li>Mechanical Petrolium Parts General Trading (Dubai)</li>
					<li>Dr. Khan Mehdi, owner of the American British Medical & Surgery Center in Dubai and also owns 23 Medical Centers in London</li>
					<li>Hamid Al Rashid, Kuwait, owner and partner of Al Rashid Development & Real Estate</li>
					<li>Jamal Al Serkal, CEO of Al Serkal Group and owner of 41 companies in Dubai and International.</li>
					<li>New Line Group Construction, CEO Dr. Abdula Al Mushrakh, Former Dean of Abu Dhabi Police Academy and Former Counselor of UAE Embassy to Lebanon.</li>
					<li>Avo Movsesian, Movsesian Inc. Property Management in California.</li>
					<li>Pritiba Construction, CEO Ravi Pratiba, India.</li>
					<li>Grand National Assembly of Turkey, Mr. Aydin.</li>
					<li>Hawk Energy Dubai.</li>
					<li>Green Save Solar Energy Finance Company.</li>
					<li>Saudi German Hospital.</li>
					<li>Leaders Fort (subsidiary of Emaar companies)</li>
					<li>Al Jaber Group of Construction.</li>
					<li>Al-Shafar Group of Construction.</li>
				</ul>
			</div>
		</>
	);
};

export default References;
