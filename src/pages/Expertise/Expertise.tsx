import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs, { ILink } from "../../components/molecules/Breadcrumbs";
import Header from "../../components/molecules/Header";
import PageDesc from "../../components/molecules/PageDesc";
import { articlesData, categories } from "../../data/articles";

const links: ILink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Our Expertise",
		link: "/expertise",
	},
];
const Expertise = () => {
	const [filter, setFilter] = useState("all");
	const [expertise, setExpertise] = useState(articlesData);

	useEffect(() => {
		if (filter === "all") return setExpertise(articlesData);

		// Filter
		setExpertise(articlesData.filter((article) => article?.category?.toLowerCase()?.trim() === filter?.trim()));
	}, [filter]);
	return (
		<div className="w-full min-h-screen">
			<Header isTransparent={true} />
			<PageDesc text="Our Expertise" />

			<main className="w-full max-w-6xl mx-auto py-24">
				<Breadcrumbs links={links} />

				{/* Filter */}
				<section className="flex gap-4 mt-3">
					{categories?.map((category, index) => (
						<button
							key={index}
							className={`${index > 0 ? "border-l-[1px] px-4" : ""} hover:cursor-pointer ${filter == category?.toLowerCase() ? "text-sec" : "hover:text-sec"}`}
							onClick={() => setFilter(category.toLowerCase())}>
							{category}
						</button>
					))}
				</section>

				<section className="mt-5 pl-6">
					<ul className="list-disc">
						{expertise?.map((exp) => (
							<li>
								<Link to={`/expertise/${exp?.slugname}`} className="w-full text-black text-sm mb-2 block hover:text-sec">
									{exp?.mainTopic}
								</Link>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Expertise;
