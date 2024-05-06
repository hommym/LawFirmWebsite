import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/molecules/Header";
import PageDesc from "../../components/molecules/PageDesc";
// import { ILink } from "../../components/molecules/Breadcrumbs";

import { articlesData } from "../../data/articles";
import { useParams } from "react-router-dom";

// const links: ILink[] = [
// 	{
// 		name: "Home",
// 		link: "/",
// 	},
// 	{
// 		name: "Our Expertise",
// 		link: "/expertise",
// 	},
// ];

const SingleExpertise = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [expertise, setExpertise] = useState<any>({});
	const { slugname } = useParams();
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const ex = articlesData.find((article) => article.slugname.toLowerCase() === slugname?.toLowerCase());
		setExpertise(ex);
	}, [slugname]);

	const others = useMemo(() => {
		const others = articlesData.filter((article) => article?.category?.trim() == expertise?.category?.trim()) || [];
		return others;
	}, [expertise]);
	return (
		<div className="w-full min-h-screen">
			<Header isTransparent={true} />
			<PageDesc text={expertise?.mainTopic} />

			<main className="w-full gap-4 px-4 h-auto flex items-stretch justify-between max-w-6xl mx-auto py-12">
				<article className="w-full md:w-2/3 h-full ">
					<h3 className="w-full border-b-[1px] py-3 font-poppins text-2xl md:text-3xl font-semibold">{expertise?.subTopic}</h3>

					<div dangerouslySetInnerHTML={{ __html: !showAll ? expertise?.article?.substring(0, 1500) : expertise?.article }} className="py-4 text-editor"></div>

					{expertise?.article?.length > 1500 && (
						<button onClick={() => setShowAll((prev) => !prev)} className="text-sec underline">
							Show {showAll ? "Less" : "More"}
						</button>
					)}
				</article>
				<article className="hidden md:block w-1/3 p-7 h-auto">
					<h3 className="text-2xl font-bold text-black font-poppins mb-8">Others In The Category</h3>

					<ul className="list-disc pl-5">
						{others?.map((other, index) => (
							<li key={index}>
								<Link to={`/expertise/${other.slugname}`} className="block mb-2 text-black hover:text-sec hover:underline text-sm">
									{other.mainTopic}
								</Link>
							</li>
						))}
					</ul>
				</article>
			</main>
		</div>
	);
};

export default SingleExpertise;
