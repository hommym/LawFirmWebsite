import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");

	useEffect(() => {
		if (filter === "all") return setExpertise(articlesData);

		// Filter
		setExpertise(articlesData.filter((article) => article?.category?.toLowerCase()?.trim() === filter?.trim()));
	}, [filter]);

	useEffect(() => {
		if (!category) return;
		setFilter(category);
	}, [category]);
	return (
		<div className="w-full min-h-screen">
			<Header isTransparent={true} />
			<PageDesc text="Our Expertise" />

			<main className="w-full max-w-6xl mx-auto py-12 md:py-24 px-4">
				<Breadcrumbs links={links} />

				{/* Filter */}
				{/* For desktop */}
				<section className="hidden md:flex gap-4 mt-3">
					{categories?.map((category, index) => (
						<button
							key={index}
							className={`${index > 0 ? "border-l-[1px] px-4" : ""} ttext-[16px] hover:cursor-pointer ${filter == category?.toLowerCase() ? "text-sec" : "hover:text-sec"}`}
							onClick={() => setFilter(category.toLowerCase())}>
							{category}
						</button>
					))}
				</section>

				{/* For mobile */}
				<section className="md:hidden block mt-3">
					{categories?.map((category, index) => (
						<button
							key={index}
							className={`${index !== 0 ? "border-l-[2px] px-2" : "pr-2"} inline-block text-[12px] hover:cursor-pointer ml-4  ${
								filter == category?.toLowerCase() ? "text-sec" : "hover:text-sec"
							}`}
							onClick={() => setFilter(category.toLowerCase())}>
							{category}
						</button>
					))}
				</section>

				<section className="mt-5 pl-6">
					<ul className="list-disc">
						{expertise?.map((exp, index) => (
							<li key={index}>
								<Link to={`/expertise/${exp?.slugname}`} className="w-full text-black text-sm mb-2 inline-block md:block hover:text-sec">
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
