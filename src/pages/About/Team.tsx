import Breadcrumbs, { ILink } from "../../components/molecules/Breadcrumbs";
import Header from "../../components/molecules/Header";

import teamData from "../../data/teamData.json";
const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Meet The Team",
		link: "/about/team",
	},
];

const partners = [
	{ name: "Nasser Yousuf Alkhamis", role: "Managing Partner", imageUrl: "https://tlrwebsites.s3.eu-north-1.amazonaws.com/nyk.ae/teams/Nasser-Alkhamis-scaled-e1660628624513+(1).jpg" },
	{ name: "Sunil Ambalavelil", role: "Sunil Ambalavelil", imageUrl: "https://tlrwebsites.s3.eu-north-1.amazonaws.com/nyk.ae/teams/Sunil-Ambalavelil-2.jpg" },
];
const Team = () => {
	return (
		<>
			<Header sx="!relative" />
			<div className="min-h-screen max-w-6xl mx-auto py-16">
				<Breadcrumbs links={links} />

				<div className="w-full grid mt-16 grid-cols-2 gap-8">
					{partners?.map((partner, index) => (
						<div
							className="w-full h-auto group hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-[5px] overflow-hidden group"
							key={index}>
							<div className="w-full h-[400px] overflow-hidden">
								<img src={partner?.imageUrl} alt="" className="w-full scale-100 duration-300 group-hover:scale-110 animation-all" />
							</div>
							<div className="group-hover:bg-white p-6">
								<h3 className="text-sec font-poppins">{partner?.role}</h3>
								<h3 className="mt-3 font-medium text-lg font-poppins">{partner?.name}</h3>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 grid grid-cols-2 gap-8">
					{teamData?.map((member, index) => (
						<div
							key={index}
							className="group w-full hover:cursor-pointer h-48 flex items-start justify-start hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-[5px] overflow-hidden bg-white">
							<div className="w-48 h-48 overflow-hidden bg-[#F3F3F3]">
								<img src={member.imageUrl} alt="" className="w-full group-hover:scale-105 animation-all duration-300" />
							</div>
							<div className="w-auto p-5">
								<p className="text-sec font-poppins">{member.role}</p>
								<h3 className="text-xl text-black">{member?.name}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Team;
